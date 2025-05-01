<?php
error_reporting(0);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$con=mysqli_connect("localhost","root","","exam_s");
$email=$_GET['email'];

$q2="SELECT  name from signup where email='$email' ";
$r2=mysqli_query($con,$q2);
if($res=mysqli_fetch_assoc($r2)){
$data[]=[
"name"=>$res['name'],

];

}

echo json_encode($data);
//print_r($_REQUEST)
?>