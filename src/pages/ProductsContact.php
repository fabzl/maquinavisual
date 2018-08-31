<!DOCTYPE html>
<html lang="en">

<head>
	    <link href="mail.php">    
</head>
<body>
<?php
    
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");

    $name = $_POST["name"];
    $email = $_POST["email"];
    $content = $_POST["message"];
    $foremail = "noreply@maquinavisual.com";
    $subject = $name . " Te ha escrito a través de maquinavisual.com preguntando por productos";
    $message = "Nombre: " . $name . "\nCorreo: " . $email . "\nMensaje:\n" . $content;
    mail("noreply@maquinavisual.com", $subject, utf8_decode($message));
    mail("javier_munoz_navarrete@hotmail.com", $subject, utf8_decode($message));
    echo 
    die();
    
?>
</body>
</html>