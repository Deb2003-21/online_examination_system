<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$exm_id=$_REQUEST['examid'];
$set=$_REQUEST['set'];
$q1="SELECT * from test_join a,test b where a.exam_id=b.exam_id and a.exam_id=$exm_id and a.paper='$set'";
$r=mysqli_query($con,$q1);
// Your data
while($res=mysqli_fetch_assoc($r)){

$data[] = [
       "no"=>$res['tqno'], 	
     "question"=>$res['question'],
     "image"=>$res['image'],
    "option1"=>$res['option1'],
     "option2"=>$res['option2'],
      "option3"=>$res['option3'],
      "option4"=>$res['option4'],		
      "answer"=>$res['answer'],
    ];

}
// Send JSON response
echo json_encode($data);
?>