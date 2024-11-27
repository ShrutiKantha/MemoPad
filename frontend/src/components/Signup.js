import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import signupimg from '../components/assests/logogif.png'


const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    password: "",
    cpassword:""
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name, email, password
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("success", "Account Created Successfully");
    }else{
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
          <img src={signupimg} alt="sign icon" />
        </div>
        <div className="mb-3">
          <h2>Start Your MemoPad Journey!</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            placeholder="name"
            value={credentials.name}
            aria-describedby="emailHelp"
          />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email"
            onChange={onChange}
            value={credentials.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text" style={{marginLeft: '7px'}}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={onChange}
            className="form-control" minLength={5} required
          />
          </div>
          <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="confirm password"
            value={credentials.cpassword}
            onChange={onChange}
            className="form-control" minLength={5} required
          />
        </div>
        <button type="submit">
          SIGN UP
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
