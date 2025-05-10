import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPassenger } from '../../services/passengers-api-jsx';
import { useFlightContext } from '../../context/FlightContext';
import './Passenger.css';
import { addpassenger } from '../../services/flights-api';
import { addFlight } from '../../services/passengers-api-jsx';
export default function Passenger()
{
    const {selectedFlight} = useFlightContext();
    const [FormData,setFormData] = useState({
        fname : '',
        lname : '',
        email:'',
        age:''

    })
    function handleChange(e){
        setFormData({
            ...FormData,
            [e.target.name] : e.target.value
        })
    }
   console.log("selected Flight",selectedFlight._id);
    const AddPassenger = async (e)=>
    {  
        try{
        e.preventDefault();
        const passenger = {
            firstName: FormData.fname ,
            lastName: FormData.lname,
            email:FormData.email,
            age:FormData.age}
            
            createPassenger(passenger).then((res)=>{
              console.log(res.data)
              const passengerId = res.data._id;
             
            addpassenger(selectedFlight._id,passengerId).then((res)=>
            {
                console.log(res.data);
            })

            
             
        })
        }catch(err){
            console.log('Booking error')
        }
    }
    
    
    const nav = useNavigate();
    return (
         

         <>
         <div>
            <h2>More details on flight</h2>
            <ul>
                <li><strong>Flight Number</strong>   {selectedFlight.flightNumber}</li>
                <li><strong>Origin Airport</strong>   {selectedFlight.origin}</li>
                <li><strong>Destination Airport</strong>   {selectedFlight.destination}</li>
                <li><strong>Departure Date</strong>   {selectedFlight.departureDate}</li>
                <li><strong>Departure Time</strong>   {selectedFlight.departureTime}</li>
                <li><strong>Arrival Time</strong>   {selectedFlight.arrivalTime}</li>
                <li><strong>Price</strong>   ${selectedFlight.price}</li>
                <li><strong>Status</strong>   {selectedFlight.status}</li>
            </ul>
         </div>
          <div>Add a passenger</div>
         <form onSubmit={AddPassenger} className="passform">
           FirstName: <input type='text' name='fname' value ={FormData.fname} onChange ={handleChange}></input><br/>
           LastName: <input type='text' name='lname' value ={FormData.lname} onChange={handleChange}></input><br/>
           Email: <input type='email' name='email' value={FormData.email} onChange={handleChange}></input><br/>
           Age : <input type='number' name='age' value={FormData.age} onChange={handleChange}></input><br/>
           <input type='submit'></input>
         </form>
         </> 
      )
}