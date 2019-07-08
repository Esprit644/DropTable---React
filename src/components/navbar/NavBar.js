import React from 'react';
import BookingForm from './BookingForm';
import './NavBar.css';
import Days from './calendar/Days';
import MonthSelect from './calendar/MonthSelect';
import './calendar/Calendar.css';


const NavBar = (props) => {

    return(

        <nav id="nav-container">
            <div className="calendar-container">
                <MonthSelect onMonthSelected={props.onMonthSelected} setNumOfDaysInMonth={props.setNumOfDaysInMonth} currentMonth={props.currentMonth}/>
            <div className='calendar'>
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>

                <Days  numOfDays={props.numOfDaysInMonth} currentMonth={props.currentMonth} currentDate={props.currentDate} onDaySelected={props.handleDaySelected}/>
            </div>
            </div>
            <div className="booking-form-container">
                <BookingForm makeBooking={props.makeBooking} customers={props.customers}/>
            </div>
        </nav>

    )

}

export default NavBar;