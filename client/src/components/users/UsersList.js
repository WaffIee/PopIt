import React, { Fragment, useEffect, useState } from "react";

import EditUser from "./EditUser";

const UsersList = () => {
  const [users, setUser] = useState([]);

  //delete user function

  const deleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      });

      setUser(users.filter(user => user.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();

      setUser(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Instagram UserName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.instagram_uname}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <EditUser user={user} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UsersList;