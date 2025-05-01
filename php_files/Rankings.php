<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con = mysqli_connect("localhost", "root", "", "exam_s");

$exam_id = $_REQUEST['exmid'];



$count = 1;
$q1 = "select * from results a, signup b where a.examid=$exam_id and a.email=b.email order by a.score desc  ";
$r = mysqli_query($con, $q1);

$q2 = "select * from test_join where exam_id=$exam_id   ";
$r1 = mysqli_query($con, $q2);
// Your data

if ($res = mysqli_fetch_assoc($r1)) {
  $pdf = $res['pdf_acpt'];
  $cer = $res['cer_accpt'];
}
while ($res = mysqli_fetch_assoc($r)) {
  $email = $res['email'];
  $q4 = "select mobile from signup where email='$email' ";
  $r2 = mysqli_query($con, $q4);
  if ($res1 = mysqli_fetch_assoc($r2)) {
    $mob = $res1['mobile'];
  }
  $data[] = [
    "name" => $res['name'],
    "email" => $email,
    "mob" => $mob,
    "score" => $res['score'],
    "rank" => $count,
    "pdf" => $pdf,
    "cer" => $cer,
  ];
  $count++;
}



echo json_encode($data);

// Send JSON response

?>