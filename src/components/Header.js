import React, { Fragment } from "react";
import SwitchToggle from "../components/navbar/SwitchToggle";
import "./Header.css";

const Header = () => (
  <nav id="header-container">
    <Fragment>

    <div className="button-container">
        <div class="buttons">
          <SwitchToggle />
        </div>
      </div>

      <div className="title-container">
        <h1> DropTables</h1>
      </div>
      <div className="icon-container">
       <i class="fas fa-utensils fa-2x"></i>
      </div>


    </Fragment>
  </nav>
);

export default Header;
