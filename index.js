
<html lang="en">


<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="stylesheet" href="style.css" />

  <title>Sprint</title>

  

</head>


<body>

	<div class="topnav">

		<a class="active" href="">Home</a>

		<a onclick="document.getElementById('id01').style.display='block'">Login</a>

		<a onclick="document.getElementById('id02').style.display='block'">SignUP</a>

		<a href="#about">About</a>

	</div>


  

	<div id="id01" class="modal">

		<form class="modal-content animate" action="login.js">

			<div class="container">

			<label for="uname" style="padding: 14px 20px;"><b>Username</b></label>

			<input type="text" placeholder="Enter Username" name="uname" required>


			<label for="psw" style="padding: 14px 20px;"><b>Password</b></label>

			<input type="password" placeholder="Enter Password" name="psw" required>


			<button type="submit" style="padding: 6px 14px;">Login</button>

			<label>

				<input type="checkbox" checked="checked" name="remember"> Remember me

			</label>

			</div>


			<div class="container" style="background-color:#f1f1f1">

			<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn" style="padding: 6px 14px;">Cancel</button>

			<span class="psw"> <a href="#" style="padding: 14px 20px;">Forgot password?</a></span>

			</div>

		</form>

	</div>

	

	

	<div id="id02" class="modal">

		<form class="modal-content animate" action="signup.js">

			<div class="container">

			<label for="uname" style="padding: 14px 20px;"><b>Username</b></label>

			<input type="text" placeholder="Enter Username" name="uname" required>


			<label for="psw" style="padding: 14px 20px;"><b>Password</b></label>

			<input type="password" placeholder="Enter Password" name="psw" required>

              <label for="psw" style="padding: 14px 20px;"><b>Password again</b></label>

			<input type="password" placeholder="Enter Password again" name="pswr" required>


			<button type="submit" style="padding: 6px 14px;">Login</button>

			<label>

				<input type="checkbox" checked="checked" name="remember"> Remember me

			</label>

			</div>


			<div class="container" style="background-color:#f1f1f1">

			<button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn" style="padding: 6px 14px;">Cancel</button>

			

			</div>

		</form>

	</div>

	

</body>


</html>


