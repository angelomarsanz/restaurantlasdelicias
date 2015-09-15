<?php
header ('Content-type: text/html; charset=utf-8');  
if(isset($_POST['micorreo'])) {
// Debes escribir la dirección de tu correo
$email_to = "angelomarsanz@gmail.com";
$email_subject = "Contacto desde el sitio web";
// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['minombre']) ||
!isset($_POST['micorreo']) ||
!isset($_POST['micelular']) ||
!isset($_POST['mitelefonofijo']) ||
!isset($_POST['micomentario'])) {
echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}
$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['minombre'] . "\n";
$email_message .= "Correo: " . $_POST['micorreo'] . "\n";
$email_message .= "Celular: " . $_POST['micelular'] . "\n";
$email_message .= "Teléfono fijo: " . $_POST['mitelefonofijo'] . "\n";
$email_message .= "Comentario: " . $_POST['micomentario'] . "\n\n";
$email_de = strip_tags($_POST['micorreo']);
// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_de."\r\n".
'Reply-To: '.$email_de."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
echo "¡El formulario se ha enviado con éxito!";
}
?>