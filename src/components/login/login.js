import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const Login = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const HandaleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const logins = () => {
        axios.post("http://localhost:5858/api/users/login", user,{withCredentials: true})
      .then(function (response) {
        if('mandalshivam962@gmail.com' === response.data.user.email) {
          Navigate('/admin') 
        localStorage.setItem('loggedIn',true)
        localStorage.setItem('name',response.data.user.name)
        localStorage.setItem('email',response.data.user.email)
        localStorage.setItem('user_id',response.data.user._id)
        }else{
        localStorage.setItem('loggedIn',true)
        localStorage.setItem('name',response.data.user.name)
        localStorage.setItem('email',response.data.user.email)
        localStorage.setItem('user_id',response.data.user._id)
        alert("login successfully");
        Navigate("/");
        }
      })
      .catch(function (error) {
        alert("something went wrong");
        console.log(error);
      });
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="Login-container">
        <div className="login">
          <h1>Login</h1>
          <hr></hr>
          <input
            type="text"
            className="input"
            name="email"
            value={user.email}
            placeholder="Enter your Email"
            onChange={HandaleChange}
          ></input>
          <input
             type={changePassword ? "password" : "text"}
            
            className="input"
            name="password"
            value={user.password}
            placeholder="Enter Your Password"
            onChange={HandaleChange}
          ></input>
          <span className="icon"
                 onClick={() => {
                    setChangePassword(changeIcon);
                 }}
              >
                 {changeIcon ? <Eye/> : <EyeOff/>}
              </span>
           
          <button className="button" onClick={logins}>
            Login
          </button>
          <div className="or">or</div>

          <button className="button">
            <a href="/register">Register</a>
          </button>
          <a href="/forgetpassword">Forget Password</a>
        </div>
      </div>
    </>
  );
};

export default Login;
