import React from 'react'
import "./AskDoubts.scss";
import Footer2 from './Footer2';
const AskDoubts = ()=>{
    return(
        <>
            <div style={{marginTop:'90px'}}></div>
            <div className="container">
                <div className="row">
                    {/* This empty column for aid */}
                    <div className="col-lg-3 col-md-2 col-sm-0"></div>

                    {/* This column for doubts section */}
                    <div className="col-lg-6 col-md-8 col-sm-12 askquestion">
                    <h1 className="mt-4 mb-3">Ask Doubts</h1>
                    <form>
                        <textarea className="p-2" rows="10" placeholder="Enter Your Doubts  Question" style={{ boxShadow :'0 0 3px' , border:"none"}} />
                        <label style={{fontSize:'14px'}} >Or Upload</label>
                        <div className="d-flex">
                        <input type="file" className="p-2 mt-2" style={{border:'none'}}></input> 
                        <input type="submit" value="Send Doubts" className="p-2" style={{fontSize:"14px" , width:'100px', marginLeft:'5%' ,backgroundColor:'#007bff' , border:'none' , color:'white'}}></input>
                        </div>

                        <br/><br/>
                      </form>    
                    </div>
                    
                    {/* This empty column for aid */}
                    <div className="col-lg-3 col-md-2 col-sm-0"></div>
                    
                </div>
            </div>
            <Footer2/>
        </>
    )
}
export default AskDoubts;