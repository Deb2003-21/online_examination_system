

<?php
//require __DIR__ . '/vendor/autoload.php';
//use WebSocket\Client;

header('Access-Control-Allow-Origin: *');
//header('Content-Type: application/json');

$con=mysqli_connect("localhost","root","","exam_s");


$id=$_REQUEST['id'];




$q1="select a.email,a.name from signup a,join_requst b where a.email=b.email and b.teacher_id='$id' and b.status='wait'";
$r=mysqli_query($con,$q1);
// Your data
$count=0;
while($res=mysqli_fetch_assoc($r)){

$data[] = [
    "email"=>$res['email'],
    "name"=>$res['name'],
    
     		
];


}
/*
if (!empty($data)) {
   
        $client = new Client("ws://localhost:8080/");
        $message = json_encode(['type' => 'approve', 'message' => 'Approval granted']);
        $client->send($message);
        $client->close();
    
}*/
echo json_encode($data);


// Send JSON response

?>