<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$teacher_id=$_REQUEST['setid'];
$op=$_REQUEST['upt'];
$ad_dt=$_REQUEST['end'];



  $q1="update test_join set e_date=CURRENT_DATE()+$ad_dt  where teacher_id='$teacher_id' and exam_id=$op  ";
  $r=mysqli_query($con,$q1);

// Send JSON response

?>