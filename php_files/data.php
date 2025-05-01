<?php 
header('Access-Control-Allow-Origin: *');
//header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
/*$jsondat=file_get_contents('php://input');
$data=json_decode($jsondat);*/
$con=mysqli_connect("localhost","root","","exam_s");
//print_r($_REQUEST);

$id=$_REQUEST['examid'];
$email=$_REQUEST['email'];
$d=$_REQUEST['data'];

$s=0;
$right=0;
$wrong=0;

$q5="select * from results where examid=$id and email='$email' ";
$r5=mysqli_query($con,$q5);
if($x1=mysqli_fetch_array($r5)){
    //if($x1["email"]== $email){
 echo "Don't even TRY, you already sent it";}
    
else {  
$q1="select * from test a,test_join b where a.exam_id=b.exam_id and b.exam_id=$id";
$r=mysqli_query($con,$q1);
while($res=mysqli_fetch_array($r) ){
    $pos=$res['posetive'];
    $neg=$res['negetive'];
    $data[] =array( 
        "no"=>$res['tqno'],
        "option"=>$res['answer'],
         
                 
    );
}

function findMatchingId($searchNo, $array) {
    foreach ($array as $item) {
        if ($item['no'] == $searchNo) {
            return $item['option'];  // Return the matching id
        }
    }
    return null;  // Return null if no match is found
}



$dataArray = json_decode($d, true);
//print_r( count($dataArray));
for($i=0;$i<count($dataArray);$i++)
{
    $no = $dataArray[$i]['no'];
    $option= $dataArray[$i]['option'];

    if(findMatchingId($no,$data)==$option)
    {
      $s=$s+$pos;   
      $right++;
    }
    else
    {
        $s=$s-$neg;
        $wrong++;
    }    

}
$q="select count(*) as no from results";
$r4=mysqli_query( $con,$q);
if($x=mysqli_fetch_array($r4) )
{
    $no=$x["no"]+1;
}

$score=$s;
$notattm=(count($data)-count($dataArray));

$q3="insert into results values ($no,'$email',$id,$score,$right,$wrong,$notattm)";
mysqli_query($con,$q3);

echo "ok";
}

/*
$result[]=[
    "result"=>$s-(count($data)-count($dataArray)),
    "right"=>$right,
    "wrong"=>$wrong,
    "notattmp"=>(count($data)-count($dataArray)),
    "total"=>count($data)*2,


];
*/

?>