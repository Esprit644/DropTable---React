import React, { Component, Fragment } from 'react'
import Days from './Days';
import MonthSelect from './MonthSelect';
import './Calendar.css';
import './Days.css';


class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      numOfDaysInMonth: 0,
      selectedDate: ''
    }
    this.handleDaySelected = this.handleDaySelected.bind(this)
    this.onMonthSelected = this.onMonthSelected.bind(this)
    this.setNumOfDaysInMonth = this.setNumOfDaysInMonth.bind(this)
    this.handleSingleFigureNum = this.handleSingleFigureNum.bind(this)
  }

  componentDidMount(){
    this.setNumOfDaysInMonth(this.state.currentMonth);
  }

  setCurrentMonth() {
    this.setState({currentMonth: new Date().getMonth()})
  }

  setNumOfDaysInMonth(monthNum) {
    const numDays = 32 - new Date(2019, monthNum, 32).getDate();
    this.setState({numOfDaysInMonth: numDays})
  }

  handleDaySelected(day, month){
    const newDay = this.handleSingleFigureNum(day)
    const newMonth = this.handleSingleFigureNum(month)
    const newDate = `${newDay}/${newMonth}/2019`
    this.props.updateSelectedDate(newDate)
    // this.setState({selectedDate: newDate})
  }

  handleSingleFigureNum(num) {
    return (num < 10) ? '0' + num.toString() : num.toString();
  }

  onMonthSelected(month) {
    this.setState({currentMonth: month + 1})
    this.setNumOfDaysInMonth(month)
  }

  render() {
    return (
      <Fragment>
      <MonthSelect onMonthSelected={this.onMonthSelected} setNumOfDaysInMonth={this.setNumOfDaysInMonth} currentMonth={this.state.currentMonth}/>
      <div className='calendar'>
      <p>Mon</p>
      <p>Tue</p>
      <p>Wed</p>
      <p>Thu</p>
      <p>Fri</p>
      <p>Sat</p>
      <p>Sun</p>

      <Days  numOfDays={this.state.numOfDaysInMonth} currentMonth={this.state.currentMonth} currentDate={this.state.currentDate} onDaySelected={this.handleDaySelected}/>
      </div>

      </Fragment>
    )
  }
}

export default Calendar;

// <h2>current date: {this.state.currentDate}</h2>
// <h2>current month: {this.state.currentMonth}</h2>
// <h2>selected date:{this.state.selectedDate}</h2>
// <h2>num of days in month:{this.state.numOfDaysInMonth}</h2>
