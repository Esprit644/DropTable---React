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

    // function fillTimeSlot(){

    // }

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
                <div className="forecast" style={forecast}>
                    {displayTimes}
                </div>
            </div>
        </Fragment>
    )

}

export default BookingForecast;