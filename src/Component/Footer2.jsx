import React from "react";
import img from "../Image/footerlogo.png"
import "../Component/footer2.css";
const Footer2 =()=>{
    return(
        <>
        <div className="footer2 container-fluid">
            <div className="container" > 
                <div className="row" style={{position: "relative" , margin:'auto' , textAlign:'center'}}>
                    <div className="col-lg-5 col-md-5 col-sm-0 col-xs-0" ></div>
                    <div className="col-lg-1 col-md-1 col-sm-12 m-auto" ><img src={img} alt="" className="footerimg" style={{width:'100px' , height:"100px" , marginBottom:'5px'}}></img></div>
                    <div className="col-lg-5 col-md-5 col-sm-0 col-xs-0"></div>
                    
                </div>
            </div>
            <div className="row" style={{margin:'auto' , minHeight:'220px' ,position:'relative'}}>
                <div className="col-lg-5 col-md-5 col-sm-12 mb-5" >
                        <hr className="footerhr"/>
                        <h1 style={{textAlign:'center' , color:'#fff'}}>About Lerning Bin</h1>
                        <p  style={{fontSize:'16px'  , color:'#fff' , padding:'20px' , textAlign:'center'}}>Learning Bin is a global educational platform that aims to provide quality education to everyone who needs it, irrespective of where they come from. Through quality content in the form of video lectures and notes by the experts of the subject, Learning Bin strives to be a one-stop solution for any student looking for success. It is a completely free platform that does not compromise with the quality, and where knowledge is the priority.  Learningbis an outcome of only one intent which is to work for the greater good of society. We are a team of young minds, and hence we exactly know what the students need and we aim to help them in every step of their learning. Our firm belief is education is a gift that everyone deserves and Learning Bin is here to do its bit!  </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12" style={{textAlign:'center'}}>
                <div class="social-links m-auto">
                        <a href="mailto:contact@learningbin.in"><i class="fas fa-envelope fa-2x" style={{marginTop:'7px'}}></i></a>
                        <a href="https://www.linkedin.com/company/learning-bin/?viewAsMember=true"><i class="fab fa-linkedin fa-2x" style={{marginTop:'7px'}}></i></a>
                        <a href="https://www.facebook.com/LearningBinEducation"><i class="fab fa-facebook-f fa-2x" style={{marginTop:'8px'}}></i></a>
                        <a href="https://www.instagram.com/learning.bin/"><i class="fab fa-instagram fa-2x" style={{marginTop:'8px'}}></i></a>
                        <a href="https://twitter.com/bin_learning?s=08"><i class="fab fa-twitter  fa-2x" style={{marginTop:'8px'}}></i></a>
  	 			    </div>
                </div>
                <div className="col-lg-5  col-md-5 col-sm-12 footer-sec3 mb-5 ml-5 ">
                <hr className="footerhr1 " style={{fontSize:'18px' , marginLeft: '-20px'}} />
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-sm-12">
                    <div>
		                <div class="contact__container">
				            <div class="contact__title">
						        <h2>Feedback<hr/></h2>
                            </div>
				            <form class="contact__form">
                                {/*<lable><h5>Email</h5></lable>*/}
                                <input class="contact__form-input" placeholder="Email" type="text"/>
                                {/*<label><h5>Message</h5></label>*/}
                                <textarea class="contact__form-textarea" type="text" placeholder="Type Feedback..."></textarea>
                                <input type="submit" value="Submit"/>
				            </form>
		                </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="footerlink">
                            <div><h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none", color:'#fff'}}>contact us</a></h4></div>
                            <div><h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none" , color:'#fff'}}>What We Do</a></h4></div>  
                            <div><h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none" , color:'#fff'}}>Policy</a></h4></div>  
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer2;