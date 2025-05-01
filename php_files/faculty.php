<?php
$con=mysqli_connect("localhost","root","","sas");
 $q2="create table  if not exists faculty(fid int ,fname varchar(30) unique,age  int not null check(age>=24 and age<=65) ,degree varchar(5) not null ,primary key(fid))";
$r=mysqli_query($con,$q2);

$q5="create table  if not exists student(sid int ,sname varchar(30) not null,course varchar(30) not null,year int(4) not null , phone bigint(10) unique,primary key(sid))";
$r5=mysqli_query($con,$q5);

$q6="create table  if not exists attendence(fid int,sid int,subject varchar(20) not null,date_of_class date not null,no_of_class int(2) not null ,primary key(sid,fid))";
$r6=mysqli_query($con,$q6);

$q4="select count(*) from faculty";
$r2=mysqli_query($con,$q4);
$r3=mysqli_fetch_row($r2);

if($r3[0]==0){
$q3="insert into faculty values(1,'prof A. Mukharjee',35,'bsc'),(2,'prof s.k Das',34,'Msc'),(3,'prof A.Mandal',45,'phd'),(4,'prof S.Malik',31,'phd')";
$r1=mysqli_query($con,$q3);
}

$q7="select count(*) from student";
$r7=mysqli_query($con,$q7);
$r8=mysqli_fetch_row($r7);

if($r8[0]==0){
$q9="insert into student values(241,'sourav das','bsc',2023,9982923231),(242,'sayan Das','bcom',2024,9958823341),(243,'souvik das','bsc',2023,9922553787),(244,'debopom das','bsc',2023,9971234781),(245,'soumik das','bcom',2024,8971534181)";
$r10=mysqli_query($con,$q9);
}

$q11="select count(*) from attendence";
$r11=mysqli_query($con,$q11);
$r11=mysqli_fetch_row($r11);

if($r11[0]==0){
$q12="insert into attendence values(3,241,'math','2024-12-12',2),(3,243,'math','2024-12-12',4),(3,244,'math','2024-12-12',0),(4,242,'accounts','2024-12-12',18)";
$r12=mysqli_query($con,$q12);
}
?>
<html>
<table border="1">
<tr>
<td>sname</td>
<td>course</td>
</tr>
<?php
$q13=" select student.sname,student.course from student natural join attendence where student.course='bsc' and attendence.no_of_class>0";
$r14=mysqli_query($con,$q13);
while($re13=mysqli_fetch_assoc($r14))
{
?>
<tr>
<td><?php echo $re13['sname'];?></td>
<td><?php echo $re13['course'];?></td>
</tr>
<?php
}
?>
</table>
</html>