

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$email=$_REQUEST['email'];



$q1="select * from signup where email='$email'";
$r=mysqli_query($con,$q1);

while($res=mysqli_fetch_assoc($r)){

$data[] = [
    "name"=>$res['name'],
    "email"=>$res['email'],
    "mob"=>$res['mobile'],
    "edu"=>$res['edu']
];



}

// Send JSON response
echo json_encode($data);
?>