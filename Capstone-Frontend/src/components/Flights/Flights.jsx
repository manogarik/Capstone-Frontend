import FlightSearch from "../FlightSearchForm/FlightSearch";
import { useFlightContext } from "../../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";
import {React, useState,useEffect} from 'react';

import './Flights.css'
export default function Flights({props})
{
    const {flights,selectedFlight,setSelectedFlight} = useFlightContext();
    
    const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
    console.log(flights);
    const nav = useNavigate();

    useEffect(() => {
        if (selectedFlight) {
          console.log("selectedFlight updated:", selectedFlight);
        }
      }, [selectedFlight]);
    const handleSubmit = () => {
        if (selectedFlightIndex !== null) {
          const flight = flights[selectedFlightIndex];
          console.log("Setting selected flight:", flight);
          setSelectedFlight(flight);
          nav('/passengers');
        } else {
          console.log('No selected flight');
        }
      };
    
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
          <button className="btn btn-success" onClick={handleSubmit} >
            Book Flight #{selectedFlightIndex + 1}
          </button>
        </div>
      )}
    

      </>
    )
    console.log(flights);
}