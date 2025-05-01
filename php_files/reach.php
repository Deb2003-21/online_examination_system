

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");


$q1="select count(*) as s from signup";
$r=mysqli_query($con,$q1);
// Your data

if($res=mysqli_fetch_assoc($r)){

    $ts=$res['s'];
}

$q2="select count(*) as t from teacher_rofile";
$r1=mysqli_query($con,$q2);
// Your data

if($res1=mysqli_fetch_assoc($r1)){

    $tt=$res1['t'];
}


$q3="select count(*) as tests from test_join";
$r3=mysqli_query($con,$q3);
// Your data

if($res2=mysqli_fetch_assoc($r3)){
$data[]=[
    "tst"=>$res2['tests'],
    "ts"=>$ts,
    "tt"=>$tt,
];
}

// Send JSON response
echo json_encode($data);
?>