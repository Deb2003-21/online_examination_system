<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con = mysqli_connect("localhost", "root", "", "exam_s");

$q2 = "select count(*)as qs from test";
$r1 = mysqli_query($con, $q2);
if ($res1 = mysqli_fetch_assoc($r1)) {
  $s = 2000 + $res1['qs'];
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
$qno = $_REQUEST['qno'];
$quest = $_REQUEST['quest'];
$exm_id=$_REQUEST['exmid'];
$op1 = $_REQUEST['op1'];
$op2 = $_REQUEST['op2'];
$op3 = $_REQUEST['op3'];
$op4 = $_REQUEST['op4'];
$ans = $_REQUEST['ans'];

if(isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
  // Specify the directory where you want to save the file
  $upload_dir = "uploads/";
  
  // Get the file information
  $file_name = $_FILES["file"]["name"];
  $file_tmp = $_FILES["file"]["tmp_name"];
  
  // Move the file to the specified directory
  if($_FILES['file']['type']=='image/png' || $_FILES['file']['type']=='image/jpg' || $_FILES['file']['type']=='image/jpeg' )
  {
    $file_name='q'.$s.'.'.substr($_FILES['file']['type'],6);
    move_uploaded_file($file_tmp, $upload_dir . $file_name);
  }
}


$q1 = "INSERT INTO `test` (`qid`, `exam_id`, `tqno`, `question`, `image`, `option1`, `option2`, `option3`, `option4`, `answer`) VALUES ('$s', '$exm_id', '$qno', '$quest', 'http://localhost/pg/project/uploads/$file_name', '$op1', '$op2', '$op3', '$op4', '$ans');";
$r = mysqli_query($con, $q1);
// Your data
while ($res = mysqli_fetch_assoc($r)) {

  $data[] = [
    "no" => $s,
    "question" => $res['question'],
    "option1" => $res['option1'],
    "option2" => $res['option2'],
    "option3" => $res['option3'],
    "option4" => $res['option4'],
  ];

}
}
// Send JSON response
echo json_encode($data);
?>