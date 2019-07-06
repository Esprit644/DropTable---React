import React, { Component, Fragment } from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan'
import BookingForecast from '../components/BookingForecast';
import NavBar from '../components/navbar/NavBar';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diningTables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            customers: [{ name: "Fred", phone: "07800900900", counter: 0 }],
            bookings: [{ date: "01/01/2019", time: "18:00", party_size: 4 }],
            urls: [{customersURL:'http://localhost:8080/customers'}, {bookingsURL: 'http://localhost:8080/bookings'}, {diningTablesURL: 'http://localhost:8080/diningTables'}]
        }
        this.makeBooking = this.makeBooking.bind(this);
        this.postDetails = this.postDetails.bind(this);
        this.fetchDetails = this.fetchDetails.bind(this);
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
        fetch('http://localhost:8080/customers')
            .then(res => res.json())
            .then(customerData => this.setState({customers: customerData._embedded.customers}
            ))
        this.fetchDetails(this.state.urls[2].diningTablesURL, "diningTables")
    }

    render() {
        return (
            <Fragment>
                <BookingForecast diningTables={this.state.diningTables} />
                <NavBar makeBooking={this.makeBooking} />
            </Fragment>
        )
    }
}

export default Main;
