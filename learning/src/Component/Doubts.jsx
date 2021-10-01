import React from "react";
import ques from "../Image/BG5.jpg"
import "./Doubts.css"
const Doubts =()=>{
    return(
        <>
            <div className="container" style={{maxWidth:'900px' ,marginBottom:"50px", border: "2px solid black"}}>
                    <div className="row m-5" style={{backgroundColor:'white'}}>
                        <div>
                            <h1 style={{textAlign:'center'}}>Doubts</h1>
                            <p style={{textAlign:'center'}}><img src={ques} alt="" style={{width:'80%'}}></img></p>
                        </div>
                    <div className="row m-5" style={{backgroundColor:'whitesmoke' , width:"90%"}}>
                        <div className="col" ><h3><a href="/#" style={{textDecoration:'none'}}><i class="far fa-thumbs-up m-1"></i>Like(1)</a></h3></div>
                        <div className="col"><h3><a href="/#" style={{textDecoration:'none'}}><i class="far fa-thumbs-up m-1"></i>2 Answer</a></h3></div>
                        <div className="col" style={{textAlign:'right'}}><a href="/#" className="btn btn-primary pr-5 pl-5" style={{fontSize:'16px'}}>Answer Now</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Doubts;