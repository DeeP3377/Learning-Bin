import axios from 'axios';
import React, { useState } from 'react';
import {useHistory , useParams} from "react-router-dom";
import './Signup.scss';
const AdminEdit = () => {
    const histrory = useHistory();
    const {id} = useParams();
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
                 axios.put(`http://localhost:8080/update/${id}`, user)
                .then(res => {
                    if(res.data.message === "Update Successfully")
                    {
                      
                        alert(res.data.message)
                        histrory.push("/admin")
                    }
                    else{
                       alert(res.data.message)
                       console.log('not ok')
                        histrory.push("/admin")
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

            <div style={{ marginTop: '90px', backgroundColor: 'whitesmoke' }}></div>
            <hr></hr>
            <div className="form_wrapper mt-5">

                <div className="form_container">
                    <div className="title_container">
                        <h1>Update Data</h1>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form  onSubmit={submitForm} >
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setname(e.target.value)} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="repassword" placeholder="Re-type Password" value={repassword} onChange={(e) => setrepassword(e.target.value)} required />
                                </div>

                                
                                <div className="input_field"> <span><i aria-hidden="true" class="fas fa-phone"></i></span>
                                    <input type="number" name="mobileno" placeholder="Mobile Number" value={mobileno} onChange={(e) => setmobileno(e.target.value)} required />
                                </div>
                                <div className="input_field select_option" >
                                    <select id="mySelect" value={joinas} onChange={(e) => setjoinas(e.target.value)}>
                                        
                                        <option value="Student" selected="selected">Student</option>
                                        <option value="Teacher">Teacher</option>
                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                                <input className="button" type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AdminEdit;