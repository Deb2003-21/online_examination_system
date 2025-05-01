

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");
$id=$_REQUEST['id'];




$q1="select count(*) as tots from join_requst where teacher_id='$id' and status='ok'";
$r=mysqli_query($con,$q1);
// Your data
$q2="select count(*) as exams from test_join where teacher_id='$id'";
$r1=mysqli_query($con,$q2);

if($res1=mysqli_fetch_assoc($r1))
{
    $exams=$res1['exams']; 	
}

$q3="select count(*) as p from test_join where teacher_id='$id' and submit_date='today'";
$r3=mysqli_query($con,$q3);
if($res2=mysqli_fetch_assoc($r3))
{
    $pnding=$res2['p']; 	
}

if($res=mysqli_fetch_assoc($r)){

$data[] = [
    "tots"=>$res['tots'],
    "exams"=>$exams,
    "pd"=>$pnding,
    	
];



}

// Send JSON response
echo json_encode($data);
?>