import React from "react";
import "../Component/footer1.css";
const Footer1 =()=>{
    return(
        <>
          <footer class="footer footer1">
  	 <div class="container footer-container">
  	 	<div class="row row1">
  	 		<div class="footer-col">
  	 			<h4>Quick Link</h4>
  	 			<ul class="quicklink">
  	 				<li><a href="/#">Home</a></li>
  	 				<li><a href="/#">About</a></li>
  	 				<li><a href="/#">Study Material</a></li>
  	 				<li><a href="/#">Volunteer</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="/#">FAQ</a></li>
  	 				<li><a href="/#">Contact Us</a></li>
  	 				<li><a href="/Doubts">Doubts</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="/#" style={{marginRight:'20px' , marginLeft : '-20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </a></li>
             <li><a href="/#" style={{marginRight:'20px' , marginLeft : '-20px'}}><strong>Email :</strong> xyz123@gmail.com</a></li>
             <li><a href="/#" style={{marginRight:'20px' , marginLeft : '-20px'}}><strong>Contact No :</strong> 1234567890</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="/#"><i class="fab fa-linkedin-in fa-2x mt-3"></i></a>
  	 				<a href="/#"><i class="fab fa-facebook-f fa-2x mt-3"></i></a>
  	 				<a href="/#"><i class="fab fa-instagram fa-2x mt-3"></i></a>
  	 				<a href="/#"><i class="fab fa-twitter fa-2x mt-3"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>
    )
}
export default Footer1;