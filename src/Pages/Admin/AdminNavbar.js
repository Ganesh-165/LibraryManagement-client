import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./AdminNavBar.module.css";

const AdminNavbar = () => {
  return (
    <Fragment>
      <nav className={classes.adminnav}>
        <div className={classes.navbar}>
          <ul>
            <div className={classes.header}>
              <NavLink to="/admin">UserName</NavLink>
            </div>
            <li>
              <NavLink
                to="/admin/adminBooks"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/editadmindetails"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Edit Admin Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/addadmin"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Add New Admin
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

export default AdminNavbar;
