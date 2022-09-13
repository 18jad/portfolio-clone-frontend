<?php
include("./connection.php");

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$response = [];
try {
    $query = $db->prepare('INSERT INTO receivedforms(`name`, email, phone, `message`) VALUE (?, ?, ?, ?)');
    $query->bind_param("ssss", $name, $email, $phone, $message);
    $query->execute();
    $response = ["status" => 200, "message" => "Form successfully sent."];
} catch (Exception $e) {
    $response = ["status" => 405, "message" => $e];
}

$json = json_encode($response);
echo $json;
echo $mysqli;
