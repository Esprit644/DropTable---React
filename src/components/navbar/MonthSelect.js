import React from 'react';

const MonthSelector = (props) => {

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
  ]

  const currentMonth = new Date().getMonth();

  console.log(months[currentMonth])

  const renderMonths = months.map((month, index) => {
    if (currentMonth === index) {
      return <option key={index} selected="selected">{month}</option>
    } else {
      return <option key={index}>{month}</option>
    }
  })

  return (
    <select id='month-selector' >
      <option placeholder={months[currentMonth]}>{months[currentMonth]}</option>
      {renderMonths}
    </select>
  )
}

export default MonthSelector;
