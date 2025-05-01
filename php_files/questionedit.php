
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$con=mysqli_connect("localhost","root","","exam_s");



$examid = $_REQUEST['examid'];
$tqno = $_REQUEST['tqno'];




$q1="select * from test where exam_id=$examid and tqno=$tqno ";
$r=mysqli_query($con,$q1);
if($res=mysqli_fetch_assoc($r)){

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

    echo json_encode($data);

?>