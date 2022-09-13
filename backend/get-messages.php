<?php
include("./connection.php");
// select messages and emails
$query = $db->prepare("SELECT email, message FROM receivedforms");
$query->execute();
$result = $query->get_result();

$messages = [];

// get all messages and emails from database and store them in json array messages
while ($row = $result->fetch_assoc()) {
    $messages["messages"][] = ["email" => $row['email'], "message" => $row['message']];
}

$json = json_encode($messages);
echo $json;
