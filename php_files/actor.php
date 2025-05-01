<?php
$con=mysqli_connect("localhost","root","");
$q1="create database if not exists actor";
mysqli_query($con,$q1);

$con2=mysqli_select_db($con,"actor");

$t1="create table if not exists actor(aid int,aname varchar(30),sex char(1),age int check(age>=18),industry_exp int(3) ,primary key(aid))";
$t2="create table if not exists tv_series(tid int ,sname varchar(30),type varchar(10),rating int check(rating<=10),network varchar(5),primary key(tid))";
$t3="create table if not exists acts(aid int,tid int,date_to date,date_from date,no_of_s int(3),primary key(aid,tid))";

mysqli_query($con,$t1);
mysqli_query($con,$t2);
mysqli_query($con,$t3);

$c1="select count(*) from actor";
$cr=mysqli_query($con,$c1);
$rc=mysqli_fetch_row($cr);


if($rc[0]==0){
$q1="insert into actor values(1,'srk','m',50,25),(2,'sk','m',50,25),(3,'dp','f',42,15),(4,'as','f',41,12),(5,'pd','f',39,10),(6,'ak','m',48,21)";
$q2="insert into tv_series values(100,'dunki','drama',4,'zee'),
(101,'tiger 3','action',3,'yrf'),(102,'pathan','action',4,'yrf')";
$q3="insert into acts values(1,100,'2021-05-03','2023-05-03',5),(3,100,'2021-05-03','2023-04-01',4),(4,101,'2021-05-03','2023-04-01',4)";

mysqli_query($con,$q1);
mysqli_query($con,$q2);
mysqli_query($con,$q3);
}
/*
1st->
select actor.aname,actor.age from actor, tv_series,acts where actor.aid=acts.aid and tv_series.tid=acts.tid and actor.sex='m' and acts.no_of_s>=4 and actor.age between 45 and 50;
2nd->
select aname from actor where aid in(select aid from acts where (date_from-date_to)in(select (date_from -date_to) as days from acts order by days ))and sex='f'limit 1
*/
?>