<?php
header('Content-type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" > <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Request Access | Salvador - A fun way to proove your ingenuity.</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">

		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/main.css">

		<script src="/js/vendor/prefixfree.min.js"></script>
		<script src="/js/vendor/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/js/vendor/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div class="main">
			<h1 class="logo">Salvador</h1>
			<h4>A fun way to proove your ingenuity.</h2>

			<p class="lead">Salvador is in <strong>private alpha</strong>.<br />Submit your email and get the chance to early access.</p>
			<form action="./requestaccess.php" method="POST">
				<input type="text" id="email" name="email" placeholder="Your email">
				<button class="btn btn-large btn-inverse" type="submit">Notify me</button>
				<p id="error">Invalid email address.</p>
			</form>
		</div>
	<script type="text/javascript">
		$(function(){
    		$("#email").focus();

    		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		$("form").submit(function(){
    			var isFormValid = false;
    			if( re.test($("#email").val()) ) {
    				isFormValid = true;
    				$("#error").hide();
    			} else {
    				$("#error").show();
    			}

    			return isFormValid;
    		})
		});
	</script>
	<script src="//www.google-analytics.com/ga.js" async></script>
	<script>var _gaq= _gaq || [];
	_gaq.push(['_setAccount','UA-35199563-1'],['_trackPageview']);
	</script>
	</body>
</html>