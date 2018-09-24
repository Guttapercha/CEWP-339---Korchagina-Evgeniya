<?php
if (!isset($_SERVER['HTTP_REFERER'])) {
	header('location: ../html/password.html');
	exit;
};
	
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>CMS</title>
    <link rel="stylesheet" href="../css/styles_cms.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	 <script src="../js/cms.js"></script>
  </head>
  <body>
	  <div class="container">
	  	  <form action="upload_image.php" method="post" enctype="multipart/form-data">
			  <table>
				  <tr>
					  <td>
						  Select image to upload:
						  <br><br><input type="file" name="fileToUpload" id="fileToUpload">
						  <br><br><input type="submit" name="submit" value="Upload">	  
					  </td>				  
				  </tr>	
				 <tr>
					 <td>
						  <br><br><input type="text" name="br_title" id="br_title" placeholder="Title" size="50">	  
					  </td>				  
				  </tr>
				 <tr>
					 <td>
						 <br><br><textarea rows="4" cols="50" placeholder="Description" id="br_desc"></textarea>	  
					  </td>				  
				  </tr>
				  <tr>
					 <td>
						  <br><br><input type="text" name="br_img" id="br_img" placeholder="Image Name" size="50">	  
					  </td>				  
				  </tr>
				  <tr>
					 <td>
						  <br><br><input type="text" name="br_price" id="br_price" placeholder="Price" size="50">	  
					  </td>				  
				  </tr>				  
				 <tr>
					 <td>
						 <br><br><button type="button" name="button" id="br_submit" >	SUBMIT</button>  
					  </td>				  
				  </tr>
				 <tr>
					 <td>
						  <br><br><input type="text" name="br_remove" id="br_remove" placeholder="Breakfast Name" size="50">
						 <button type="button" name="button" id="delete_btn" >	Remove Breakfast</button>
					  </td>				  
				  </tr>
				 <tr>
					 <td><br><br>
						  <a href="../index.html">
						 <button type="button" name="button">BACK TO BOB EVANS</button>
						 </a>	  
					  </td>				  
				  </tr>
			  </table>		  
		  </form>
	  </div>
  </body>
</html>
	


