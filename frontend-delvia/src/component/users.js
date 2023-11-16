import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateUser from './createUser'

const Users = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    email: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
    },
  });

  const url = 'https://fakestoreapi.com/users';


  const createUser = () => {
    axios({
      method: 'POST',
      url: url,
      data: newUser,
    })
      .then((res) => {
        setData((prevData) => [...prevData, res.data]);
        setNewUser({
          email: '',
          name: {
            firstname: '',
            lastname: '',
          },
          address: {
            city: '',
          },
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <h2 className='text-center mb-4'>User List</h2>
        
        <button onClick={createUser} className='btn btn-success'>
          Add New User
        </button>
        
       
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, i) => (
                <tr key={i}>
                  <td>{user.email}</td>
                  <td>{user.name.firstname}</td>
                  <td>{user.name.lastname}</td>
                  <td>{user.address.city}</td>
                  <td>
                    <button>update</button>
                    <button>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateUser 
      createUser={createUser}
      />
    </>
  );
};

export default Users;