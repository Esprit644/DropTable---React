import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const ViewControl = () => {
  let buttonValue = false;

  function handleCheck(event) {
    console.log("xxxxxxxxxxx");
    console.log("event", buttonValue);

    if (buttonValue === false) {
      console.log("value is false inside If statement ");
      buttonValue = true;
    } else {
      console.log("value is True inside else statement");
      buttonValue = false;
    }
  }
};

export default ViewControl;
