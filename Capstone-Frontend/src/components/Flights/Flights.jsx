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
        <p>The Flights fetched are:</p>
        {flights.map(flight => (
          <div id = "flights" key={flight._id}>
            {flight.flightNumber} - {flight.origin} → {flight.destination}
          </div>
        ))}
      </div>
      </>
    )
    console.log(flights);
}