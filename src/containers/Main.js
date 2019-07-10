import React, { Component, Fragment } from "react";
import FloorPlan from "../components/FloorPlan/FloorPlan";
import BookingForecast from "../components/BookingForecast";
import NavBar from "../components/navbar/NavBar";
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableTables: [],
      selectedTable: 1,
      selectedPartySize: 0,
      selectedDate: '',
      diningTables: [],
      selectedBooking: 3,
      customers: [],
      bookings: [],
      todaysBookings: [],
      customerId: 0,
      urls: [
        { customersURL: "http://localhost:8080/customers" },
        { bookingsURL: "http://localhost:8080/bookings" },
        { diningTablesURL: "http://localhost:8080/diningTables" }
      ]
    };
    this.updatePartySize = this.updatePartySize.bind(this);
    this.makeBooking = this.makeBooking.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);
    this.postDetails = this.postDetails.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
    this.updateSelectedDate = this.updateSelectedDate.bind(this);
    this.updateSelectedTable = this.updateSelectedTable.bind(this);
    this.postDetails = this.postDetails.bind(this);
    this.fillTimeSlots = this.fillTimeSlots.bind(this);

  }




  makeBooking(booking) {

    let bookingCustomerURL = '';

    const custDetails = {
      name: booking.name,
      phoneNumber: booking.phone_number
    };


    if (booking.href == "") {
      fetch(this.state.urls[0].customersURL, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(custDetails)
      })
        .then(res => res.json())
        .then(newCustomer => this.setState((prevState) => {
          bookingCustomerURL = newCustomer['_links'].self.href
          return { customers: prevState.customers.concat(newCustomer) }
        }, () => {
          this.postBooking(booking, newCustomer._links.self.href);
        }))
    } else {
      this.postBooking(booking, booking.href)
    }
  }

  postBooking(booking, customer) {

    const tableURL = `http://localhost:8080/diningTables/${this.state.selectedTable}`;
    const bookDetails = {
      date: booking.date,
      time: booking.time,
      partySize: booking.size,
      customer: customer,
      diningTable: tableURL
    };
    console.log("bookDetails", bookDetails)
    fetch(this.state.urls[1].bookingsURL, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookDetails)
    })
      .then(res => res.json())
      .then(newBooking => this.setState((prevState) => {
        return { bookings: prevState.bookings.concat(newBooking) }
      }, () => {
        this.fetchDetails(this.state.urls[1].bookingsURL, "bookings");
      }))
  }

  postDetails(url, body, stateKey) {
    fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(returnData =>
        this.setState(prevState => {
          return {
            [`${stateKey}`]: prevState[`${stateKey}`].concat(returnData)
          };
        })
      );
  }

  fetchDetails(url, stateKey, callback) {
    fetch(url)
      .then(res => res.json())
      .then(customerData =>
        this.setState({
          [`${stateKey}`]: customerData._embedded[`${stateKey}`]
        }, () => {
          if (callback) callback()
        })
      );
  }

  deleteBooking() {
    const deleteURL = `http://localhost:8080/bookings/${this.state.selectedBooking}`
    fetch(deleteURL, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          this.fetchDetails(this.state.urls[1].bookingsURL, "bookings")
        }
      })
  }

  updateSelectedTable(newTable) {
    this.setState({ selectedTable: newTable });
  }

  updateSelectedDate(newDate) {
    this.setState({ selectedDate: newDate });
    this.setState({ todaysBookings: [] });
    this.state.bookings.forEach(booking => {
      if (this.state.selectedDate == booking.date) {
        this.setState(prevState => {
          return { todaysBookings: prevState.todaysBookings.concat(booking) };
        });
      }
    });
  }

  updatePartySize(size) {
    this.setState({ selectedPartySize: size });
  }

  fillTimeSlots() {
    const bookedTables = [];
    for (const booking of this.state.todaysBookings) {
      const timeStart = booking.time;
      const timeWithoutDashes = timeStart.replace(":", "");
      const timeStartToInteger = parseInt(timeWithoutDashes);
      const timeStartAdjusted = (timeStartToInteger - 1200) / 25 + 9;

      const tableName = booking.diningTable.tableName;
      const tableJustTheNumber = tableName.replace("Table", "");
      const tableNumber = parseInt(tableJustTheNumber);
      const tableNumberAdjusted = tableNumber + 2;

      const booked = {
        gridColumn: " span 8 /" + timeStartAdjusted,
        gridRow: "span 1 /" + tableNumberAdjusted,
        backgroundColor: "#4cd4a0",
        hover: {
          backgroundColor: "#333"
        }
      };

      bookedTables.push(<div style={booked} />);
    }
    return bookedTables;
  }

  componentDidMount() {
    this.fetchDetails(this.state.urls[0].customersURL, "customers");
    this.fetchDetails(this.state.urls[2].diningTablesURL, "diningTables");
    this.fetchDetails(this.state.urls[1].bookingsURL, "bookings", () => {
      this.updateSelectedDate(new Date().getDate())
    });
    this.fillTimeSlots();
    
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route
              path="/floor-plan"
              render={() => {
                return (
                  <FloorPlan
                    updateSelectedTable={this.updateSelectedTable}
                    selectedPartySize={this.state.selectedPartySize}
                    state={this.state}
                  />
                );
              }}
            />
            <Route
              path="/booking-forecast"
              render={() => {
                return (
                  <BookingForecast
                    selectedDate={this.state.selectedDate}
                    diningTables={this.state.diningTables}
                    bookings={this.state.todaysBookings}
                    fillTimeSlots={this.fillTimeSlots}
                  />
                );
              }}
            />
            <Route component={ErrorPage} />
          </Switch>
          <NavBar
            makeBooking={this.makeBooking}
            deleteBooking={this.deleteBooking}
            customers={this.state.customers}
            updateSelectedDate={this.updateSelectedDate}
            tables={this.state.diningTables}
            selectedTable={this.state.selectedTable}
            updatePartySize={this.updatePartySize}
          />
        </Fragment>
      </Router>
    );
  }
}

export default Main;

// <h2>selected table: {this.state.selectedTable}</h2>
