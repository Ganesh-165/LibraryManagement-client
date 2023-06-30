import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import classes from "./Register.module.css";
import axios from "axios";
import Input from "./Input";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    name:"",
    mobileno:"",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Here",
      errorMessage:
        "Username should be 3-8 characters and shouldn't include any special character!",
      label: "Enter the Username",
      pattern: "^[A-Za-z0-9]{3,8}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Here",
      errorMessage: "It should be a valid email address!",
      label: "Enter the Email",
      required: true,
    },
    {
      id: 3,
      name: "name",
      type: "text",
      placeholder: "Enter Here",
      errorMessage: "name should be 3-10 characters and shouldn't include any special character!",
      pattern:"^[A-Za-z0-9]{3,10}$",
      label: "Enter the Name",
      required: true,
    },
    {
      id: 4,
      name: "mobileno",
      type: "number",
      placeholder: "Enter Here",
      errorMessage: "Enter Valid 10 Digit Mobile Number",
      pattern:"^[0-9]{10}$",
      label: "Enter the Mobile Number",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Enter Here",
      errorMessage:
        "Password should be 5-12 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Enter the Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter Here",
      errorMessage: "Passwords don't match!",
      label: "Enter the Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [message,setMessage] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response =  await axios.post("https://librarymanagement-fqqg.onrender.com/register",{email:values.email,password:values.password,name:values.name,username:values.username,mobileno:values.mobileno,type:"user"},{
      headers:{'Context-Type':"application/json"},
      withCredentials:true
    })
    if(response.data.success){
      navigate('/');
    }
    else{
      setMessage(response.data.message);
      setTimeout(()=>{setMessage(null)},6000)
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className={classes.header}>Register</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit} className={classes.registerform}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        <button type="submit">Submit</button>
        <NavLink to='..'>Login Here!</NavLink>
      </form>
    </div>
  );
};

export default Register;
