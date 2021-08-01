import { type } from "os";
import React, { useState, useReducer } from "react";
import { validate } from "../../../utils/validator";
import "./Input.css";

type Props = {
  label: string;
  id: string;
  element?: string;
  rows?: number;
  type?: string;
  placeholder: string;
  errorMessage: string;
  validators: any;
};

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input = ({
  label,
  id,
  element,
  rows,
  type,
  placeholder,
  errorMessage,
  validators,
}: Props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (event: any) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };
  const inputField =
    element === "textarea" ? (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {inputField}
      {!inputState.isValid && inputState.isTouched && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
