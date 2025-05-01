
<?php
header('Access-Control-Allow-Origin: *');


$con=mysqli_connect("localhost","root","","exam_s");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$quest = $_REQUEST['quest'];
$tqno = $_REQUEST['qno'];
$exmid=$_REQUEST['exmid'];
$op1 = $_REQUEST['op1'];
$op2 = $_REQUEST['op2'];
$op3 = $_REQUEST['op3'];
$op4 = $_REQUEST['op4'];
$ans = $_REQUEST['ans'];
/*$s='';
$q2 = "select image from test where exam_id=$exmid and tqno=$tqno";
$r1 = mysqli_query($con, $q2);
if ($res1 = mysqli_fetch_assoc($r1)) {
  $s = $s. $res1['image'];
  unlink($s);
}*/



if(isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
    // Specify the directory where you want to save the file
    $upload_dir = "uploads/";
    
    // Get the file information
    $file_name = $_FILES["file"]["name"];
    $file_tmp = $_FILES["file"]["tmp_name"];
    
    // Move the file to the specified directory
    if($_FILES['file']['type']=='image/png' || $_FILES['file']['type']=='image/jpg' || $_FILES['file']['type']=='image/jpeg')
    {
      $file_name='q'.rand(0,1000000).'.'.substr($_FILES['file']['type'],6);
      $file_name1='q'.$s.'.'.substr($_FILES['file']['type'],6);
      
      move_uploaded_file($file_tmp, $upload_dir . $file_name);
    }
  }

$q1="UPDATE test
SET question = '$quest', image='http://localhost/pg/project/uploads/$file_name',option1='$op1',option2='$op2', option3= '$op3',option4='$op4',answer='$ans' WHERE tqno=$tqno and exam_id=$exmid";
mysqli_query($con,$q1);

}
?>