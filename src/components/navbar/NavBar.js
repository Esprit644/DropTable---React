import React from "react";
import BookingForm from "./BookingForm";
import Calendar from "./calendar/Calendar";
import "./NavBar.css";
import Days from "./calendar/Days";
import MonthSelect from "./calendar/MonthSelect";
import "./calendar/Calendar.css";
import SwitchToggle from "./SwitchToggle.js";
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = props => {
  //   let buttonValue = false;

  //   function handleCheck(event) {
  //     console.log("xxxxxxxxxxx");
  //     console.log("event", buttonValue);

  //     if (buttonValue === false) {
  //       console.log("value is false inside If statement ");
  //       buttonValue = true;
  //     } else {
  //       console.log("value is True inside else statement");
  //       buttonValue = false;
  //     }
  return (
          <nav id="nav-container">
            <div className="calendar-container">
			  <SwitchToggle/>
              <Calendar updateSelectedDate={props.updateSelectedDate}/>
            </div>
            <div className="booking-form-container">
                <BookingForm
                  updateSelectedTable={props.updateSelectedTable}
                  updateState={props.updateState}
                  selectedBooking={props.selectedBooking}
                  makeBooking={props.makeBooking}
                  deleteBooking={props.deleteBooking}
                  customers={props.customers}
                  updatePartySize={props.updatePartySize}
                  numOfTables={props.tables.length}
                  selectedTable={props.selectedTable}/>
            </div>
        </nav>

  );
};

export default NavBar;
