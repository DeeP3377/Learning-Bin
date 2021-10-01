import React from "react";
import "./Sidebar.css"
import $ from 'jquery';
const Sidebar =()=>{
    $(document).ready(function () {
        $('.vid-item').each(function(index){
          $(this).on('click', function(){
            var current_index = index+1;
            $('.vid-item .thumb').removeClass('active');
            $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
          });
        });
      });
    return(        
        <>
            <div className="container-fluid">
  <div className="row">
    <div className="col-lg-2 col-sm-3 collapse d-md-flex pt-2 min-vh-100" id="sidebar"style={{borderRight:'2px solid gray' , backgroundColor :'#1F60ab'}}>
      <ul className="nav flex-column flex-nowrap" style={{fontSize:'16px' , backgroundColor :'#1F60ab'}}>
        <li className="nav-item"><a className="nav-link" href="/#" style={{fontSize:'22px' , color:''}}>Overview</a></li> 
        <li className="nav-item"><a className="nav-link" href="/studymaterial/sidebar">Mathematics</a></li>
        <li className="nav-item"><a className="nav-link" href="/studymaterial/sidebar">Physics</a></li>
        <li className="nav-item"><a className="nav-link" href="/studymaterial/sidebar">Chemistry</a></li>
        <li className="nav-item"><a className="nav-link" href="/studymaterial/sidebar">Biology</a></li>
      </ul>
    </div>





    <div className="col pt-2" style={{color:'black'}}>
      <h2>
        <a href="/" data-target="#sidebar" data-toggle="collapse" className="d-md-none"><i className="fa fa-bars"></i></a> Content
      </h2>
      <h1 className="/studymaterial/sidebar" style={{textAlign:'center' , marginTop:'50px'}}>Introduction of Set theory</h1>
      <div className="ytvideo mt-5" style={{textAlign:'center' , marginTop:'50px'}}>
<iframe width="75%" height="500px" src="https://www.youtube.com/embed/videoseries?list=PLr6TOxpiWwuHNSUbwPDOwleDBTwkLqnOJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>




      <div className="notes"  style={{marginLeft:'5%' , marginTop:'50px' , marginRight :'5%'}}>
        <p  style={{fontSize:'16px'}}><strong>Set : </strong> A set is a well-defined collection of objects.</p>
        <p style={{fontSize:'16px'}}><strong>Representation of Sets -</strong> There are two methods of representing a set : <br/>
Roster or Tabular form In the roster form, we list all the members of the set within braces { } and separate by commas.<br/>
Set-builder form In the set-builder form, we list the property or properties satisfied by all the elements of the sets.
        </p>
        <p style={{fontSize:'16px'}}><strong>Types of Sets-</strong><br/>
        <strong>Empty Sets: </strong> A set which does not contain any element is called an empty set or the void set or null set and it is denoted by {} or Φ.<br/>
        <strong>Singleton Set: </strong>A set consists of a single element, is called a singleton set.
        </p>
        
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Sidebar;