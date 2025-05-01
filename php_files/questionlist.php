<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$teacher_id=$_REQUEST['setid'];
$op=$_REQUEST['upt'];
$ad_dt=$_REQUEST['end'];
$r1=$_REQUEST['r1'];
$r2=$_REQUEST['r2'];

if($op==1){
$q1="SELECT * from test_join  where teacher_id='$teacher_id'  ";
$r=mysqli_query($con,$q1);
// Your data
while($res=mysqli_fetch_assoc($r)){
  $t=$res['exam_id'];
  $q2="SELECT count(*) as tot from test  where exam_id=$t";
  $r1=mysqli_query($con,$q2);

  if($res1=mysqli_fetch_assoc($r1))
  {
    $tot=$res1['tot'];
  }
$data[] = [
       "paper"=>$res['paper'], 	
     "tot"=>$res['totalQues'],
      "time"=>$res['time'],		
      "pos"=>$res['posetive'],
      "neg"=>$res['negetive'],
      "exm_id"=>$res['exam_id'],
      'count'=>$tot,
      'sbmit'=>$res['submit_date'],
      'end_date'=>$res['e_date'],
    ];
    
  }
  echo json_encode($data);
}
else
{
  $q1="update test_join set submit_date='today',e_date=CURRENT_DATE()+$ad_dt,pdf_acpt=$r1,cer_accpt=$r2  where teacher_id='$teacher_id' and exam_id=$op  ";
  $r=mysqli_query($con,$q1);
}
// Send JSON response

?>