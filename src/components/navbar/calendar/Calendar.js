import React, { Component, Fragment } from 'react'

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
