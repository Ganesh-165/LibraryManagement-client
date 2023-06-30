import React, { useState } from "react";
import Card from "../../Ui/Card";
import classes from "./DashBoard.module.css";
import myImage from "../../Images/dummyuser.jpg";
import { useEffect } from "react";
import axios from "axios";

const DashBoard = () => {
  const [name,setName] = useState("");
  const [username, setusername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('https://librarymanagement-fqqg.onrender.com/dashboard');
      console.log(response);
      setusername(response.data.name.username);
      setEmail(response.data.name.email);
      setName(response.data.name.name);
      setMobile(response.data.name.mobileno);
    };
    fetchData();
  },[])
  return (
    <Card>
      <h2>Welcome {username}</h2>
      <div className={classes.image}>
        <img src={myImage} alt="Photo" />
      </div>
      <div className={classes.dashboardcontent}>
        <div>
          <h3>{username}</h3>
        </div>
        <div>
          <h3>{email}</h3>
        </div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <h3>{mobile}</h3>
        </div>
      </div>
    </Card>
  );
};

export default DashBoard;
