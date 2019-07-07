import React from 'react'
import './Days.css'
const Days = (props) => {

  console.log(props.numOfDays)

  const numOfDays = props.numOfDays + 1
  let days = []

  for (let date=1; date<numOfDays; date++){
    days.push(
      <button className='day' value={date} key={date} onClick={handleClick}>{date}</button>
    );
  }

  function handleClick(event) {
    props.onDaySelected(event.target.value, props.currentMonth)
  }

  return (
    days
  )
}

export default Days
