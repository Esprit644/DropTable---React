import React, { Component, Fragment } from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan'
import BookingForecast from '../components/BookingForecast';
import NavBar from '../components/navbar/NavBar';
import Days from '../components/navbar/calendar/Days';
import MonthSelect from '../components/navbar/calendar/MonthSelect';
import '../components/navbar/calendar/Calendar.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentDate: new Date().getDate(),
          currentMonth: new Date().getMonth() + 1,
          numOfDaysInMonth: 0,
          selectedDate: '',
          diningTables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          customers: [{ name: "Fred", phone: "07800900900", counter: 0 }],
          bookings: [{ date: "01/01/2019", time: "18:00", party_size: 4 }],
          urls: [{customersURL:'http://localhost:8080/customers'}, {bookingsURL: 'http://localhost:8080/bookings'}, {diningTablesURL: 'http://localhost:8080/diningTables'}]
        }
        this.makeBooking = this.makeBooking.bind(this);
        this.postDetails = this.postDetails.bind(this);
        this.fetchDetails = this.fetchDetails.bind(this);
        this.handleDaySelected = this.handleDaySelected.bind(this)
        this.onMonthSelected = this.onMonthSelected.bind(this)
        this.setNumOfDaysInMonth = this.setNumOfDaysInMonth.bind(this)
        this.handleSingleFigureNum = this.handleSingleFigureNum.bind(this)
    }

    makeBooking(booking) {
        const custDetails = { name: booking.name, phone_number: booking.phone_number }
        const bookDetails = { date: booking.date, time: booking.time, party_size: booking.size }
        // this.setState((prevState) => {
        //     return prevState.bookings.push(bookDetails), prevState.customers.push(custDetails);
        // })
        this.postDetails(this.state.urls[0].customersURL, custDetails, "customers")
        // this.postDetails(this.state.urls[1].bookingsURL, bookDetails, "bookings")
    }

    postDetails(url, body, stateKey ){
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(returnData => this.setState(prevState => {
        return {[`${stateKey}`]: prevState[`${stateKey}`].concat(returnData)}
      }))
    }

    fetchDetails(url, stateKey) {
      fetch(url)
          .then(res => res.json())
          .then(customerData => this.setState({[`${stateKey}`]: customerData._embedded[`${stateKey}`]}
          ))
    }


    componentDidMount(){
        // fetch('http://localhost:8080/customers')
        //     .then(res => res.json())
        //     .then(customerData => this.setState({customers: customerData._embedded.customers}
        //     ))
        // this.fetchDetails(this.state.urls[2].diningTablesURL, "diningTables")
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
    this.setState({selectedDate: newDate})
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
            <Days  numOfDays={this.state.numOfDaysInMonth} currentMonth={this.state.currentMonth} currentDate={this.state.currentDate} onDaySelected={this.handleDaySelected}/>
          </div>
          <h2>current date: {this.state.currentDate}</h2>
          <h2>current month: {this.state.currentMonth}</h2>
          <h2>selected date:{this.state.selectedDate}</h2>
          <h2>num of days in month:{this.state.numOfDaysInMonth}</h2>
        </Fragment>
      )
    }
}

export default Main;

// <FloorPlan state={this.state} />
// <BookingForecast tables={this.state.tables} />
// <NavBar makeBooking={this.makeBooking} />
