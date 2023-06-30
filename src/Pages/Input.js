import React from "react";
import { useState } from "react";
import classes from './Input.module.css'

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={classes.inputs}>
        <span>{label}</span>
        <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
        />
        <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
