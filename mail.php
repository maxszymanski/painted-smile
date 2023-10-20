<?php

$firstName = $_POST["name"];
$phone = $_POST["tel"];
$from = $_POST["email"];
$subject = "Widomosc z formularza malowanyusmiech.pl";
$to = "kontakt@malowanyusmiech.pl";
$message = $_POST["message"];

$txt = "imie: " . $firstName . " " . "\r\n" . "Nr. tel: " . $phone . "\r\n" . "E-mail: " . $from . "\r\n" . "\r\n" . "tresc: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Replay-to: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("location: /index.html?mail_status=sent");
} else {
    header("location: /index.html?mail_status=error");
}