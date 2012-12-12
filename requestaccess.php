<?php
header('Content-type: text/html; charset=utf-8');

$fn = "subscribers.txt";

sleep(2);

if (isset($_POST['email']))

{
	$today = getdate();

	$todayOutput = $today["mday"].".".$today["mon"].".".$today["year"]." ".$today["hours"].":".$today["minutes"]." ".$today[0];


    $content = file_get_contents($fn) . "Email: " . stripslashes($_POST['email']) . " On: " . $todayOutput . " IP: " . $_SERVER['REMOTE_ADDR'] . "\n";

    $fp = fopen($fn,"w") or die ("Error opening file in write mode!");

    fputs($fp, $content);

    fclose($fp) or die ("Error closing file!");

}

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
		<title>Thank you! | Salvador - A fun way to proove your ingenuity.</title>
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
			<h1>Thank you!</h1>
			<h4>We'll send you an invite when we enable more accounts.</h2>
		</div>
	<script type="text/javascript">
		$(function(){
    		$("#email").focus();
		});
	</script>
	<script src="//www.google-analytics.com/ga.js" async></script>
	<script>var _gaq= _gaq || [];
	_gaq.push(['_setAccount','UA-35199563-1'],['_trackPageview']);
	</script>
	</body>
</html>