import { createContext, useState, useContext } from 'react';

// Create the context
const FlightContext = createContext();


export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  );
};


export const useFlightContext = () => useContext(FlightContext);