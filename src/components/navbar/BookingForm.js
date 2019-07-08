import React, { useState, Fragment, useEffect } from 'react';
import './BookingForm.css'

const BookingForm = (props) => {

    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [size, setSize] = useState(0);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [filteredCustomers, setfilteredCustomers] = useState([]);

    useEffect(() => {
        if(!customerName) {
            setfilteredCustomers([])
            return
        }
        fetch(`http://localhost:8080/customers/partialname/${customerName}`)
        .then(res => res.json())
        .then(data => setfilteredCustomers(data))
    },[customerName])

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


    
    const searchOptions = filteredCustomers.map((customer, index) => {
        return <p key={index} onClick={populateForm}>{customer.name}</p>
    })
    let foundName = '';
    let foundNumber = '';


    function populateForm(event) {
        props.customers.forEach(customer => {
            if(customer.name === event.target.innerHTML){
                foundName = customer.name
            }
        })
        console.log(event.target.innerHTML)
    }

    function handleNameChange(event) {
        setCustomerName(event.target.value)
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value)
    }

    function handleSizeChange(event) {
        setSize(event.target.value)
    }

    function handleDateChange(event) {
        setDate(event.target.value)
    }

    function handleTimeChange(event) {
        setTime(event.target.value)
    }


    return (
        <form className="booking_form" onSubmit={handleSubmit}>
            <div className="form-container">

                <div className="form-item">
                    <label htmlFor="customer">Customer Name: </label>
                    <input type="text" required className="customer_name" name="customer" placeholder="Name" onChange={handleNameChange} defaultValue={foundName}></input>
                    <div>{searchOptions}</div>
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Phone Number: </label>
                    <input type="text" required className="phone_number" name="phone" placeholder="Phone Number" onChange={handlePhoneChange} ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="size">Party Size: </label>
                    <input type="number" required className="party_size" name="size" placeholder="Party Size" onChange={handleSizeChange} ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="date">Date: </label>
                    <input type="date" required className="date" name="date" onChange={handleDateChange} ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="time">Time: </label>
                    <input type="time" required className="time" name="time" onChange={handleTimeChange} ></input>
                </div>
                <input type="submit" value="Create Booking" className="form-submit-button"></input>

            </div>

        </form>
    )

}

export default BookingForm;