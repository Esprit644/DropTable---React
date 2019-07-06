import React, {useState} from 'react';
import './BookingForecast.css';

const BookingForecast = (props) => {
    console.log()
    const [tables, setTable] = useState([props.tables])

    const tableNumbers = tables.map((num, index) => {
        return <p key={index}>{num}</p>
    })

    let times = [];
   
    for (let index = 0; index < 11; index++) {
        times.push(index);
    }

    const displayTimes = times.map((time, index) => {
        return <div key={index} className="time">{time}</div>
    })

    return(
        <div className="forecast">
            {displayTimes}
        </div>
    )

}

export default BookingForecast;