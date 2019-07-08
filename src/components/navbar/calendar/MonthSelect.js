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

      return <option key={index} value={index + 1} >{month}</option>
    
  })

  function handleChange(event) {
    const index = months.indexOf(event.target.value)
    props.onMonthSelected(index)
  }

  return (
    <select id='month-selector' value={props.currentMonth} onChange={handleChange}>
      {renderMonths}
    </select>
  )
}

export default MonthSelect;
