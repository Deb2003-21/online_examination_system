<?php
error_reporting(0);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$con=mysqli_connect("localhost","root","","exam_s");
$email=$_GET['email'];
$q1="SELECT a.email,c.teacher_id,c.tname,c.subject from signup a,join_requst b,teacher_rofile c where a.email='$email' and b.email=a.email  and c.teacher_id=b.teacher_id and b.status='ok'";
$r=mysqli_query($con,$q1);
$i=0;
$s=0;
while($res=mysqli_fetch_assoc($r)){

   $tid=$res['teacher_id'];   
   $q3="SELECT count(*) as tot from test_join where teacher_id='$tid' and submit_date='today'";
   $r3=mysqli_query($con,$q3);
   if($res1=mysqli_fetch_assoc($r3))
   {
      $s=$s+$res1['tot'];
   }
$data[]=[
     "tname"=>$res['tname'],	
      "subject"=>$res['subject'],
      "id"=>$res['teacher_id'],	   		
];
$i++;
}

$q4="SELECT count(*) as appr from results where email='$email'";
   $r4=mysqli_query($con,$q4);
   if($res2=mysqli_fetch_assoc($r4))
   {
      $a=$res2['appr'];
   }
$q2="SELECT  name from signup where email='$email' ";
$r2=mysqli_query($con,$q2);
if($res=mysqli_fetch_assoc($r2)){
$data[]=[
"name"=>$res['name'],
"texams"=>$s,	
"appr"=>$a,
];

}
$data[]=["total"=>$i,];
echo json_encode($data);
//print_r($_REQUEST)
?>