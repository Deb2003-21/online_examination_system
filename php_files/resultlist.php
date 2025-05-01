

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");
$email=$_REQUEST['email'];




$q1="select * from results a,test_join b  where a.examid=b.exam_id and a.email='$email'";
$r=mysqli_query($con,$q1);
// Your data

while($res=mysqli_fetch_assoc($r)){

$data[] = [
    "examid"=>$res['examid'],
    "paper"=>$res['paper'],
    "score"=>$res['score'], 
    "tot"=>$res['totalQues']*$res['posetive'],		
];
}

// Send JSON response
echo json_encode($data);
?>