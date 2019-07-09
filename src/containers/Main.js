import React, { Component, Fragment } from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan'
import BookingForecast from '../components/BookingForecast';
import NavBar from '../components/navbar/NavBar';
import ErrorPage from "../components/ErrorPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SwitchToggle from '../components/navbar/SwitchToggle';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
          availableTables: [],
          selectedTable: 2,
          selectedPartySize: 0,
          selectedDate: '',
          diningTables: [],
          customers: [],
          bookings: [],
          customerId: 0,
          urls: [
            {customersURL:'http://localhost:8080/customers'},
            {bookingsURL: 'http://localhost:8080/bookings'},
            {diningTablesURL: 'http://localhost:8080/diningTables'}]
        }
        this.updatePartySize = this.updatePartySize.bind(this);
        this.makeBooking = this.makeBooking.bind(this);
        this.postDetails = this.postDetails.bind(this);
        this.fetchDetails = this.fetchDetails.bind(this);
        this.updateSelectedDate = this.updateSelectedDate.bind(this);
        this.updateSelectedTable = this.updateSelectedTable.bind(this);
    }

    makeBooking(booking) {
        const custDetails = { name: booking.name, phoneNumber: booking.phone_number }
        this.postDetails(this.state.urls[0].customersURL, custDetails, "customers")

        // let customerURL = `http://localhost:8080/customers/nameId/${booking.name}`
        // fetch(`http://localhost:8080/customers/nameId/${booking.name}`)
        //   .then(res => res.json())
        //   .then(customerData => this.setState(prevState => {
        //     return {customerId: customerData[0].id}
        //   })
        // )

        const bookingCustomer = []

        this.state.customers.forEach((customer) => {
          if (customer.name === booking.name) {
            console.log(customer)

            bookingCustomer.push(customer)
          }
        })

        const customerURL = bookingCustomer[0]['_links'].self.href
        const tableURL = 'http://localhost:8080/diningTables/1'
        const bookDetails = { date: booking.date, time: booking.time, party_size: booking.size, customer: customerURL, diningTable: tableURL }

        this.postDetails(this.state.urls[1].bookingsURL, bookDetails, "bookings")
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

    updateSelectedTable(newTable) {
      this.setState({selectedTable: newTable})
    }

    updateSelectedDate(newDate) {
      this.setState({selectedDate: newDate})
    }

    updatePartySize(size) {
      this.setState({selectedPartySize: size})
    }

    componentDidMount(){
      this.fetchDetails(this.state.urls[0].customersURL, "customers")
      this.fetchDetails(this.state.urls[2].diningTablesURL, "diningTables")
      this.fetchDetails(this.state.urls[1].bookingsURL, "bookings")
    }

    render() {
      return (
        <Router>
        <Fragment>
            <Switch>
              <Route
                path="/floor-plan"
                render={() => {
                  return <FloorPlan updateSelectedTable={this.updateSelectedTable} state={this.state} />
                }}
              />
              <Route
                path="/booking-forecast"
                render={() => {
                  return <BookingForecast diningTables={this.state.diningTables} />
                }}
              />
              <Route component={ErrorPage}/>
            </Switch>
          <h2>selected table: {this.state.selectedTable}</h2>
          <NavBar
            makeBooking={this.makeBooking}
            customers={this.state.customers}
            updateSelectedDate={this.updateSelectedDate}
            tables={this.state.diningTables}
            selectedTable={this.state.selectedTable}/>

          {/* <FloorPlan state={this.state} />
          <BookingForecast diningTables={this.state.diningTables} /> */}
        </Fragment>
        </Router>

      )
    }
}

export default Main;

// <BookingForecast tables={this.state.diningTables} />
