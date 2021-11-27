import React , {useState} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {useHistory} from "react-router-dom";
import Footer2 from '../Component/Footer2';
import './Signup.scss';
import axios from 'axios'; 
const Login = ({setUser})=>{
    const histrory = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const submitForm=(e)=>{
        e.preventDefault();
        const user = {email, password };

        axios
          .post("http://localhost:8080/login",user)
          .then(res =>{ 
                alert(res.data.message)
                setUser(res.data.user)
                histrory.push("/doubts")
            })
          .catch(err => console.error(err));
    }
    return(
        <>
            <div style={{marginTop:'80px', backgroundColor:'whitesmoke'}}></div>
            <hr></hr>
            <div className="form_wrapper mt-5">
           
                <div className="form_container">
                    <div className="title_container">
                        <h1>Log In Form</h1>
                    </div>
                    <br/>
                    <div className="row clearfix">
                        <div className="">
                            <form  onSubmit={submitForm}>
                                
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required />
                                </div><br/>
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                                </div>
                                <br/><br/><br/>
                                <input className="button" type="submit" value="Login"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">I have not register.<LinkContainer to="/signup" ><a href="/#" className="m-2" style={{fontSize:'14px'}}>Sign Up</a></LinkContainer></p>

        <Footer2/>
            
        </>
    );
};
export default Login;