import React, { useState, Fragment, useEffect } from 'react';
import './BookingForecast.css';

const BookingForecast = (props) => {

    const [tables, setTable] = useState([])

    useEffect(() => {
        setTable(props.diningTables)
    })
    let tableNumbers = [];
    for (let index = 0; index < tables.length; index++) {
        tableNumbers.push(<p key={index} className="tableName">{index + 1}</p>)
    }

    let times = [];
    for (let index = 12; index < 23; index++) {
        times.push(index +":00");
    }

    // function takes in the array of bookings
    // for each booking
    // take out the time and table number
    // add those number to the css
    // return a div with the css attached
    // send those divs down to the forecast

    const testArray = [
        {
        "time": 41,
        "diningTable": {
          "id": 2
        }
        },
        {
        "time": 25,
        "diningTable": {
          "id": 1
        }
        }]

    function fillTimeSlots(arrayOfBookings){
        const bookedTables = []
        for(const booking of arrayOfBookings){
            const timeStart = booking.time
            const tableNumber = booking.diningTable.id
            const timeStartAdjusted = timeStart
            const tableNumberAdjusted = tableNumber + 2

            const booked = {
                gridColumn: ' span 8 /' + timeStartAdjusted,
                gridRow: 'span 1 /' + tableNumberAdjusted,
                backgroundColor: '#4cd4a0'
               }

            bookedTables.push(<div style={booked}></div>) 

        }
        return bookedTables
    }
    
    const displayTimes = times.map((time, index) => {
        return <div key={index} className="time">{time}</div>
    })

    const numberOfTables = tables.length;

    const forecast = { 
        gridTemplateRows: "3vh repeat(" + numberOfTables + ", 1fr)"
    };

    return (
        <Fragment>
            <div className="view">
                <div className="tableNames">
                    {tableNumbers}
                </div>
                <div className="forecast" style={forecast} >
                    {displayTimes}
                    {fillTimeSlots(testArray)}
                </div>
            </div>
        </Fragment>
    )

}

export default BookingForecast;