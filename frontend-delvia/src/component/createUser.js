import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser(props) {
  const [inputData, setInputData] = useState({
    email: "",
    name: {
        firstname: "",
        lastname: "",
    },
    address : {
        city: "",
    }
    
  });


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        props.createUser({
            ...inputData
        })
        console.log('Response Data:', response.data);
        alert("New User Added!");
        navigate('/');
      }
    
    catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
      <form>
        <div className="login">
          <h2>Add New User</h2>
          <div className="login-inputs">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
            />
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="first name"
              onChange={(e) => setInputData({ ...inputData, firstname: e.target.value })}
            />
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="last name"
              onChange={(e) => setInputData({ ...inputData, lastname: e.target.value })}
            />
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="city"
              onChange={(e) => setInputData({ ...inputData, city: e.target.value })}
            />

            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateUser;