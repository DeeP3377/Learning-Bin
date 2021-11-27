import React, { useState, useEffect } from 'react';
import "./Admin.css";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
const Admin = () => {
  const histrory = useHistory();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/admin").then(res => { setUsers(res.data) })
  }, []);
  //console.log(users);
  function deleteData(id){
    
    axios.delete(`http://localhost:8080/delete/${id}`).then(res => {
        alert("Data Deleteed")
        window.location.reload(true);
        histrory.push("/admin")
       })     
  }
  function ChangeStatus(id) 
  {
    console.log(id)
      axios.put(`http://localhost:8080/changestatus/${id}` , users).then(res => {
        alert("Change Status")
        window.location.reload(true);
        histrory.push("/admin")
       })     
    }
  return (
    <>
      <div style={{ marginTop: '90px' }}></div>
      <table className="container table" style={{fontSize:'14px'}}>
        <thead>
          <tr>
            <th scope="col">S_No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Join As</th>
            <th className="text-center" scope="col" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (<tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.joinas}</td>
              <td className="text-center">
              <button className="m-1 btn btn-primary" onClick={()=> ChangeStatus(user._id)}>{user.active? "Active" : "Inactive"}</button></td>
              <td className="text-center"><LinkContainer to={`adminedit/${user._id}`} ><button className="m-1 btn btn-danger">Edit</button></LinkContainer></td>
                <td className="text-center"><button onClick={()=>deleteData(user._id)} className="m-1 btn btn-success" >Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  )
}
export default Admin;