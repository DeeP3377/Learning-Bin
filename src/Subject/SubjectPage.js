import React from "react";
import "./SubjectPage.css";
import Footer2 from "../Component/Footer2";
const SubjectPage = ()=>{
    return(
        <>
             <div style={{marginTop:'80px'}}></div>
             
            <div className="container-fluid">
            <div className="row d-flex" style={{width:'100%'}}>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-0 subject-sidebar">
                    <h1 className="text-center subject-sidebar-heading" >Overview</h1>
                    <ul className="subject-sidebar-ul">
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                        <li className="subject-sidebar-list" >Chapter 1</li>
                    </ul>
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 subject-sidebar-body">
                <button className="hamburger-icon"><i className="fas fa-bars fa-2x hideicon"></i></button>
                </div>
                </div>   
            </div>
            <Footer2></Footer2>
        </>
    )
}
export default SubjectPage;