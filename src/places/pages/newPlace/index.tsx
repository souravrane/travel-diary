import React from "react";
import Input from "../../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/utils/validator";
import "./NewPlace.css";

export const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        id="1"
        label="Title"
        type="text"
        placeholder="Input element"
        errorMessage={"Please enter a valid title"}
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};
