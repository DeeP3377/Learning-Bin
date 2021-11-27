import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./ContentPage.css";
import axios from 'axios';
const ContentPage = ()=>{
  const [subjectData, setsubjectData] = useState([]);
  console.log(subjectData);
  useEffect(() => {
    axios.get("http://localhost:8080/studymaterial/contentpage").then(res => { 
      setsubjectData(res.data) 
    })
  }, []);
  const subData = (id)=>{
    console.log(id);
  }
    return(
        <>
        
        <div style={{marginTop:'90px'}}></div>
        <div className="container-fluid cf">
          <header>
          {/* Sidebar Start */}
          <div className="header-content">
              <div className="navbar">
                  <a href="#side"><span className="material-icons-sharp menu-icon"><i className="fas fa-bars"></i></span></a>
              </div>    
          </div>
          </header>
          <span id="pop"></span>
          <div id="side">
          <a href="#pop"><span className="material-icons-sharp menu-icon"><i className="fas fa-bars mt-5"></i></span></a>
          <div className="side-content">
              <nav>
                  <h1 id="nav-header" style={{color:'white'}}><a href="#overview"  style={{color:'white'}}> Overview </a></h1>
                  <ul className="ulofsidebar">
                  {
                    subjectData.map((users, index) => {
                      return(
                        <div key={users._id}>
                        <li><button onClick={()=>subData(users._id)} className="nav-link text-center" style={{background:'transparent' , color: 'white', border: 'none' }}>{users.ChapterName}</button></li>
                        </div>
                        )
                  })}
                  </ul>
              </nav>
          </div>
          </div>
          {/* Sidebar End */}

          {/* Subject Body Start */}

          <main id="main-doc" style={{height:'750px',backgroundColor:'white' , overflowY:'auto', marginTop:'-50px'}}>
          <div className="container-fluid mathcontent m-auto">
              <div style={{marginTop:'50px'}}>
                <h1>Hello hii bye bye</h1>
                
            <br/><br/>
              <div className="row">
                <div>
                  <p className="text-right"style={{marginRight:'40px'}}>
                    <Link to="/studymaterial/math11/chapter1"><a href="/#" className="btn btn-primary m-3 p-2" style={{fontSize:'16px'}} > Start Learning</a></Link>
                    <Link to="/studymaterial/math11/math11video"><a href="/#" className="btn btn-success m-3 p-2" style={{fontSize:'16px'}}>Start Learning With Video</a></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </main>
          {/* Subject Body Start */}
        </div>
        </>
  )
}
export default ContentPage;