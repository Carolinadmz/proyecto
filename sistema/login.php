<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login'])) {
        // Lógica para iniciar sesión
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM usuarios WHERE username = ?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$username]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            header("Location: bienvenido.php");
            exit;
        } else {
            $error = "Usuario o contraseña incorrectos.";
        }
    } elseif (isset($_POST['register'])) {
        // Lógica para registrar un nuevo usuario
        $newUsername = $_POST['new_username'];
        $newPassword = password_hash($_POST['new_password'], PASSWORD_DEFAULT);

        try {
            $query = "INSERT INTO usuarios (username, password) VALUES (?, ?)";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$newUsername, $newPassword]);
            $message = "Usuario registrado con éxito.";
        } catch (PDOException $e) {
            $error = "Error: " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="login-container">
            <h2 class="form-title">Iniciar Sesión</h2>
            <?php 
            if (isset($error)) echo "<p class='text-danger text-center'>$error</p>"; 
            if (isset($message)) echo "<p class='text-success text-center'>$message</p>";
            ?>
            <!-- Formulario de inicio de sesión -->
            <form action="login.php" method="POST">
                <div class="form-group">
                    <label for="username" class="form-label">Nombre de Usuario:</label>
                    <input type="text" class="form-control" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>
                <button type="submit" name="login" class="btn btn-primary btn-block">Iniciar Sesión</button>
            </form>

            <hr>

            <h3 class="form-title">Registrar Nuevo Usuario</h3>
            <!-- Formulario de registro de usuario -->
            <form action="login.php" method="POST">
                <div class="form-group">
                    <label for="new_username" class="form-label">Nuevo Nombre de Usuario:</label>
                    <input type="text" class="form-control" id="new_username" name="new_username" required>
                </div>
                <div class="form-group">
                    <label for="new_password" class="form-label">Nueva Contraseña:</label>
                    <input type="password" class="form-control" id="new_password" name="new_password" required>
                </div>
                <button type="submit" name="register" class="btn btn-success btn-block">Registrar Usuario</button>
            </form>
        </div>
    </div>
</body>
</html>

