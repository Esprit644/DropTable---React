import React from 'react';
import {Link} from 'react-router-dom';

const SwitchToggle = () => (

          <ul>
            <li className="toggles">
                <Link to="/booking-forecast">Booking Forecast</Link>
            </li>
            <li className="toggles">
                <Link to="/floor-plan">Floor Plan</Link>
            </li>
         </ul> 

     
    
)

export default SwitchToggle;             