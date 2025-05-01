<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');


$con=mysqli_connect("localhost","root","","exam_s");

$tid=$_REQUEST['tid'];
$tpass=$_REQUEST['tpass'];
try{
$q1="SELECT teacher_id,password from teacher_rofile  where teacher_id='$tid' and password='$tpass'";
$r=mysqli_query($con,$q1);
// Your data
$r2=mysqli_affected_rows($con);
if ($r2==0){
    echo"Invalid input!! check the data please";
}
else
    echo"wc1";
}
catch(exception $e)
{
    echo"network error";
}

 

?>