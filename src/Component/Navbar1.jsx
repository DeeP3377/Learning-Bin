import React from "react";
import "./Navbar1.css"
import { Link } from "react-router-dom";
import Logoimg from "../Image/Learning bin Web.svg"
export default function NavBar1() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    
  
  return (
    <>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar5" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo" style={{width:'100px'}}>
            <img className="logoimg111" src={Logoimg} alt="Learning Bin"></img>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/studymaterial"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{textDecoration:'none'}}
              >
                Study Material
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{textDecoration:'none'}}
              >
                What We Do
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/workasvolunteer"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                style={{textDecoration:'none'}}
              >
                Volunteer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/doubts"
                activeClassName="active"
                className="nav-links"
                style={{textDecoration:'none'}}
               onClick={click ? handleClick : null}
              >
                <i className="fas fa-question-circle m-2"></i>Doubts
              </Link>
            </li> <li className="nav-item">
              <Link
                exact
                to="/userprofile"
                activeClassName="active"
                className="nav-links"
                style={{textDecoration:'none'}}
               onClick={click ? handleClick : null}
              >
                <div class="dropdown">
                  <i className="fas fa-sign-in-alt m-2"></i><b className="dropbtn user_account p-2">Account</b>
                  <div class="dropdown-content">
                    <Link exact to="/userprofile" activeClassName="active" className="nav-links" style={{textDecoration:'none'}} onClick={click ? handleClick : null}><a href="#login">Profile</a></Link>
                    <Link exact to="/login" activeClassName="active" className="nav-links" style={{textDecoration:'none'}} onClick={click ? handleClick : null}><a href="#login">Login</a></Link>
                  </div>
                </div>
              </Link>
            </li>
            
           
          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
