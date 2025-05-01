<?php
$con=mysqli_connect("localhost","root","");
$q1="create database if not exists hotel";
mysqli_query($con,$q1);
$con2=mysqli_select_db($con,"hotel");
?>