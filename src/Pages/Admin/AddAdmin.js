import React from "react";
import classes from "./AddAdmin.module.css";
import Button from "../../Ui/Button";
import Card from "../../Ui/Card";

const AddAdmin = () => {
  return (
    <Card>
      <div className={classes.addadmindetails}>
        <div className={classes.header}>
          <h2>Add Admin</h2>
        </div>
        <form className={classes.admindetails}>
          <span>Enter Email</span>
          <input type="email" placeholder="Enter Here"></input>
          <span>Enter Name</span>
          <input type="text" placeholder="Enter Here"></input>
          <span>Enter UserName</span>
          <input type="text" placeholder="Enter Here"></input>
          <span>Enter MobileNo</span>
          <input type="number" placeholder="Enter Here"></input>
          <span>Enter Password</span>
          <input type="password" placeholder="Enter Here"></input>
          <span>Enter Conform Password</span>
          <input type="password" placeholder="Enter Here"></input>
          <div className={classes.addadmindetailsbutton}>
            <Button name="Add" />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AddAdmin;
