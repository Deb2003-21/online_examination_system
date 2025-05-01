<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$exm_id=$_REQUEST['exmid'];
$q1="select * from test_join a,test b where a.exam_id=b.exam_id and a.exam_id=$exm_id order by b.tqno";
$r=mysqli_query($con,$q1);
// Your data
$i=1;
while($res=mysqli_fetch_assoc($r)){

$data[] = [
       "no"=>$i, 	
     "question"=>$res['question'],
     "image"=>$res['image'],
     "time"=>$res['time'],
    "option1"=>$res['option1'],
     "option2"=>$res['option2'],
      "option3"=>$res['option3'],
      "option4"=>$res['option4'],		
];
$i++;
}
// Send JSON response
echo json_encode($data);
?>