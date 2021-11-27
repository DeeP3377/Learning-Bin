import React from 'react';
import "./Collection.css"
const Collection =()=>{
    return(
        <>
            <div style={{marginTop:'90px'}}> </div>
            <div className="container">
                <h1>Button</h1>
                    <div className="row">
                        <div className="col"><a href="/#" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'200px' , borderRadius:'10px' }}><strong>Explore</strong></a></div>
                        <div className="col"><a  href="#ourvolenteer" className="btn bg-transparent p-3" style={{border: '2px solid black' , borderRadius : '25px' , width:'140px'}}><span style={{fontSize:'16px ' , textShadow :'2px 2px 5px blue'}}>Our Volunteer</span></a></div>
                        
                    </div>
                    <div>
                    </div>
                    
                <h1>Icons</h1>
                <div className="row">
                    <div className="col"> <i className="fas fa-question-circle m-2 fa-5x"></i><br/></div>
                    <div className="col"> <i className="fas fa-sign-in-alt m-2 fa-5x"></i><br/></div>
                    <div className="col"> <i className="fas fa-user-circle fa-5x m-3"/><br/></div>
                    <div className="col"> <i className="far fa-heart fa-5x m-2"></i><br/><br/></div>
               </div>
                <h1>Forms</h1>
            </div>
        </>
    )
}
export default Collection;