<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$id=$_REQUEST['id'];

$q1="SELECT * from teacher_rofile where teacher_id='$id'";
$r=mysqli_query($con,$q1);
// Your data
while($res=mysqli_fetch_assoc($r)){

$data[] = [
       "name"=> $res["tname"],
       "email"=>$res["email"],
       "mob"=>$res["mobile"],
       "sub"=>$res["subject"],
    ];

}

echo json_encode($data);

?>