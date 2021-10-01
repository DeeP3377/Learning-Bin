import React from "react";
import img from "../Image/footerlogo.png"
import "../Component/footer2.css";
const Footer2 =()=>{
    return(
        <>
        <div className="footer2">
            <div className="container" > 
                <div className="row" style={{position: "relative" , margin:'auto' , textAlign:'center'}}>
                    <div className="col-lg-5 col-md-5 col-sm-0 col-xs-0" ></div>
                    <div className="col-lg-1 col-md-1 col-sm-12" ><p><img src={img} alt="" className="footerimg" style={{width:'100px' , height:"100px"}}></img></p></div>
                    <div className="col-lg-5 col-md-5 col-sm-0 col-xs-0"></div>
                    
                </div>
            </div>
            <div className="row" style={{margin:'auto' , minHeight:'220px' ,position:'relative'}}>
                <div className="col-lg-5 col-md-5 col-sm-12 mb-5" >
                        <hr className="footerhr"/>
                        <h1 style={{textAlign:'center' , color:'#fff'}}>About Lerning Bin</h1>
                        <p  style={{fontSize:'16px'  , color:'#fff' , padding:'20px'}}>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Cupiditate adipisci  adipisicing e adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12" style={{textAlign:'center'}}>
                <div class="social-links ">
                        <a href="/#"><i class="fas fa-envelope mt-2 fa-2x"></i></a>
                        <a href="/#"><i class="fab fa-linkedin mt-2 fa-2x"></i></a>
                        <a href="/#"><i class="fab fa-facebook-f mt-2 fa-2x"></i></a>
                        <a href="/#"><i class="fab fa-instagram mt-2 fa-2x"></i></a>
                        <a href="/#"><i class="fab fa-twitter mt-2 fa-2x"></i></a>
  	 			    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 footer-sec3 mb-5 ml-5">
                <hr className="footerhr1" style={{fontSize:'18px' , marginLeft: '-20px'}} />
                    <h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none", color:'#fff'}}>contact us</a></h4>
                    <h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none" , color:'#fff'}}>about us</a></h4>
                    <h4 className="footerh4"><a href="/#" className="quicklink" style={{textDecoration:"none" , color:'#fff'}}> polacy</a></h4>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer2;