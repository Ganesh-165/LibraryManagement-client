import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./UserNavbar.module.css";

const UserNavbar = () => {
  return (
    <Fragment>
      <nav className={classes.usernav}>
        <div className={classes.navbar}>
          <ul>
            <div className={classes.header}>
              <NavLink to="/user">UserName</NavLink>
            </div>
            <li>
              <NavLink
                to="/user/allbooks"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/edituserdetails"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Edit User Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/cart"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default UserNavbar;
