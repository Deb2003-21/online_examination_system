<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con = mysqli_connect("localhost", "root", "", "exam_s");
$id = $_REQUEST['id'];




$q1 = "select * from join_requst a,signup b where a.email=b.email and a.teacher_id='$id' and status='ok'";
$r = mysqli_query($con, $q1);
// Your data

$q2 = "select count(*) as tot from test_join where teacher_id='$id' and submit_date='today'";
$r1 = mysqli_query($con, $q2);
if ($res1 = mysqli_fetch_assoc($r1)) {
    $tot = $res1['tot'];
}

while ($res = mysqli_fetch_assoc($r)) {
    $email = $res['email'];
    $q3 = "select count(*) as s from results a, test_join b where a.email='$email' and a.examid=b.exam_id and b.teacher_id='$id';";
    $r2 = mysqli_query($con, $q3);
    if ($res2 = mysqli_fetch_assoc($r2)) {
        $apr = ($res2['s']/$tot)*100;
    }
    $data[] = [
        "email" => $res['email'],
        "name" => $res['name'],
        "mob" => $res['mobile'],
        "edu" => $res['edu'],
        "appr"=>(int)$apr,


    ];



}

// Send JSON response
echo json_encode($data);
?>