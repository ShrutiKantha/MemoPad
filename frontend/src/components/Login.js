import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginimg from '../components/assests/loginimg.png'

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("success", "Logged in Successfully");
      navigate("/");
    } else {
      props.showAlert("danger", "Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
   <div className="wrapper">
     <div className="formContent">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <img src={loginimg} alt="login image" />
        </div>
        <div className="mb-3">
          <h2>Welcome back!</h2>
        </div>
       
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            placeholder="email"
            value={credentials.email}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="password"
            className="form-control"
          />
        </div>
        <button type="submit">
          SIGN IN
        </button>
      </form>
    </div>
   </div>
  );
};

export default Login;
