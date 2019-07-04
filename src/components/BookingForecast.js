import React, {useState} from 'react';

const BookingForecast = (props) => {
    console.log()
    const [tables, setTable] = useState([props.tables])

    const tableNumbers = tables.map((num, index) => {
        return <p key={index}>{num}</p>
    })

    return(
        <div>{tableNumbers}</div>
    )

}

export default BookingForecast;