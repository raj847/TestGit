<?php
require 'functions.php';
if(isset($_POST["register"])) {
    if(registrasi($_POST) > 0) {
      echo "<script>
      alert('user baru berhasil ditambahkan')
      </script>";
    } else {
      echo mysqli_error($conn);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Register Page</title>
  <link href="https://www.heartinternet.co.uk/blog/wp-content/uploads/2009/07/heartInternetLogoRGB-justswirl-2.jpg" rel="icon">
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
              <p class="login-card-description">Register</p>
              <?php if (isset($error)) :?>
				<p style="color: red;text-decoration: bold;">Wrong Email or Password!</p>	
              <?php endif; ?>
              	<form action="" method="POST">
                    <label for="username" class="sr-only">Username</label>
                    <input type="username" name="username" id="username" class="form-control" placeholder="Username">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                    <label for="password" class="sr-only">Konfirmasi Password</label>
                    <input type="password" name="password2" id="password2" class="form-control" placeholder="Konfirmasi Password">
                  	<button type="Submit" class="btn btn-block login-btn mb-4" name="register">Register</button>
                </form>
                <a href="#!" class="forgot-password-link">Forgot password?</a>
                <p class="login-card-footer-text">Already have an account? <a href="login.php" class="text-reset">Sign in here</a></p>
                <nav class="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
