<?php
$conexion = new mysqli("localhost", "root", "", "sistema_login");

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Agregar un usuario nuevo
$username = 'nuevo_usuario';
$password = 'nueva_contraseña';

// Verificar si el usuario ya existe
$sql = "SELECT COUNT(*) FROM usuarios WHERE username = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($exists);
$stmt->fetch();
$stmt->close();

if ($exists == 0) {
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO usuarios (username, password) VALUES (?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ss", $username, $passwordHash);

    if ($stmt->execute()) {
        echo "Usuario '$username' creado correctamente.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "El usuario '$username' ya existe.";
}

$conexion->close();
?>

