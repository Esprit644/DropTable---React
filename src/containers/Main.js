import React, {Component, Fragment} from 'react';
import FloorPlan from '../components/FloorPlan/FloorPlan'
import BookingForecast from '../components/BookingForecast';
import NavBar from '../components/navbar/NavBar';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            tables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            customers: [{name: "Fred", phone: "07800900900", counter: 0}],
            bookings: [{date: "01/01/2019", time: "18:00", party_size: 4}]
        }
    }

    render(){
        return (
            <Fragment>
            <FloorPlan state={this.state}/>
            <BookingForecast tables={this.state.tables} />
            <NavBar />
            </Fragment>
        )
    }
}

export default Main;