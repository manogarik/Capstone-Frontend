import FlightSearch from "../FlightSearchForm/FlightSearch";
import { useFlightContext } from "../../context/FlightContext.jsx";
import {React, useState} from 'react';

import './Flights.css'
export default function Flights({props})
{
    const {flights} = useFlightContext();
    console.log(flights);
    return (
        <>
      
      <div>
        <p>Select  a Flight from the list of flights displayed</p>
        {flights.map(flight => (
          <div id = "flights" key={flight._id}>
            FlightNumber :{flight.flightNumber} -  Origin :{flight.origin}  Destination :{flight.destination} DepartureDate : {flight.departureDate}
          </div>
        ))}
      </div>
      </>
    )
    console.log(flights);
}