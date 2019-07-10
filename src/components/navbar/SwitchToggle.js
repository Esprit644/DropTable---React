import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SwitchToggle = () => (
  <ul>
    <li className="toggles">
      <Link to="/booking-forecast">View Bookings</Link>
    </li>
    <li className="toggles">
      <Link to="/floor-plan">View Floorplan</Link>
    </li>
  </ul>

  //   <Fragment>
  //     <button
  //       className="toggles"
  //       onClick={<Link to="/booking-forecast">Booking Forecast</Link>}
  //     >
  //       Booking Forecast
  //     </button>

  //     <button
  //       className="toggles"
  //       onClick={<Link to="/floor-plan">Floor Plan</Link>}
  //     >
  //       Floor Plan
  //     </button>
  //   </Fragment>
);

export default SwitchToggle;
