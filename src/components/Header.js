import React, { Fragment } from "react";
import SwitchToggle from "../components/navbar/SwitchToggle";
import "./Header.css";

const Header = () => (
  <nav id="header-container">
    <Fragment>
      <div className="title-container">
        <h1> Drop Table Rules</h1>
      </div>

      <div className="button-container">
        <h1>
          <SwitchToggle />
        </h1>
      </div>
    </Fragment>
  </nav>
);

export default Header;
