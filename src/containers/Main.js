import React, { Component, Fragment } from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan'
import BookingForecast from '../components/BookingForecast';
import NavBar from '../components/navbar/NavBar';
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwitchToggle from '../components/navbar/SwitchToggle';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: '',
      diningTables: [],
      customers: [{ name: "Fred", phone: "07800900900", counter: 0 }],
      bookings: [{ date: "01/01/2019", time: "18:00", party_size: 4 }],
      urls: [{ customersURL: 'http://localhost:8080/customers' }, { bookingsURL: 'http://localhost:8080/bookings' }, { diningTablesURL: 'http://localhost:8080/diningTables' }]
    }
    this.makeBooking = this.makeBooking.bind(this);
    this.postDetails = this.postDetails.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
  }

  makeBooking(booking) {
    const custDetails = { name: booking.name, phoneNumber: booking.phone_number }
    const bookDetails = { date: booking.date, time: booking.time, party_size: booking.size }
    this.setState((prevState) => {
      return { bookings: prevState.bookings.concat(bookDetails) }
    })
    if (booking.href == '') {
      this.postDetails(this.state.urls[0].customersURL, custDetails, "customers")
    }
  }

  postDetails(url, body, stateKey) {
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
        return { [`${stateKey}`]: prevState[`${stateKey}`].concat(returnData) }
      }))
  }

  fetchDetails(url, stateKey) {
    fetch(url)
      .then(res => res.json())
      .then(customerData => this.setState({ [`${stateKey}`]: customerData._embedded[`${stateKey}`] }
      ))
  }

  updateSelectedDate(newDate) {
    this.setState({ selectedDate: newDate })
  }


  componentDidMount() {
    this.fetchDetails(this.state.urls[0].customersURL, "customers")
    this.fetchDetails(this.state.urls[2].diningTablesURL, "diningTables")
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              path="/floor-plan"
              render={() => {
                return <FloorPlan state={this.state} />
              }}
            />
            <Route
              path="/booking-forecast"
              render={() => {
                return <BookingForecast diningTables={this.state.diningTables} />
              }}
            />
            <Route component={ErrorPage} />
          </Switch>
          <NavBar
            makeBooking={this.makeBooking}
            customers={this.state.customers}
            updateSelectedDate={this.updateSelectedDate} />
          {/* <FloorPlan state={this.state} />
          <BookingForecast diningTables={this.state.diningTables} /> */}
        </Fragment>
      </Router>

    )
  }
}

export default Main;
