<?php 
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenid@</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="welcome-container">
            <h1>Bienvenid@, <?php echo $_SESSION['username']; ?>!</h1>
            <p>Has iniciado sesión correctamente.</p>
            <a href="logout.php" class="btn btn-danger">Cerrar sesión</a>
        </div>
    </div>
</body>
</html>


