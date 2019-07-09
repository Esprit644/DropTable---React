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

    function fillTimeSlot(arrayOfBookings){
        bookedTables = []
        for(booking of arrayOfBookings){
            const timeStart = booking.time
            const tableNumber = booking.diningTable.id
            const timeStartAdjusted = timeStart + 4
            const tableNumberAdjusted = tableNumber + 2

            const booked = {
                gridColumn: ' span 8 /' + timeStartAdjusted,
                gridRow: 'span 1 /' + tableNumberAdjusted,
                backgroundColor: '#4cd4a0'
               }

              bookedTables.push(<div style={booked}></div>) 

        }
    }
    
        const timeStart = 21;
        const tableNumber = 3;

       
       

        
        
    


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
                    {bookedTables}
                </div>
            </div>
        </Fragment>
    )

}

export default BookingForecast;