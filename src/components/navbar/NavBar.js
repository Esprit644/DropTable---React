import React from 'react';
import BookingForm from './BookingForm';

const NavBar = (props) => {

    return(
        <BookingForm makeBooking={props.makeBooking} customers={props.customers} />
    )

}

export default NavBar;