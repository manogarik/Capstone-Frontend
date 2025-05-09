import React,{ useState, useEffect, useContext} from "react";
import axios from "axios"
import { getAirports, searchFlights } from "../../services/flights-api";
import { useNavigate } from "react-router-dom";
import { useFlightContext } from "../../context/FlightContext.jsx";
import './FlightSearch.css'
export default function FlightSearch()
{
    const[airports,setAirports] = useState({origins:[],destinations:[]})
    const [origin,setOrigin] = useState('');
    const [destination,setDestination] = useState('');
    const [departureDate,setDepartureDate] = useState('');
    const { setFlights } = useFlightContext();
    const nav = useNavigate();

    

    useEffect(()=>{
        getAirports()
        .then(res => setAirports(res.data))
    },[])
    console.log(airports);

    
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if (origin && destination) {
          searchFlights(origin,destination)
            .then(res => setFlights(res.data))
            
          
        }
        
      };

    return(
    <div>
       <form onSubmit ={handleSubmit} >
        <label>
            Origin :
            <select value = {origin} onChange = {(e) => setOrigin(e.target.value)}>
                <option value ="">Select a value</option>
                {airports.origins.map((o)=>
                (
                    <option key={o} value={o}>{o}</option>
                ))}
                
            </select>
        </label><br></br>
        <label>
            Destination :
            <select value = {destination} onChange = {(e) => setDestination(e.target.value)}>
                <option value ="">Select a value</option>
                {airports.destinations.map((o)=>
                (
                    <option key={o} value={o}>{o}</option>
                ))}
                
            </select>
        </label><br></br>
        <label>
            Departure Date :
            <input type='Date' name="Depdate" value={departureDate} onChange={(e)=>setDepartureDate(e.target.value)}/>
        </label><br></br>
        <label>
            No.Of Tickets :
            <input type="number" name="tickets" points="1" required/>
        </label><br></br>
        <button onClick={()=>{nav('/search')}}>Search Flights</button>
       </form>
    </div>
    )
}