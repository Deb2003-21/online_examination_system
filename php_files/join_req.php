<?php

require __DIR__ . '/vendor/autoload.php';
use WebSocket\Client;
error_reporting(0);
header('Access-Control-Allow-Origin: *');
//header('Content-Type: application/json');
$con=mysqli_connect("localhost","root","","exam_s");
//if($_SERVER['REQUEST_METHOD']==='POST'){
$semail=$_REQUEST['semail'];
$mob=$_REQUEST['mob'];
$id=$_REQUEST['id'];

try{
if ($mob=='' && $id==''){
echo"empty  input ";
}
else{
  if($mob!='')
  {
    $q2="select teacher_id from teacher_rofile where mobile='$mob'";
    $r2=mysqli_query($con,$q2);
    if($res=mysqli_fetch_assoc($r2))
    {
        $id=$res['teacher_id'];
    }
  }  
$q1="insert into join_requst values('$semail','$id','wait')";
$r=mysqli_query($con,$q1);
echo "succesfully sent";
//include('request_info.php');

$client = new Client("ws://localhost:8080/");
$message = json_encode(['type' => 'approve', 'message' => 'Approval granted']);
$client->send($message);
$client->close();
}
}

catch(Exception $e)
{
//echo $e;
echo"invalid input!! check the data send again  or don't send request again if u sent it";
//print_r($_REQUEST);
}
//}

?>