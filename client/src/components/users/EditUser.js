import React, { Fragment, useState } from "react";

const EditUser = ({ user }) => {
  const [id, setId] = useState(user.id);
  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [instagram_uname, setInstagram_uname] = useState(user.instagram_uname);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);



  //edit  function

  const updateUser = async e => {
    e.preventDefault();
    try {
      const body = { id,first_name, last_name,instagram_uname,email,gender };
      const response = await fetch(
        `http://localhost:5000/users/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
    <button
      type="button"
      class="btn btn-warning"
      data-toggle="modal"
      data-target={`#id${user.id}`}
    >
      Edit
    </button>

    <div
      class="modal"
      id={`id${user.id}`}
      onClick={() => setFirst_name(user.first_name)}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit User</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              onClick={() => setFirst_name(user.first_name)}
            >
              &times;
            </button>
          </div>

          <div class="modal-body">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={first_name}
              onChange={e => setFirst_name(e.target.value)}
            />
          </div>



          <div class="modal-body">
          <label>Last Name</label>

            <input
              type="text"
              className="form-control"
              value={last_name}
              onChange={e => setLast_name(e.target.value)}
            />
          </div>


          <div class="modal-body">
          <label>Instagram username</label>

            <input
              type="text"
              className="form-control"
              value={instagram_uname}
              onChange={e => setInstagram_uname(e.target.value)}
            />
          </div>

          <div class="modal-body">
          <label>Email</label>

            <input
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="modal-body">

          <label>Gender</label>

            <input
              type="text"
              className="form-control"
              value={gender}
              onChange={e => setGender(e.target.value)}
            />
          </div>


          

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              data-dismiss="modal"
              onClick={e => updateUser(e)}
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              onClick={e => updateUser(e)}
            >              
              Close
            </button>
          </div>
        </div>
      </div>
    </div>


  </Fragment>
  );
};

export default EditUser;