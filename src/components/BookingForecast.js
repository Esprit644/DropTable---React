import React, { useState, Fragment, useEffect } from "react";
import "./BookingForecast.css";

const BookingForecast = props => {
  const [tables, setTable] = useState([]);


  useEffect(() => {
    setTable(props.diningTables);
  }, [props.diningTables]);
  let tableIndexNumbers = [];
  let tableNumbers = [];
  for (let index = 0; index < tables.length; index++) {
    tableNumbers.push(
      <p key={index} className="tableName">
        {index + 1}
      </p>
    );
    tableIndexNumbers.push(index + 1);
  }

  let times = [];
  for (let index = 12; index < 23; index++) {
    times.push(index + ":00");
  }

  const testArray = [
    {
      time: "12:00",
      diningTable: {
        id: 1
      }
    },
    {
      time: "21:00",
      diningTable: {
        id: 2
      }
    },
    {
      time: "17:00",
      diningTable: {
        id: 2
      }
    }
  ];

  function createHandleBookingClick(divValue) {
    return () => {
      console.log(divValue)
      props.updateSelectedBooking(divValue)
    }
  }

  function fillTimeSlots(props) {
    const bookedTables = [];
    for (const booking of props.bookings) {
      const timeStart = booking.time;
      const timeWithoutDashes = timeStart.replace(":", "");
      const timeStartToInteger = parseInt(timeWithoutDashes);
      const timeStartAdjusted = (timeStartToInteger - 1200) / 25 + 9;

      const tableName = booking.diningTable.tableName;
      const tableJustTheNumber = tableName.replace("Table", "");
      const tableNumber = parseInt(tableJustTheNumber);
      const tableNumberAdjusted = tableNumber + 2;
      const customerName = booking.customer.name

      const divValue = {
        tableId: tableJustTheNumber,
        time: timeStart
      }

      const booked = {
        gridColumn: " span 8 /" + timeStartAdjusted,
        gridRow: "span 1 /" + tableNumberAdjusted,
        backgroundColor: "#4cd4a0",
        hover: {
          backgroundColor: "#333"
        }
      };

      const handleBookingClick = createHandleBookingClick(divValue);

      bookedTables.push(<button style={booked} onClick={handleBookingClick}>{customerName}</button>);
    }
    return bookedTables;
  }

  const displayTimes = times.map((time, index) => {
    return (
      <div key={index} className="time">
        {time}
      </div>
    );
  });

  const numberOfTables = tables.length;

  const forecast = {
    gridTemplateRows: "3vh repeat(" + numberOfTables + ", 1fr)"
  };

  return (
    <Fragment>
      <div className="view">
        <div className="tableNames">{tableNumbers}</div>
        <div className="forecast" style={forecast}>
          {displayTimes}
          {fillTimeSlots(props)}
        </div>
      </div>
    </Fragment>
  );
};

export default BookingForecast;
