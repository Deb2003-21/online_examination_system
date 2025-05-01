

<?php



header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$email=$_REQUEST['email'];
$id=$_REQUEST['id'];



    $q1="delete from join_requst where email='$email' and teacher_id='$id' ";
    mysqli_query($con,$q1);
}

 




?>