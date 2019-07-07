import React from 'react';

const MonthSelect = (props) => {

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

  const renderMonths = months.map((month, index) => {
    if (props.currentMonth === index +1) {
      return <option key={index} selected="selected">{month}</option>
    } else {
      return <option key={index}>{month}</option>
    }
  })

  function handleChange(event) {
    const index = months.indexOf(event.target.value)
    props.onMonthSelected(index)
  }

  return (
    <select id='month-selector' onChange={handleChange}>
      {renderMonths}
    </select>
  )
}

export default MonthSelect;
