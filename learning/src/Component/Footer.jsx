import React from 'react';
import logoimg from "./logo.png";
import "./footer.css"
function Footer() {
    return(
        <>     
             <div className="footer">
                <div className="contain">
                <div className="col">
                    <h1>Company</h1>
                    <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                    <li>Social</li>
                    <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Services</h1>
                    <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                    <li>Social</li>
                    <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Teachers</h1>
                    <ul>
                    <li>About</li>
                    <li>Mission</li>
                    <li>Services</li>
                    <li>Social</li>
                    <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Content Writer</h1>
                    <ul>
                    <li>Webmail</li>
                    <li>Redeem code</li>
                    <li>WHOIS lookup</li>
                    <li>Site map</li>
                    <li>Web templates</li>
                    <li>Email templates</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Support</h1>
                    <ul>
                    <li>Contact us</li>
                    <li>Web chat</li>
                    <li>Open ticket</li>
                    </ul>
                </div>
                <div className="col logo">
                    <ul>
                        <li><img src={logoimg} alt="" /></li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                </div>
                </div>
                <span className="border-top-2"></span>
                <div className="footer1">
                    <div className="p-2 text-light">
                        <div className="social-link">
                        <div className="social-link1">
                        <a href="https://twitter.com/bin_learning?s=08" alt=""><i className="footericon fab fa-twitter-square"></i></a>
                        <a href="https://www.facebook.com/LearningBinEducation" alt=""><i className="footericon fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/learning.bin/" alt=""><i class="footericon fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/learning-bin/?viewAsMember=true" alt=""><i className="footericon fab fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/company/learning-bin/?viewAsMember=true" alt=""><i class="fab fa-google-plus"></i></a>
                        </div>
                    </div>
                    <div className="legal">
                        <h6>&copy; Copyright Learning Bin.  All Rights Reserved.</h6>
                </div>   
                </div>
            </div>
        </>       
    );
  }
  export default Footer;