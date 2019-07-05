import React from 'react';
import BookingForm from './BookingForm';

const NavBar = (props) => {

    return(
        <BookingForm makeBooking={props.makeBooking} />
    )

}

export default NavBar;