<?php
$updatedData = $_POST["newData"];
file_put_contents('../json/menu.json', $updatedData);
?>