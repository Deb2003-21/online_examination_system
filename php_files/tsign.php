<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');


$con=mysqli_connect("localhost","root","","exam_s");



try{

  $email=$_REQUEST['email'];
  $fname=$_REQUEST['fname'];
  $lname=$_REQUEST['lname'];
  $mob=$_REQUEST['mob'];
  $sub=$_REQUEST['sub'];
  $exp=$_REQUEST['exp'];
  

//random password
function generatePassword($length) {
  // Define possible characters for the password
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomPassword = '';


  // Generate the random password
  for ($i = 0; $i < $length; $i++) {
      $randomPassword .= $characters[random_int(0, $charactersLength - 1)];
  }

  return $randomPassword;
}



  $q1="select count(*) as tot from teacher_rofile";
  $r=mysqli_query($con,$q1);
  if($res=mysqli_fetch_assoc($r))
  {
    $id=chr(rand(65,91)).(3000+$res['tot']);
  }  

  $name=$fname.' '.$lname;
$pass=generatePassword(5);
$q1="insert into  teacher_rofile values ('$id','$name','$mob','$sub','$pass','$exp','$email') ";
$r=mysqli_query($con,$q1);
include('test.php');
smtp_mailer($email, 'Auththentication for login', "your id->".' '.$id.' '."your password->".' '.$pass);
echo"succesfully registered!! please click login";
}

catch(Exception $e){
  echo "please check the email id or if u already created a account don't send it again";

}

// Your data

// Send JSON response

?>