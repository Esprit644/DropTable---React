import React, { Component, Fragment } from 'react';
import './Calendar.css';
import MonthSelect from './MonthSelect';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      numOfDaysInMonth: 0,
      calendarDays: []
    }
    this.makeDays = this.makeDays.bind(this)
    this.handleDateClick = this.handleDateClick.bind(this)
  }

  // const calendarDays = []


  componentDidMount() {
    this.makeDays();
  }

  makeDays () {
    const numOfDays = this.props.numOfDays + 1
    console.log(numOfDays)
    let dates = []
    for (let i=1; i<numOfDays; i++){
      dates.push(i);
    }
    let days = dates.map((date, index) => {
      return <button className='day' value={date} key={date} onClick={this.handleDateClick}>{date}</button>
    })

    this.setState({calendarDays: days})
  }

  handleDateClick(event) {
    console.log(event.target.value)
    this.props.updateSelectedDate(event.target.value)
  }

render() {
  return (
    <Fragment>
      <MonthSelect/>
      <div className='calendar'>
        {this.state.calendarDays}
      </div>
    <h1>Hello</h1>
    </Fragment>
  )
}

}

export default Calendar;
