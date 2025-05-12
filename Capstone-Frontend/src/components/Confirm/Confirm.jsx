import {React, useEffect,useState} from 'react'
import { useFlightContext } from '../../context/FlightContext';
import { getPassengers } from '../../services/flights-api';
import './Confirm.css'
export default function Confirm(){

    const {selectedFlight} = useFlightContext(); 
    const [passengers,setPassengers]=useState([]);

   useEffect(() => {
           
           if (selectedFlight?.passengers) {
             getPassengers(selectedFlight._id).then((res)=>{
               console.log(res.data);
             
           
             setPassengers(res.data.passengers);
             console.log(res.data.passengers)
           })
         }}, [selectedFlight]);
       
    
    console.log(selectedFlight);
    return(
        <>
        <h3>Booking Confirmed</h3>
        <div>
                {selectedFlight && <strong>Flight #{selectedFlight.origin}</strong>}
               
        </div>
        </>
    );
}
