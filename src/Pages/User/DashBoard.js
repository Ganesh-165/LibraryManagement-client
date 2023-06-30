import React, { useState } from "react";
import Card from "../../Ui/Card";
import classes from "./DashBoard.module.css";
import myImage from "../../Images/dummyuser.jpg";

const DashBoard = () => {
  return (
    <Card>
      <h2>Welcome {username}</h2>
      <div className={classes.image}>
        <img src={myImage} alt="Photo" />
      </div>
      <div className={classes.dashboardcontent}>
        <div>
          <h3>username</h3>
        </div>
        <div>
          <h3>email</h3>
        </div>
        <div>
          <h3>name</h3>
        </div>
        <div>
          <h3>mobile</h3>
        </div>
      </div>
    </Card>
  );
};

export default DashBoard;
