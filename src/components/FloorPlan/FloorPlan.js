import React, {Fragment} from 'react';
import './FloorPlan.css';
import TableDetail from './TableDetail';

const FloorPlan = (props) => {
    const tables = props.state.diningTables.map((number, index) => {
        return <div className="table" key={index} >{number.tableName} <TableDetail bookingDetail={props.state.customerDetail}></TableDetail></div>
    })

    return (
        <Fragment>
            <div className="floorplan-container">
                <div className="floorplan">
                    {tables}
                 </div>
            </div>

        <TableDetail bookingDetail={props.state.bookings} customerDetail={props.state.customers} />
        </Fragment>
    )
}

export default FloorPlan;