<?php
// api.php

// Set header to output JSON
header('Access-Control-Allow-Origin: *');


$con=include('db.php');



try{

  $email=$_REQUEST['email'];
  $name=$_REQUEST['name'];
  $mob=$_REQUEST['mob'];
  $edu=$_REQUEST['edu'];
  

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

$pass=generatePassword(10);


$q1="insert into  signup values ('$email','$name','$pass','$mob','$edu') ";
$r=mysqli_query($con,$q1);


include('test.php');
smtp_mailer($email, 'Auththentication for login', "password for login->".'  '.$pass);
}
catch(Exception $e){
  echo "please check the form and try again";

}
// Your data

// Send JSON response

?>