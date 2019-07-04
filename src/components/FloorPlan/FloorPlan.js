import React from 'react';

const FloorPlan = () => {

    const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function tables() {
        tableNumbers.map((number, index) => {
            return <div className={index}>{number}</div>
        })

    }

    return (
        <div className="floorplan">
            {tables}
        </div>
    )
}

export default FloorPlan;