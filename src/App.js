import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import './App.css'
import Register from "./Pages/Register";
import AdminHome from "./Pages/Admin/AdminHome";
import UserHome from "./Pages/User/UserHome";
import DashBoard from "./Pages/User/DashBoard";
import AllBooks from './Pages/User/AllBooks'
import EditUserDetails from "./Pages/User/EditUserDetails";
import Cart from "./Pages/User/Cart";
import EditAdminDetails from "./Pages/Admin/EditAdminDetails";
import AdminBooks from "./Pages/Admin/AdminBooks";
import AddAdmin from "./Pages/Admin/AddAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/admin" element={<AdminHome/>}>
          <Route index element={<DashBoard/>}></Route>
          <Route path="editadmindetails" element={<EditAdminDetails/>}></Route>
          <Route path="adminBooks" element={<AdminBooks/>}></Route>
          <Route path="addadmin" element={<AddAdmin/>}></Route>
        </Route>
        <Route path="/user" element={<UserHome/>}>
            <Route index element={<DashBoard/>}></Route>
            <Route path="allbooks" element={<AllBooks/>}></Route>
            <Route path="edituserdetails" element={<EditUserDetails/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
