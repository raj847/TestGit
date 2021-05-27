<?php  
session_start();
require 'functions.php';
if (isset($_POST["login"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $_SESSION['username'] = $_POST["username"];
  $result = mysqli_query($conn,"SELECT * FROM users WHERE username = '$username'");

  if (mysqli_num_rows($result) === 1) {
    
      $row = mysqli_fetch_assoc($result);
      if(password_verify($password, $row["password"]) && $username === "admin") {
          $_SESSION['login'] = true;
        header("Location: admin.php");
        exit;
      } else if (password_verify($password, $row["password"])) {
        $_SESSION['login'] = true;
        header("Location: index.html");
        exit;
      }

      }

   $error = true;
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login Page</title>
  <link href="logo.jpg" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/login.css">
</head>
<body>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="https://st3.depositphotos.com/12985790/16063/i/600/depositphotos_160634808-stock-photo-stylish-clothes-on-hangers.jpg" alt="login" class="login-card-img" style="width:476;height:663">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <a href="" style="text-decoration: none; color: black; font-size: 25px;font-weight: bold;"><img src="https://www.heartinternet.co.uk/blog/wp-content/uploads/2009/07/heartInternetLogoRGB-justswirl-2.jpg" style="width: 50px">GhiNaj Shop</a>
              </div>
              <p class="login-card-description">Sign into your account</p>
              <?php if (isset($error)) :?>
				<p style="color: red;text-decoration: bold;">Wrong Email or Password!</p>	
              <?php endif; ?>
              	<form action="" method="POST">
                    <label for="username" class="sr-only">Username</label>
                    <input type="username" name="username" id="username" class="form-control" placeholder="Username">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="***********">
                  	<button type="Submit" class="btn btn-block login-btn mb-4" name="login">Login</button>
                </form>
                <a href="#!" class="forgot-password-link">Forgot password?</a>
                <p class="login-card-footer-text">Don't have an account? <a href="register.php" class="text-reset">Register here</a></p>
                <nav class="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="card login-card">
        <img src="assets/images/login.jpg" alt="login" class="login-card-img">
        <div class="card-body">
          <h2 class="login-card-title">Login</h2>
          <p class="login-card-description">Sign in to your account to continue.</p>
          <form action="#!">
            <div class="form-group">
              <label for="email" class="sr-only">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="password" class="sr-only">Password</label>
              <input type="password" name="password" id="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-prompt-wrapper">
              <div class="custom-control custom-checkbox login-card-check-box">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember me</label>
              </div>              
              <a href="#!" class="text-reset">Forgot password?</a>
            </div>
            <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login">
          </form>
          <p class="login-card-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
        </div>
      </div> -->
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
