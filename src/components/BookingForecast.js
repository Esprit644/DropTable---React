import React, { useState, Fragment, useEffect } from 'react';
import './BookingForecast.css';

const BookingForecast = (props) => {

    const [tables, setTable] = useState([])
    const [bookings, setBookings] = useState([]);

    const date = '12-07-2019'

    useEffect(() => {
        setTable(props.diningTables)
    })
    let tableIndexNumbers = [];
    let tableNumbers = [];
    for (let index = 0; index < tables.length; index++) {
        tableNumbers.push(<p key={index} className="tableName">{index + 1}</p>);
        tableIndexNumbers.push(index + 1)
    }
    
    tableIndexNumbers.forEach((index) => {
        fetch(`http://localhost:8080/bookings/tableanddate/${index}/${date}`)
            .then(res => res.json())
            .then(bookingData => (bookingData))
    })

    let times = [];
    // for (let index = 0; index < 11; index++) {
    //     times.push(index);
    // }
    const displayTimes = times.map((time, index) => {
        return <div key={index} className="time">{time}</div>
    })

    return (
        <Fragment>
            <div className="view">
                <div className="tableNames">
                    {tableNumbers}
                </div>
                <div className="forecast">
                    {displayTimes}
                </div>
            </div>
        </Fragment>
    )

}

export default BookingForecast;