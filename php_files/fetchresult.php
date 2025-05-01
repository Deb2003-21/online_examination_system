<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");

$exmid=$_REQUEST['id'];
$email=$_REQUEST['email'];

$q1=" select * from results where email='$email' and examid=$exmid";
$r=mysqli_query($con,$q1);


$q2="select max(score) as top from results where examid=$exmid";
$r1=mysqli_query($con,$q2);
if($res1=mysqli_fetch_assoc($r1))
{
   $top=$res1['top'];
}

$q3="select * from results a, signup b where a.examid=$exmid and a.email=b.email order by a.score desc LIMIT 5;";
$r2=mysqli_query($con,$q3);
$i=1;
$j=0;
$q4="SELECT examid, email, RANK() OVER (ORDER BY score desc  ) AS y_rank FROM results WHERE examid = $exmid ";
$r3=mysqli_query($con,$q4);

$q5="select totalQues,posetive,pdf_acpt,cer_accpt,paper from test_join where exam_id=$exmid";
$r4=mysqli_query($con,$q5);
if($res=mysqli_fetch_assoc($r4))
{
  $pos=$res['totalQues'];
  $p=$res['posetive'];
  $total=$pos*$p;
  $pr=$res['paper'];
  $pdf_s=$res['pdf_acpt'];
  $cer_s=$res['cer_accpt'];

}

while($res2=mysqli_fetch_assoc($r3))
{
  if($email==$res2['email']){
   $yrank=$res2['y_rank'];}
   $j++;
}

if($res=mysqli_fetch_assoc($r)){

$data[] = [
        "tqs"=>$pos,
        "pr"=>$pr,
       "score"=>$res['score'], 	
     "right"=>$res['checked'],
      "wrong"=>$res['wrong'],		
      "np"=>$res['not_attmp'],
      "top"=>$top,
      "yrank"=>$yrank,
      "tstud"=>$j,
      "total"=>$total,
      "pdf_s"=>$pdf_s,
      "cer_s"=>$cer_s,
      
    ];

}
while($res2=mysqli_fetch_assoc($r2))
{
  $data[] = [
  "s"=>$res2['name'],
  "t"=>$res2['score']
  ];
  $i++;
}
// Send JSON response
echo json_encode($data);
?>