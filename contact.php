<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Adrcrus - Contact Me</title>
<link rel="stylesheet" type="text/css" href="style/style.css" media="screen" />
<script type="text/javascript" src="js/form.js"></script>
</head>
<body onload="captcha()">
<!-- START wrapper -->
<div id="wrapper">
  <!-- START header -->
  <div id="header"> <a id="logo" href="index.php" title="Adrcrus - Contact Me"><img src="images/logo.png" alt="Logo" /></a> </div>
  <!-- END header -->
  <!-- START Middle -->
  <div id="main-content">
    <!-- START section -> [Menu] -->
    <div class="section highlight" id="navigation">
      <ul>
        <li ><a href="index.php" title="Homepage">Home</a></li>
        <li ><a href="interior.php" title="Interior Services">Interior</a></li>
        <li><a href="exterior.php" title="Exterior Services">Exterior</a></li>
        <li><a href="gallery.php" title="See our Projects">Portfolio</a></li>
        <li class="current"><a href="contact.php" title="Contact Info">Contact Us</a></li>
         </ul>
    </div>
    <!-- END section -->
    
    <!-- START section -> [bredcrumb] -->
    <div class="section highlight">
      <div id="breadcrumb"> You are here: <a href="index.php">Home</a> &raquo; <span class="current">Contact Us</span> </div>
    </div>
    <!-- END section -->
    <!-- START section -> [Contact] -->
    <!-- START section -> [Contact] -->
    <div class="section">
      
      <div><span style="color:#ceea3d">Send Us a Message</span><br /><br /></div>
	  
	  
	  <div id="submitform">
        <div id="log"></div>
        <form  id="form" method="POST" name ="myForm" action="send_form_email.php" >
          <label for="first_name">Your First Name*</label>
          <input  name="first_name" id="first_name" type="text" value="" />
          
		  <label for="last_name">Your Last Name*</label>
          <input  name="last_name" id="last_name" type="text" value="" />
          
           <label for="email">Email*</label>
          <input name="email" type="email" placeholder = "name@domain.com"id="email" type="text" value="" />
		  
          <label for="telephone">Your Phone Number*</label>
          <input name="telephone" id="telephone" type="text" value="" />
         
		  <label for="comments">Message*</label>
          <textarea name="comments" rows="10" cols="6" id="comments"></textarea>
                 	  
                   
         
          
          <input type="submit" id="submit" name="submit" value="Send Message"/>
        </form>
      </div>
      
	  <div id="contact-info">
        <ul>
          
           <li><span>Contact:</span> Alex Danilevich</li> 
          <li><span>Tel:</span> 386-383-6536</li>  
          <li><span>E-mail:</span> <a href="mailto:">adosa0@yahoo.com</a></li>
          <li class="separate"><span>Web:</span> <a href="http://www.adrcrus.com">http://www.adrcrus.com</a></li>
         
          
        </ul>
      </div>
      <div class="fix" ></div>
    </div>
    <!-- END section -->
    <!-- END section -->
  </div>
  <!-- END Middle -->
  <!-- START footer -->
  <div id="footer">
    <p class="footer-text">Copyright &copy; 2012 Created by Anton Yakuta</p>
    <a href="#wrapper" class="jump-up"><img src="images/top.png" alt="Jump to top" /></a> </div>
  <!-- END footer -->
</div>
<!-- END wrapper -->

</body>


</html>
