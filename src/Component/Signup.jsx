import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import './Signup.scss';
import Footer2 from '../Component/Footer2';
const Signup = () => {
    const histrory = useHistory();
    const [name, setname] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    const [joinas, setjoinas]=useState("Student");
    const submitForm = (e) => {
        e.preventDefault();
        const user = { name, email, password, mobileno , joinas };
        let IndNum = /^[0]?[789]\d{9}$/;
        if (password !== repassword) {
            alert("Password not match");
            return false;
        }
        else if (password.length < 6) {
            alert("Length sould be greater then 6");
            return false;
        }

        else if (IndNum.test(mobileno)) {

            console.log(user);
            axios.post("http://localhost:8080/signup", user)
                .then(res => {
                    if(res.data.message === "Successfully Registerd")
                    {
                        alert(res.data.message)
                        histrory.push("/login")
                    }
                    else{
                        alert(res.data.message)
                        histrory.push("/signup")
                    }
                })
                .catch((err) => console.log(`not send`));
            return true;
        }
        else {
            alert("mobile number is not correct");
            return false;
        }
    }
    return (
        <>

            <div style={{ marginTop: '80px', backgroundColor: 'whitesmoke' }}></div>
            <hr></hr>
            <div className="form_wrapper mt-5">

                <div className="form_container">
                    <div className="title_container">
                        <h1>SignUp Form</h1>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form method="POST" onSubmit={submitForm} >
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input className="signup-input1" type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setname(e.target.value)} required />
                                </div>
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input className="signup-input1" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input className="signup-input1" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                <div className="input_field signup-input"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input className="signup-input1" type="password" name="repassword" placeholder="Re-type Password" value={repassword} onChange={(e) => setrepassword(e.target.value)} required />
                                </div>

                                {/*<div className="input_field radio_option">
                                <input type="radio" name="radiogroup1" id="rd1"/>
                                <label for="rd1">Male</label>
                                <input type="radio" name="radiogroup1" id="rd2"/>
                                <label for="rd2">Female</label>
                                </div>*/}
                                <div className="input_field signup-input"> <span><i aria-hidden="true" class="fas fa-phone"></i></span>
                                    <input type="number" name="mobileno" placeholder="Mobile Number" value={mobileno} onChange={(e) => setmobileno(e.target.value)} required />
                                </div>
                                <div className="input_field select_option" >
                                    <select id="mySelect" value={joinas} onChange={(e) => setjoinas(e.target.value)}>
                                        
                                        <option value="Student" selected="selected">Student</option>
                                        <option value="Teacher">Teacher</option>
                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                                <input className="button" type="submit" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">I have register.<LinkContainer to="/login" ><a href="/#" className="m-2" style={{ fontSize: '14px' }}>Log In</a></LinkContainer></p>
            <Footer2/>
        </>
    );
};
export default Signup;