import React from "react";
import './FAQ.css'
import Carousels from "./Carousels";
const FAQ =()=>{
    return(
        <>
        <div className="container p-1 mt-4" style={{backgroundColor:'#1F60ab'}}>
            <h1 style={{fontSize:'48px',textAlign:'center',color:'white'}}>FAQ</h1>
        </div>
        <section className="container faqs">
        <details className="faq_item">
        <summary className="faq_title">First Question</summary>
        <p className="faq_content">Answer 1...</p>
        </details>

        <details className="faq_item">
        <summary className="faq_title">Second Question</summary>
        <p className="faq_content">Answer2...</p>
        </details>

        <details className="faq_item">
        <summary className="faq_title">Third Question</summary>
        <p className="faq_content">Answer3...</p>
        </details>

        <details className="faq_item">
        <summary className="faq_title">Forth Question</summary>
        <p className="faq_content">Answer4...</p>
        </details>

        <details className="faq_item">
        <summary className="faq_title"> Question</summary>
        <p className="faq_content">Answer5...</p>
        </details>

</section>
    <Carousels/>
        </>
    )
}
export default FAQ