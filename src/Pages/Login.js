import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [type, setType] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const onHandleSubmit = async(e) => {
    console.log(type);
    e.preventDefault();
    const response =  await axios.post("https://librarymanagement-fqqg.onrender.com",{email:email,password:password},{
        headers:{'Context-Type':"application/json"},
        withCredentials:true
      })
    if(response.data.success){
      if(response.data.type === 'admin')navigate('/admin');
      if(response.data.type === 'user')navigate('/user');
    }
  };
  const setEmailHandler = (event)=>{
    setEmail(event.target.value);
  }
  const setPasswordHandler = (event)=>{
    setPassword(event.target.value);
  }

  return (
    <div className={classes.login}>
      <h1 className={classes.header}>Login</h1>
      <p>{message}</p>
      <form
        type="submit"
        onSubmit={onHandleSubmit}
        className={classes.loginformcontainer}
      >
        <span>Enter the Email</span>
        <input
          type="email"
          placeholder="Enter Here"
          onChange={setEmailHandler}
        ></input>
        <span>Enter the password</span>
        <input
          type="password"
          placeholder="Enter Here"
          onChange={setPasswordHandler}
        ></input>
        <span>Select the Type</span>
        <select
          value={type}
          className={classes.select}
          onChange={(e) => setType(e.target.value)}
        >
          <option default hidden>
            Choose Here
          </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
        <NavLink to="/register">Register Here!</NavLink>
      </form>
    </div>
  );
}

export default Login;
