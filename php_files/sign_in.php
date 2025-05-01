<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');


$con=mysqli_connect("localhost","root","","exam_s");

$email=$_REQUEST['email'];
$pass=$_REQUEST['pass'];
try{
$q1="SELECT * from signup  where email='$email' ";
$r=mysqli_query($con,$q1);
// Your data
$r2=mysqli_affected_rows($con);
if ($r2==0){
    echo"Invalid input!! check the data please";
}
else
    echo"wc";
}
catch(exception $e)
{
    echo"network error";
}

 

?>