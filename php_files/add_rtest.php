
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$con=mysqli_connect("localhost","root","","exam_s");

$q2="select count(*) as entity from test_join";
$r=mysqli_query($con,$q2);
if($r2=mysqli_fetch_assoc($r))
{
  $exmid=1000+$r2['entity'];	
}
try{
$tid=$_REQUEST['tid'];  
$time=$_REQUEST['time'];
$set=$_REQUEST['examnm'];
$qes=$_REQUEST['tques'];
$pos=$_REQUEST['pos'];
$neg=$_REQUEST['neg'];
$q2="select * from test_join where teacher_id='$tid' and paper='$set'";
$r=mysqli_query($con,$q2);
if($res=mysqli_fetch_array($r))
{
  echo json_encode(["number" => "Please provide a different test name"]);
}
else{
  $q1="INSERT into test_join VALUES('$tid',$exmid,'$set',$time,$qes,$pos,$neg,null,null,0,0)";
  mysqli_query($con,$q1);
  echo json_encode(["number" => $exmid]);
  }
}
catch(Exception $e)
{
  echo json_encode(["number" => "Fill the form correctly"]);
}


/*
{
catch(Exception $e)
{
 echo"error";
}*/
?>