import React, {Fragment} from 'react';
import './FloorPlan.css';
import TableDetail from './TableDetail';

const FloorPlan = (props) => {
    const tables = props.state.diningTables.map((number, index) => {
        return <div className="table" draggable="true" onDragStart="drag(event)" id="diningTable" key={index} >{number.tableName} <TableDetail bookingDetail={props.state.customerDetail}></TableDetail></div>
    })

    function allowDrop(event){
        event.preventDefault();
    }

    function drag (event){
        event.dataTransfer.setData("diningTable", event.target.id);
    }

    function drop (event){
        event.preventDefault();
        const data = event.dataTransfer.getData("diningTable");
        event.target.appendChild(document.getElementById(data));
    }

    return (
        <Fragment>
            <div className="floorplan-container">
                <div className="floorplan" onDrop="drop(event)" onDragOver="allowDrop(event)">
                    {tables}
                 </div>
            </div>

        <TableDetail bookingDetail={props.state.bookings} customerDetail={props.state.customers} />
        </Fragment>
    )
}

export default FloorPlan;