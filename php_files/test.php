<?php
include('smtp/PHPMailerAutoload.php');



function smtp_mailer($to, $subject, $msg) {
    $mail = new PHPMailer(); 
    $mail->IsSMTP(); 
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'tls'; 
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587; 
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 2; // Enable debugging
    $mail->Username = "examio663@gmail.com";
    $mail->Password = "zlbf lwuy ohsx nhck";
    $mail->SetFrom("examio663@gmail.com");
    $mail->Subject = $subject;
    $mail->Body = "hello, welcome to examio. " . $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true // Set to true for self-signed certificates
        )
    );

    if (!$mail->Send()) {
        return "Mailer Error: " . $mail->ErrorInfo;
    } else {
        return 'sucess';
    }
}
?>
