import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [type, setType] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();
  const onHandleSubmit = async(e) => {
    console.log(type);
    e.preventDefault();
    if(email === 'user@gmail.com' && password === 'user@123' && type==='user'){
      navigate('/user');
    }
    if(email === 'admin@gmail.com' && password === 'admin@123' &&  type==='admin'){
      navigate('/admin');
    }
    setMessage("user loginId:user@gmail.com Password:user@123"+
    "admin loginid:admin@gmail.com Password:admin@123");
    setTimeout(()=>{setMessage("")},20000)
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
      {message}
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
