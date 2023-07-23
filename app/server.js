const express = require("express");
require("./database/db.js");
const User = require("./database/user_db.js");
const cors = require("cors");
const CryptoJS = require("crypto-js");

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (password == null || username == null)
      res.send({ message: "Invalid Input!" });
    else if (user) {
      user.password = decrypt(user.password);
      if (password === user.password)
        res.send({ message: "Login Successfull", user: user });
      else res.send({ message: "Wrong password !!!" });
    } else {
      res.send({ message: "No User found" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  console.log(req.body);
  User.findOne({ username: username }, (err, user) => {
    if (user) {
      res.send({ message: "Username already exists !!!" });
    } else {
      const user = new User({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: encrypt(password),
      });

      user.save((err) => {
        if (err) res.send(err);
        else res.send({ message: "Sign Up Successfull" });
      });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
