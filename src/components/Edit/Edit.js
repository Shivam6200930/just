import { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEdit = async () => {
    console.log(user);
    const id = localStorage.getItem('user_id');
    try {
      if (!user.name) {
        alert('Name is required');  // Add a validation alert or handle it appropriately
        return;
      }
      const response = await axios.put(`http://localhost:5858/api/users/edit/${id}`, { user_name: user.name }, { withCredentials: true });
      console.log(response);
      alert('Updated successfully!!');
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="edit-container">
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          value={user.name}
          onChange={handleChange}
        />
        <button onClick={handleEdit} className='btn-edit'>Edit</button>
      </div>
    </>
  );
}

export default Edit;
