import React from 'react'
// import './Days.css'
const Days = (props) => {

  const firstDay = new Date(2019, props.currentMonth).getDay() + 1
  const numOfDays = props.numOfDays + 1
  let days = []

  const firstDayStyle = {
    // border: '1px solid black',
    // gridColumnStart: '{firstDay}'

  }

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
    const today = document.getElementById('today')
  }

  return (
    days
  )
}

export default Days
