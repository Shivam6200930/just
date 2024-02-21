import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import "../../App.css";

const Profile = () => {
  const navigete=useNavigate()
  const [data,setdata]=useState({
    name:"",
    email:""
  })
  async function func() {
    try{
    const response=await axios.get("http://localhost:5858/api/users/loggedUser",{withCredentials:true})
     const temp={
      name:response.data.user.name,
      email:response.data.user.email
     }
     setdata(temp)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    func()
  },[])
  
  async function clearData (){
       await axios.get("http://localhost:5858/api/users/logout",{withCredentials:true})
       localStorage.clear()
    navigete('/')
  }
  

  return (
    <>
      <div className="profile-container">
        <div className="left-section">
          <div className="profile-image-box"></div>
          <h2>{data.name}</h2>
        </div>
        <div className="vertical-line"></div>
        <div className="right-section">
          <div className="user-information">
            <p>Email:{data.email}</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="bottom-section">
            <button className="change-password-btn"><a href="/changepassword">Change Password</a></button>
             <button onClick={()=>clearData()} className="logout-btn">Logout</button>
          </div>
          
        </div>
        <button className="change-password-btn"><a href="/edit">Edit Profile</a></button>
      </div>
    </>
  );
};

export default Profile;
