import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import Card from "../../Ui/Card";
import Button from "../../Ui/Button";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../Store/Books";
import { increase } from "../../Store/AllBooks";

const Cart = () => {
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartHandler = (item) => {
    dispatch(removeItem(item));
    dispatch(increase(item))
  };
  return (
    <Card>
      {data.length > 0 ? (
        <Fragment>
          <div className={classes.tableheader}>
            <div className={classes.headeritem}>Id</div>
            <div className={classes.headeritem}>Book Name</div>
            <div className={classes.headeritem}>Author Name</div>
            <div className={classes.headeritem}>No of Copies</div>
            <div className={classes.headeritem}>Year</div>
            <div className={classes.headeritem}>Add to Cart</div>
          </div>
          <table>
            <tbody>
              {data.map((item) => (
                <tr className={classes.tablerow} key={item.id}>
                  <td className={classes.tabledata}>{item.id}</td>
                  <td className={classes.tabledata}>{item.title}</td>
                  <td className={classes.tabledata}>{item.author}</td>
                  <td className={classes.tabledata}>{item.noofcopies}</td>
                  <td className={classes.tabledata}>{item.year}</td>
                  <td className={classes.tabledata}>
                    <span onClick={() => cartHandler(item.id)}>
                      <Button name="Remove" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={classes.footer}>
            <NavLink to="#" className={classes.navbutton}>
              <Button name="Request to Get Book" />
            </NavLink>
          </div>
        </Fragment>
      ):<h2>No Items In Cart</h2>
      }
    </Card>
  );
};

export default Cart;
