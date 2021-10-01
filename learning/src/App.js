import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
//import Footer from "./Component/Footer";
import HomePage from './Screen/HomePage';
import AboutUs from './Screen/AboutUs';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import SignUp from "./Component/Signup";
import FAQ from "./Component/FAQ"
import StudyMaterials from './Component/StudyMaterial';
import Wav from "./Component/Wav"
import Sidebar from './Component/Sidebar';
import Footer1 from './Component/Footer2';

//import Footer1 from './Component/Footer1';
//import Team from "./Component/Team"
function App() {
  return (
    <>
      <Router>
     
        <Navbar/>
        
        <div className="bgdiv"> 
        <Route path="/" component={HomePage}exact />
        <Route path="/studymaterial" component={StudyMaterials} exact/>
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/workasvolunteer" component={Wav} exact />
        <Route path="/studymaterial/sidebar" component={Sidebar} exact />
        </div>
        <Footer1/>
      </Router>
    </>
  );
}
export default App;
