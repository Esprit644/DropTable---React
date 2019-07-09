import React from 'react';
import BookingForm from './BookingForm';
import Calendar from './calendar/Calendar';
import './NavBar.css';
import Days from './calendar/Days';
import MonthSelect from './calendar/MonthSelect';
import './calendar/Calendar.css';


const NavBar = (props) => {

    return(

        <nav id="nav-container">
            <div className="calendar-container">
              <Calendar updateSelectedDate={props.updateSelectedDate}/>
            </div>
            <div className="booking-form-container">
                <BookingForm
                  makeBooking={props.makeBooking}
                  customers={props.customers}
                  updatePartySize={props.updatePartySize}
                  numOfTables={props.tables.length}/>
            </div>
        </nav>

    )

}

export default NavBar;
