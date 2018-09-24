<?php

$password = $_POST['password'];
if ($password == "bob") {
	header('Location: cms.php');
} else {
	header('Location: ../index.html');
}

?>