import React, {Fragment} from 'react';
import './FloorPlan.css';
import TableDetail from './TableDetail';

const FloorPlan = (props) => {

  function handleClick(event) {
    props.updateSelectedTable(event.target.value)
  }

    const tables = props.state.diningTables.map((table, index) => {
      if (table.capacity < parseInt(props.selectedPartySize)) {
        return <button className="table-busy" key={index} value={index+1} onClick={handleClick}>{table.tableName}</button>
      }
        return <button className="table" key={index} value={index+1} onClick={handleClick}>{table.tableName}</button>
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
