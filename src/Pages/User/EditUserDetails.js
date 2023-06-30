import React from "react";
import classes from './EditUserDetails.module.css'
import Card from "../../Ui/Card";
import Button from "../../Ui/Button";
import { useState } from "react";

const EditUserDetails = () => {
  const [newname,setNewName] = useState('');
  const [newusername,setNewUserName] = useState('');
  const [mobileno,setMobileNumber] = useState('');
  const [password,setPassword] = useState('');
  const [confPassword,setconfPassword] = useState('');
  const [message,setMessage] = useState('');
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    if(password !== confPassword){
      setMessage('The Password and conform password must be same');
      setTimeout(()=>setMessage(''),3000);
    }else{
      setMessage('Updated Sucssesfully');
      setMobileNumber('');
      setNewName('');
      setNewUserName('');
      setPassword('');
      setconfPassword('');
      setTimeout(()=>setMessage(''),3000);
    }
  }
  return (
    <Card>
      <div className={classes.edituserdetails}>
        <div className={classes.header}>
          <h2>Edit User Details</h2>
          <p>{message}</p>
        </div>
        <form className={classes.updateuserdetails} onSubmit={onSubmitHandler}>
        <span>Enter NewName</span>
          <input type="text" placeholder="Enter Here" value={newname} onChange={(e)=>setNewName(e.target.value)}></input>
          <span>Enter UserName</span>
          <input type="text" placeholder="Enter Here" value={newusername} onChange={(e)=>setNewUserName(e.target.value)}></input>
          <span>Enter New MobileNo</span>
          <input type="number" placeholder="Enter Here" value={mobileno} onChange={(e)=>setMobileNumber(e.target.value)}></input>
          <span>Enter New Password</span>
          <input type="password" placeholder="Enter Here"value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <span>Enter Conform Password</span>
          <input type="password" placeholder="Enter Here"value={confPassword} onChange={(e)=>setconfPassword(e.target.value)}></input>
          <div className={classes.edituserdetailsbutton}>
            <Button name="Update" />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditUserDetails;
