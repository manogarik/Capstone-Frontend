import FlightSearch from "../FlightSearchForm/FlightSearch";
import { useFlightContext } from "../../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from 'react';

import './Flights.css';
import Header from "../Header/Header.jsx";

export default function Flights() {
  const { flights, selectedFlight, setSelectedFlight } = useFlightContext();
  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (selectedFlight) {
      console.log("selectedFlight updated:", selectedFlight);
    }
  }, [selectedFlight]);

  //function to update the selectedflight
  const handleSubmit = () => {
    if (selectedFlightIndex !== null) {
      const flight = flights[selectedFlightIndex];
      setSelectedFlight(flight);
      nav('/passengers');
    } else {
      console.log('No selected flight');
    }
  };

  return (
    <>
      <Header />
      <div className="flights-wrapper container mt-4">
        <h4 className="mb-3 text-primary text-center">Select a Flight</h4>
        {flights.map((flight, index) => (
          <div className="card mb-3 p-3 shadow-sm flight-card" key={index}>
            <label className="form-check-label d-flex align-items-start">
              <input
                type="radio"
                className="form-check-input me-3"
                name="selectedFlight"
                value={index}
                checked={selectedFlightIndex === index}
                onChange={() => setSelectedFlightIndex(index)}
              />
              <div>
                <strong>Flight #{flight.flightNumber}</strong>
                <p className="mb-1"><strong>Origin:</strong> {flight.origin}</p>
                <p className="mb-1"><strong>Departure:</strong> {flight.destination}</p>
                <p className="mb-1"><strong>Date:</strong> {flight.departureDate}</p>
                <p className="mb-1"><strong>Status:</strong> {flight.status}</p>
              </div>
            </label>
          </div>
        ))}

        {selectedFlightIndex !== null && (
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleSubmit}>
              Book Flight #{selectedFlightIndex + 1}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
