import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Detect from "./components/detect";
import Home from "./components/home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  var props = {
    user: user,
    setLoginUser: setLoginUser,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/detect"
            element={
              user && user._id ? (
                <Detect details={props} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
