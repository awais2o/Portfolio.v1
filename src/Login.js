import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let datas = { username: username, password: password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      ...datas,
    };
    axios
      .post("http://localhost:5000/user/login", options)
      .then((response) => {
        console.log(response.headers.authorization);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
