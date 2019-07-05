import React, {Fragment} from 'react';
import './FloorPlan.css';
import TableDetail from './TableDetail';

const FloorPlan = (props) => {

    const tables = props.state.tables.map((number, index) => {
        return <div className="table" key={index} >{number}</div>
    })

    return (
        <Fragment>
        <div className="floorplan">
            {tables}
        </div>
        <TableDetail bookingDetail={props.state.bookings} customerDetail={props.state.customers} />
        </Fragment>
    )
}

export default FloorPlan;