import React from 'react';
import './TableDetail.css';

const TableDetail = (props) => {

    const details = props.customerDetail.map((detail, index) => {
        return <li className="custDetail" key={index}><p>{detail.name} </p> <p> {detail.phone}</p></li>
    })

    return (
        <ul>
            {details}
        </ul>
    )

}

export default TableDetail;