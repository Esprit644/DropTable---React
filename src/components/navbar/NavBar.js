import React from 'react';
import BookingForm from './BookingForm';
import Calendar from './calendar/Calendar';
import './NavBar.css';
import Days from './calendar/Days';
import MonthSelect from './calendar/MonthSelect';
import './calendar/Calendar.css';
import SwitchToggle from './SwitchToggle.js';


const NavBar = (props) => {

    return(

        <nav id="nav-container">
            <div className="calendar-container">
							<SwitchToggle/>
              <Calendar updateSelectedDate={props.updateSelectedDate}/>
            </div>
            <div className="booking-form-container">
                <BookingForm makeBooking={props.makeBooking} customers={props.customers}/>
            </div>
        </nav>

    )

}

export default NavBar;
