import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forget_Password() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const forget = async () => {
    try {
      if(!user.email){
        alert('Please enter your mail')
      }else{
      const response = await axios.post(
        'http://localhost:5858/api/users/sendresetPassword',
        {
          email: user.email
        },
        { withCredentials: true }
      );
      console.log(response);
      alert('Mail sent successfully; this is only valid for 10 minutes');
      navigate('/login'); 
    }
    } catch (err) {
      console.log(err);
      alert('Something went wrong');
    }
    setUser({
      email: ''
    });
  };

  return (
    <>
      <div className="Forget-container">
        <div className="Forget-f">
          <input
            type='text'
            name='email'
            placeholder='Enter your email'
            value={user.email}
            onChange={handleChange}
          />
          <button onClick={forget} className='btn-edit'>
            Forget Password
          </button>
        </div>
      </div>
    </>
  );
}

export default Forget_Password;
