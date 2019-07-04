import React, { useState } from 'react';

const BookingForm = () => {

    const [booking, setBooking] = useState({
        name: '', 
        phone_number: '',
        size: 0,
        date: '',
        time: ''})

    function createBooking(event) {
        event.preventDefault()
        const newBooking = makeBooking(event)
        console.log('there',newBooking)
        setBooking(newBooking)
        console.log(booking)
    }

    function makeBooking(event) {
        const bookingDetails = {
            name: event.target.customer.value,
            phone_number: event.target.phone.value,
            size: event.target.size.value,
            date: event.target.date.value,
            time: event.target.time.value
        }
        console.log('here',bookingDetails)
        return bookingDetails;
    }

    return (
        <form className="booking_form" onSubmit={createBooking}>
            <input type="text" required className="customer_name" name="customer" placeholder="Name"></input>
            <input type="text" required className="phone_number" name="phone" placeholder="Phone Number"></input>
            <input type="number" required className="party_size" name="size" placeholder="Party Size"></input>
            <input type="date" required className="date" name="date" ></input>
            <input type="time" required className="time" name="time" ></input>
            <input type="submit" value="Create Booking"></input>
        </form>
    )

}

export default BookingForm;