import React, {Fragment} from 'react';
import './FloorPlan.css';
import TableDetail from './TableDetail';

const FloorPlan = (props) => {
    const tables = props.state.diningTables.map((table, index) => {
      console.log(table.capacity)
      console.log(props.selectedPartySize)
      if (table.capacity < parseInt(props.selectedPartySize)) {
        return <div className="table-busy" key={index} >{table.tableName}</div>
      }
        return <div className="table" key={index} >{table.tableName}</div>
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
