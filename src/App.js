import React ,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Screen/HomePage';
import AboutUs from './Screen/AboutUs';
import Navbar from './Component/Navbar1';
import Login from './Component/Login';
import SignUp from "./Component/Signup";
import Doubts from "./Component/Doubts";
import FAQ from "./Component/FAQ"
import StudyMaterials from './Component/StudyMaterial';
import Wav from "./Component/Wav"
import ContentPage from './Component/ContentPage';
import Math11 from "./Subject Component/Math 11/Math11"
import Math11Chp1 from './Subject Component/Math 11/Math11Chp1';
import Math11Lecture from "./Subject Component/Math 11/Math11Lecture";
import Volunteer from './Component/Volunteer';
import Collection from "./Screen/Collection";
import Admin from "./Screen/Admin";
import AdminEdit from './Component/AdminEdit';
import AskDoubts from "./Component/AskDoubts";
import UserProfile from './Component/UserProfile';
import MyDoubts from './Component/MyDoubts';
import SubjectPage from './Subject/SubjectPage';
function App() {
  const [user , setUser]=useState({})
  return (
    <>
      <Router>
        <Navbar setUser={setUser} user={user}/>
        <div className="bgdiv"> 
        <Route path="/" component={HomePage} exact />
        <Route path="/studymaterial" component={StudyMaterials} exact/>
        <Route path="/subjectpage" component={SubjectPage} exact/>
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/faq" component={FAQ} exact />
        <Route path="/login" exact ><Login setUser={setUser} /> </Route>
        <Route path="/signup" component={SignUp} exact />
        <Route path="/doubts/askdoubts" exact > { user && user._id ? <AskDoubts/> : <Login setUser={setUser} />} </Route>
        <Route path="/doubts/mydoubts" exact >  { user && user._id ? <MyDoubts/> : <Login setUser={setUser} />} </Route>
        <Route path="/doubts"  exact ><Doubts/>
          {/*
            user && user._id ? <Doubts/> : <Login setUser={setUser} />
          */}
        </Route>
        <Route path="/doubts/doubts"  exact ><Doubts/>
          {/*
            user && user._id ? <Doubts/> : <Login setUser={setUser} />
          */}
        </Route>
        <Route path="/userprofile" component={UserProfile} exact />
        <Route path="/collection" component={Collection} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/adminedit/:id" component={AdminEdit} exact />
        <Route path="/workasvolunteer" component={Wav} exact />
        <Route path="/workasvolunteer/volunteer" component={Volunteer} exact />
        <Route path="/studymaterial/math11" component={Math11} exact/>
        <Route path="/studymaterial/math11/chapter1" component={Math11Chp1} exact />
        <Route path="/studymaterial/math11/math11video" component={Math11Lecture} exact />
        <Route path="/studymaterial/contentpage"><ContentPage/></Route>
      
        </div>
      </Router>
    </>
  );
}
export default App;
