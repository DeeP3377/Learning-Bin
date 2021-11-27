import React from "react";
import "../Component/footer1.css";
const Footer1 =()=>{
    return(
        <>
			<div className="container-fluid subject-footer">
			<div className="row subject-footer-row">
				<div className="col-lg-4 col-md-4 col-sm-12 pt-3 m-auto">
					<h3 className="text-center mb-2 subject-footer-heading">Copyright © LearningBin 2021</h3>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 pt-3 m-auto">
					<div class="social-links text-center">
                        <a href="mailto:contact@learningbin.in"><i class="fas fa-envelope fa-2x" style={{marginTop:'7px'}}></i></a>
                        <a href="https://www.linkedin.com/company/learning-bin/?viewAsMember=true"><i class="fab fa-linkedin fa-2x" style={{marginTop:'7px'}}></i></a>
                        <a href="https://www.facebook.com/LearningBinEducation"><i class="fab fa-facebook-f fa-2x" style={{marginTop:'8px'}}></i></a>
                        <a href="https://www.instagram.com/learning.bin/"><i class="fab fa-instagram fa-2x" style={{marginTop:'8px'}}></i></a>
                        <a href="https://twitter.com/bin_learning?s=08"><i class="fab fa-twitter  fa-2x" style={{marginTop:'8px'}}></i></a>
  	 			    </div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12 pt-3">
					<div className="subject-footer-link mb-2 text-center">
					<a href="#Privacy Policy">Privacy Policy</a> <a href="Terms">Terms of Use</a>
					</div>
				</div>
			</div>
			</div>
        </>
    )
}
export default Footer1;