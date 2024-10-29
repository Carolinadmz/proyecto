<?php
$host = "localhost";
$user = "root";
$password = ""; // Deja vacío si no tienes contraseña

try {
    // Conectar a MySQL sin seleccionar base de datos
    $pdo = new PDO("mysql:host=$host", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Crear la base de datos
    $pdo->exec("CREATE DATABASE IF NOT EXISTS sistema_login CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci");
    echo "Base de datos 'sistema_login' creada o ya existente.<br>";

    // Usar la base de datos
    $pdo->exec("USE sistema_login");

    // Crear la tabla 'usuarios' con restricción UNIQUE en username
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
    ");
    echo "Tabla 'usuarios' creada o ya existente.<br>";

    // Insertar usuarios múltiples con preparación para evitar duplicados
    $usuarios = [
        ['admin', '123456'],
        ['usuario1', 'contraseña123'],
        ['usuario2', 'password456']
    ];

    $sql = "INSERT IGNORE INTO usuarios (username, password) VALUES (:username, :password)";
    $stmt = $pdo->prepare($sql);

    foreach ($usuarios as $usuario) {
        $passwordHash = password_hash($usuario[1], PASSWORD_DEFAULT);
        $stmt->bindParam(':username', $usuario[0]);
        $stmt->bindParam(':password', $passwordHash);
        $stmt->execute();
    }

    echo "Usuarios agregados con éxito (si no existían).<br>";

} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>

