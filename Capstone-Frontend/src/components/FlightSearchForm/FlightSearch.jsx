import React,{ useState, useEffect} from "react";
import axios from "axios"
import { getAirports } from "../../services/flights-api";
import { useNavigate } from "react-router-dom";
import './FlightSearch.css'
export default function FlightSearch({onSearch})
{
    const[airports,setAirports] = useState({origins:[],destinations:[]})
    const [origin,setOrigin] = useState('');
    const [destination,setDestination] = useState('');
    const [departureDate,setDepartureDate] = useState('');
    const nav = useNavigate();

    useEffect(()=>{
        getAirports()
        .then(res => setAirports(res.data))
    },[])
    console.log(airports);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (origin && destination) {
          await axios(`http://localhost:3000/flights/search?origin=${origin}&destination=${destination}`)
            .then(res => onSearch(res.data))
            
            
        }
      };

    return(
    <div>
       <form onSubmit ={handleSubmit}>
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
            <input type="number" name="tickets" points="1"/>
        </label><br></br>
        <button onClick={()=>{nav('/search')}}>Search Flights</button>
       </form>
    </div>
    )
}