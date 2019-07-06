import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = (props) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [size, setSize] = useState(0);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        props.makeBooking(makeBookingObject());
        setName('');
        setPhone('');
        setSize(0);
        setDate('');
        setTime('');
        event.target.reset();
    }

    function makeBookingObject() {
        const bookingDetails = {
            name: name,
            phone_number: phone,
            size: size,
            date: date,
            time: time
        }
        return bookingDetails;
    }

    function handleNameChange(event){
        setName(event.target.value)
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
					<div className="form-container"> 

            <div className="form-item">
            	<label for="customer">Customer Name: </label>
            	<input type="text" required className="customer_name" name="customer" placeholder="Name" onChange={handleNameChange} ></input>
            </div>
						<div className="form-item">
							<label for="phone">Phone Number: </label>
            	<input type="text" required className="phone_number" name="phone" placeholder="Phone Number" onChange={handlePhoneChange} ></input>
            </div>
						<div className="form-item">
							<label for="size">Party Size: </label>
							<input type="number" required className="party_size" name="size" placeholder="Party Size" onChange={handleSizeChange} ></input>
            </div>
						<div className="form-item">
							<label for="date">Date: </label>
							<input type="date" required className="date" name="date" onChange={handleDateChange} ></input>
            </div>
						<div className="form-item">
							<label for="time">Time: </label>
							<input type="time" required className="time" name="time" onChange={handleTimeChange} ></input>
            </div>
						<input type="submit" value="Create Booking" className="form-submit-button"></input>

					</div>

        </form>
    )

}

export default BookingForm;