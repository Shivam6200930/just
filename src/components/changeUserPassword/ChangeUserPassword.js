import React from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function ChangeUserPassword() {
  const Navigate = useNavigate();
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const [user, setUser] = useState({
    password: "",
    confirm_password: "" 
  });

  const HandaleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const change_Password = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5858/api/users/changepassword",
        {
          password: user.password,
          password_confirm: user.confirm_password
        },
        { withCredentials: true }
      );
      console.log(response);
      alert('Successful update password');
      Navigate('/');
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
    setUser({
      password: "",
      confirm_password: "" 
    });
  };

  return (
    <>
      <div className="Change-container">
        <div className="change-password">
          <input
            type={changePassword ? "password" : "text"}
            className="input"
            name="password"
            value={user.password}
            placeholder="Enter Your Password"
            onChange={HandaleChange}
          ></input>
          <span
            className="icon"
            onClick={() => {
              setChangePassword(changeIcon);
            }}
          >
            {changeIcon ? <Eye /> : <EyeOff />}
          </span>
          <input
            type={changePassword ? "password" : "text"}
            className="input"
            name="confirm_password"
            value={user.confirm_password}
            placeholder="Enter Your confirm Password"
            onChange={HandaleChange}
          ></input>

          <button className="button" onClick={change_Password}>
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangeUserPassword;

