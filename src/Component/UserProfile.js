import React , {useState} from "react";
import "./UserProfile.css";
import img1 from "../Image/photo_camera.svg";
import Footer2 from "./Footer2";

function Account() {
    return(
        <>
           <form>
                <div className="row m-5">
                <h1 className="text-center user-profile-detail-heading1">My Account</h1><br/><br/>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Full Name</label>
                        <h3 className="user-profile-detail" >Deepak Gupta</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Email</label>
                        <h3 className="user-profile-detail" >deepak8932906049@gmail.com</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Class</label>
                        <h3 className="user-profile-detail" >10</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Phone</label>
                        <h3 className="user-profile-detail" >8932906049</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">School</label>
                        <h3 className="user-profile-detail" >M J R P Public School , Ghazipur</h3>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Addresh</label>
                        <h3 className="user-profile-detail" >Radhe Nagar colony Bansi Bazar , Ghazipur</h3>
                    </div>
                   
                </div>
            </form>                    
        </>
    )
}
function UpdateAccount() {
    return(
        <>
            <form>
                <div className="row m-5">
                <h1 className="text-center">Update Account</h1>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Full Name<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="text" placeholder="Enter Your Name" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Email<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="email" placeholder="Enter Your Email" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Class<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="text" placeholder="Enter Your Class" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Phone<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="number" placeholder="Enter Your Phone No" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">School<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="text" placeholder="Enter Your School Name" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Addresh<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="text" placeholder="Enter Your Addresh" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                    <button className="user-profile-update-btn">Update</button>
                    </div>
                </div>
            </form>                   
        </>
    )
}
function Password() {
    return(
        <>  

        <br/>
            <form>
                <div className="row m-5">
                <h1 className="text-center">Change Password</h1><br/>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Old Password<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="password" placeholder="Enter Your Email" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">New Password<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="password" placeholder="Enter Your Email" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div> 
                    <div className="col-lg-6 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                        <label className="user-profile-lable">Re-Password<span className="label-star">*</span></label>
                        <input className="input_field signup-input" type="password" placeholder="Enter Your Email" style={{boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} ></input>
                    </div>
                   
                    <div className="col-lg-12 col-md-12 col-sm-12 my-sm-2">
                    <br/>
                    <button className="user-profile-update-btn">Update</button>
                    </div>
                </div>
            </form>                    
        </>
    )
}

const UserProfile =()=>{
    
    const [page, setPage] = useState({
        pageId: '1'
    });
    console.log(page);
    const updatedata = (data)=>
   {
     if(data === 'Account')
     {
        setPage({
            pageId: '1'
        })
     }
     else if(data === 'Password')
     {
        setPage({
            pageId: '2'
        })
     }
     else if(data === 'Update_Account')
     {
        setPage({
            pageId: '3'
        })
     }
     else
     {
        setPage({
            pageId: '4'
        })
     }
    }
    return(
        <>
            <div style={{marginTop:'80px'}}></div>
            {/* 
            <div className="container-fluid">
                <div className="container-fluid" style={{height:'200px' , width:'100%' , backgroundColor:'#1f60ab'}}></div>
                
                <div className="user-profile-container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 table user-profile-table">
                        <br/><br/>
                            <tr className="d-block"><p className="camera-icon m-auto"><label style={{background:'transparent'}}  class="btn">
                            <img style={{background:'transparent'}} className="camera-image" src={img1} alt=""/><input  type="file" hidden/>
                        </label></p></tr>
                            <tr className="text-center user-profile-user_name d-block tr-div mt-2">Akshat Kashyap</tr><br/><br/><br/>
                            <tr className="user-profile-sidebar-list tr-div" ><a className="user-profile-sidebar-a" onClick={() => updatedata('Account')} href="#account">Account</a></tr>
                            <tr className="user-profile-sidebar-list tr-div" ><a className="user-profile-sidebar-a" onClick={() => updatedata('Password')}  href="#account">Password</a></tr>
                            <tr className="user-profile-sidebar-list tr-div" ><a className="user-profile-sidebar-a" onClick={() => updatedata('Achivments')} href="#account">Achivements</a></tr>
                            <tr className="user-profile-sidebar-list tr-div" style={{marginBottom:'10px'}} ><a className="user-profile-sidebar-a" onClick={() => updatedata('MyDoubts')} href="#account">My Doubts</a></tr>
                        </div>
                        <div className="col-lg-9 col-sm-12 user-profile-detail">
                            <div className="row user-profile-detail-row">
                           
                                <div className="col-lg-8 col-md-8 col-sm-10" >
                                    {
                                        page.pageId === '1' ? <Account/> :  page.pageId === '2' ? <Password/> : page.pageId === '3' ? <h1>Page 3</h1> : <h1>Page 4</h1>
                                    }

                                    */}
                                    {/* 
                                    <label>Name:</label>
                                    <input className="inputform" type="text" placeholder="Enter Your Name" ></input>
                                    <br/><br/>
                                    <label>Email:</label>
                                    <input className="inputform" type="email" placeholder="Enter Your Email" ></input><br/><br/>
                                    <label>Phone:</label>
                                    <input className="inputform" type="text" placeholder="Enter Your Phone No" ></input><br/><br/>
                                    <label>Class:</label>
                                    <input className="inputform" type="text" placeholder="Enter Your Class" ></input><br/><br/>
                                    <label>School:</label>
                                    <input className="inputform" type="text" placeholder="Enter You Name" ></input><br/><br/>
                                    <button className="btn btn-primary" style={{fontSize:'14px' , marginBottom:'20px'}}>Submit</button>*/}
                               {/* </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
             */}


             <div className="container-fluid user-profile-header"></div>
             <div className="container user-profile-body">
                 <div className="row user-profile-sidebar" >
                    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <li className="user-profile-list-camera text-center"><label className="btn camera-div "><img className="camera-image" src={img1} alt=""/><input  type="file" hidden/></label><br/><br/></li>
                        <li className="user-profile-list" ><button className="user-profile-a" href="#" onClick={() => updatedata('Account')} >My Account</button></li>
                        <li className="user-profile-list" ><button className="user-profile-a" href="#" onClick={() => updatedata('Password')}>Change Password</button></li>
                        <li className="user-profile-list" ><button className="user-profile-a" href="#" onClick={() => updatedata('Update_Account')}>Update Account</button></li>  
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                        {
                            page.pageId === '1' ? <Account/> :  page.pageId === '2' ? <Password/> : page.pageId === '3' ? <UpdateAccount/> : <h1>Page 4</h1>
                        }
                    </div>
                 </div>
             </div>
            <Footer2/>
        </>
    )
}
export default UserProfile;




    
    
    
    
    