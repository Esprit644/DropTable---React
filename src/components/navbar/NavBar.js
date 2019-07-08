import React from 'react';
import BookingForm from './BookingForm';
import Calendar from './calendar/Calendar';
import './NavBar.css';

const NavBar = (props) => {

    return(

        <nav id="nav-container">
            <div className="calendar-container">
              <Calendar updateSelectedDate={props.selectedDate}/>
            </div>
            <div className="booking-form-container">
                <BookingForm makeBooking={props.makeBooking} customers={props.customers}/>
            </div>
        </nav>

    )

}

export default NavBar;
