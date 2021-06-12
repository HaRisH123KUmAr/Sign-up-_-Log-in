<?php 
session_start() ;

$con = mysqli_connect('localhost','root') ; 
mysqli_select_db($con , 'register') ;  

$name = $_POST['USER'] ;
$email = $_POST['EMAIL'] ;
$pass = $_POST['PASSWORD'] ;  

$s = "select * from db where email  = '$email'" ; 

$result = mysqli_query($con ,$s );
$num = mysqli_num_rows($result);

if($num==1) {
echo "Username already exists" ;
}
else
{ $sql = "insert into db(name , email , password) values ('$name' ,'$email' , '$pass')"  ; 
mysqli_query ($con ,$sql) ;
//header ('location:Welcome.php');
}


?>