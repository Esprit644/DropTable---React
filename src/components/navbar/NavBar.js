import React from 'react';
import BookingForm from './BookingForm';
import './NavBar.css';

const NavBar = (props) => {

    return(
        <nav id="nav-container">
            <BookingForm makeBooking={props.makeBooking} />
        </nav>
    )

}

export default NavBar;