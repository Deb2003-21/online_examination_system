

<?php

require __DIR__ . '/vendor/autoload.php';

use WebSocket\Client;
// Assuming this file is included and `$notifier` is available
//include('server.php');
global $notifier;

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$email=$_REQUEST['email'];
$c=$_REQUEST['check'];
$id=$_REQUEST['id'];

if ($c=='wait'){
    $q1="delete from join_requst where email='$email' and teacher_id='$id' ";
    mysqli_query($con,$q1);
}
else{
$q1="UPDATE join_requst
SET status = '$c' WHERE  email='$email' and teacher_id='$id'";
mysqli_query($con,$q1);
 
sleep(5); 
$client = new Client("ws://localhost:8080/");
$message = json_encode(['type' => 'approval', 'message' => 'Approval granted']);
$client->send($message);
$client->close();
// Simulate handling an approval


}
}
?>