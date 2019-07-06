import React, { useState } from 'react';

const BookingForm = (props) => {

    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [size, setSize] = useState(0);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        props.makeBooking(makeBookingObject());
        setCustomerName('');
        setPhone('');
        setSize(0);
        setDate('');
        setTime('');
        event.target.reset();
    }

    function makeBookingObject() {
        const bookingDetails = {
            name: customerName,
            phone_number: phone,
            size: size,
            date: date,
            time: time
        }
        return bookingDetails;
    }

    const filteredName = props.customers.filter(customer => {
        return customer.name.toLowerCase().includes(customerName.toLowerCase())
    })



    function handleNameChange(event){
        setCustomerName(event.target.value)
    }

    function handlePhoneChange(event){
        setPhone(event.target.value)
    }

    function handleSizeChange(event){
        setSize(event.target.value)
    }

    function handleDateChange(event){
        setDate(event.target.value)
    }

    function handleTimeChange(event){
        setTime(event.target.value)
    }

    return (
        <form className="booking_form" onSubmit={handleSubmit}>
            <input type="text" required className="customer_name" name="customer" placeholder="Name" onChange={handleNameChange} ></input>
            <input type="text" required className="phone_number" name="phone" placeholder="Phone Number" onChange={handlePhoneChange} ></input>
            <input type="number" required className="party_size" name="size" placeholder="Party Size" onChange={handleSizeChange} ></input>
            <input type="date" required className="date" name="date" onChange={handleDateChange} ></input>
            <input type="time" required className="time" name="time" onChange={handleTimeChange} ></input>
            <input type="submit" value="Create Booking"></input>
        </form>
    )

}

export default BookingForm;