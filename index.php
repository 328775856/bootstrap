<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>登录页面</title>
</head>

<body>
<?php 
    if(isset($_POST['username'])){
	// echo $_GET['username']."<br/>";
	// echo $_GET['userpwd']."<br/>"  ;
	 
	   $username=$_POST['username'];
	   $userpwd= $_POST['userpwd'];
	  if($username=="admin"&&$userpwd=="123456"){
		  echo "登录成功。".$username;}else{
		  echo "用户名或密码错误。" ;  
		
	   }
	}

?>

</body>
</html>