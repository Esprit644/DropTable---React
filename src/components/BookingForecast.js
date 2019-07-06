import React, { useState, Fragment, useEffect, useRef } from 'react';
import './BookingForecast.css';

const BookingForecast = (props) => {

    const [tables, setTable] = useState([])

    let tableNumbers = [];
    useEffect(() => {
        setTable(props.diningTables)
    })
    console.log(tables)

    for (let index = 0; index < tables.length; index++) {
        tableNumbers.push(<p key="index" className="tableName">{index + 1}</p>)
    }

    console.log(tableNumbers)

    let times = [];
    for (let index = 0; index < 11; index++) {
        times.push(index);
    }
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