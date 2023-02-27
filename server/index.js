const express = require("express");
const app = express(); //take the express lib an run it
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req a body and get a json data

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });

// //create API CRUD 

// //create a User

app.post("/users", async (req, res) => {
  try {
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { email } = req.body;
    const { instagram_uname } = req.body;
    const { gender } = req.body;


    const newUser = await pool.query(
      "INSERT INTO users (first_name,last_name,email,instagram_uname,gender) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [first_name,last_name,email,instagram_uname,gender]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Display all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// search a user

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      id
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update data od a user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { email } = req.body;
    const { instagram_uname } = req.body;
    const { gender } = req.body;

    
    const updateUser = await pool.query(
      "UPDATE users SET first_name = $1, last_name=$2, email=$3,instagram_uname=$4, gender=$5 WHERE id = $6",
      [first_name,last_name,email,instagram_uname,gender,id]
    );

    res.json("User was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a user

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id
    ]);
    res.json("User was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});
