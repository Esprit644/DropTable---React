import React from 'react'
import './Days.css'
const Days = (props) => {

  console.log(props.numOfDays)

  const numOfDays = props.numOfDays + 1
  let days = []

  for (let date=1; date<numOfDays; date++){
    if (date === props.currentDate && new Date().getMonth()+1 == props.currentMonth) {
      days.push(
        <button className='today' value={date} key={date} onClick={handleClick}>{date}</button>
      )
    } else {
      days.push(
        <button className='day' value={date} key={date} onClick={handleClick}>{date}</button>
      );
    }
  }

  function handleClick(event) {
    props.onDaySelected(event.target.value, props.currentMonth)
  }

  return (
    days
  )
}

export default Days
