import React, { Fragment, useState } from "react";

const AddUser = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [instagram_uname, setInstagram_uname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { first_name,last_name,instagram_uname,email,gender };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Users List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          value={first_name}
          onChange={e => setFirst_name(e.target.value)}
        />
<label>Last Name</label>
    <input
          type="text"
          className="form-control"
          value={last_name}
          onChange={e => setLast_name(e.target.value)}
        />   
        <label>Instagram userName</label>

        <input
          type="text"
          className="form-control"
          value={instagram_uname}
          onChange={e => setInstagram_uname(e.target.value)}
        />  
        <label>Email</label>

        <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Gender</label>

<input
          type="text"
          className="form-control"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />


        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default AddUser;