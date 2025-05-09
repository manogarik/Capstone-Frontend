import FlightSearch from "../FlightSearchForm/FlightSearch";
import { useFlightContext } from "../../context/FlightContext.jsx";
import {React, useState} from 'react';

import './Flights.css'
export default function Flights({props})
{
    const {flights} = useFlightContext();
    const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
    console.log(flights);
    return (
        <>
      
      <div>
        <p>Select  a Flight from the list of flights displayed</p>
        {flights.map((flight,index)=> (
          <label key={index}>
            <input type="radio" name="selectedFlight" value={index} checked={selectedFlightIndex === index} onChange={()=>setSelectedFlightIndex(index)}/>
            <span>
                <strong>{flight.flightNumber}</strong> <br></br>
                <small >
                  Origin :{flight.origin}
                  Departure:{flight.departure}
                  DepartureDate: {flight.departureDate}
                </small>
              </span>
            </label>
        ))}
      </div>
      {selectedFlightIndex !== null && (
        <div className="mt-3">
          <button className="btn btn-success" onChange={handlesubmit}>
            Book Flight #{selectedFlightIndex + 1}
          </button>
        </div>
      )}
    

      </>
    )
    console.log(flights);
}