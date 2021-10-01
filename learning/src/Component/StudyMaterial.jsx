import React, { useState } from "react";
import materialdetail from "../MaterialDetail";
//import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./StudyMaterial.css"
const StudyMaterials = () => {

    const [item, setItems] = useState(materialdetail);
    const filterItem = (categ) => {
        const updatedItem = materialdetail.filter((curEle) => {
            return curEle.category === categ;
        })
        setItems(updatedItem);
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center" style={{ marginTop: '30px', fontSize: '36px' }}>Study Material</h1>
                <hr />               
   
                <div className="menu-tabs flex-container">
                    <div className="groupbtn p-1" style={{margin:'auto'}}>
                        <button className="sec btn btn-dark m-2 p-2" onClick={() => setItems(materialdetail)} style={{ borderRadius: '10px'  }}><i class="fas fa-bars fa-2x"></i></button>
                        <button className="btn btn-11  p-2 m-1" onClick={() => filterItem('Mathematics')}  ><h3 style={{color:'black'}}>Mathematics</h3></button>
                        <button className="btn btn-11  p-2 m-1" onClick={() => filterItem('Chemistry')}  ><h3 style={{color:'black'}}>Chemistry</h3></button>
                        <button className="btn btn-11  p-2 m-1" onClick={() => filterItem('Physics')} ><h3 style={{color:'black'}}>Physics</h3></button>
                        <button className="btn btn-11 p-2 m-1" onClick={() => filterItem('Biology')} ><h3 style={{color:'black'}}>Biology</h3></button>
                        
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row my-5" >

                                {
                                    item.map((elem) => {
                                        const { image, subject, category, std } = elem;

                                        return (
                                            <div className="col-sm-6 col-xs-6 col-md-4 col-lg-3 col-xl-3" key={Math.random()}>
                                                <div className="row">
        
                                                    <div class="card-top" style={{ width: '85%', marginTop: '25px', padding: '10px' }}>
                                                        <img class="card-img-top" src={image} alt="Cardcap"/>
                                                        <div class="card-body">
                                                            <h3 class="card-title t1 mt-2"><strong>{subject}</strong></h3>
                                                            <h5 class="card-title mt-2"><strong>Class : {std}</strong></h5>
                                                            <h5 class="card-title mt-2" ><strong>Subject : {category}</strong></h5>
                                                            <Link to="/studymaterial/sidebar" className="btn btn-10 p-2 m-4" style={{ fontSize: '16px', textAlign:'center' , marginLeft:'10%', width:'80%' , borderRadius:'10px' }}><strong>Explore</strong></Link>
                                                        </div>
                                                    </div>
                                                    
                                                </div>

                                            </div>

                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default StudyMaterials;