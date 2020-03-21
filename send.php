<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userFone'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'natalakucerova@gmail.com';                     // SMTP username
    $mail->Password   = 'zaqxsw00';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('natalakucerova@gmail.com');
    $mail->addAddress('sigitova.lena@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userFone}. Его почта: ${userEmail}";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}