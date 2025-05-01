

<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");
$id=$_REQUEST['id'];
$email=$_REQUEST['email'];
$date= date("Y-m-d");

$q2="select * from teacher_rofile where teacher_id='$id'";
$r2=mysqli_query($con,$q2);
if ($res2=mysqli_fetch_assoc($r2))
{
 $data[]=[
"tname"=>$res2['tname'],
"sub"=>$res2['subject'],
"exp"=>$res2['exp'],
	
];
}

$q1="SELECT * from teacher_rofile a,test_join b WHERE a.teacher_id=b.teacher_id and a.teacher_id='$id' and b.submit_date='today' and b.e_date>'$date'";
$r=mysqli_query($con,$q1);
// Your data

$a=array();
$q3="select examid from results where email='$email' ";
$r3=mysqli_query($con,$q3);
while($res3=mysqli_fetch_assoc($r3))
{
   
    array_push($a,$res3['examid']);
}



while($res=mysqli_fetch_assoc($r)){

$data[] = [
    "time"=>$res['time'],
    "paper"=>$res['paper'],
    "tot"=>$res['totalQues'],
     "exm_id"=>$res['exam_id'],
     "pos"=>$res['posetive'],
     "neg"=>$res['negetive'],
     "end"=>$res['e_date'],
     "check"=>in_array($res['exam_id'],$a)==1?'ok':'no'
     		
];



}

// Send JSON response
echo json_encode($data);
?>