import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPassenger } from '../../services/passengers-api-jsx';
import { useFlightContext } from '../../context/FlightContext';
import './Passenger.css';
import { addpassenger } from '../../services/flights-api';
import { addFlight } from '../../services/passengers-api-jsx';
export default function Passenger()
{
    const {selectedFlight} = useFlightContext();
   console.log("selected Flight",selectedFlight._id);
    const AddPassenger = async (e)=>
    {  
        try{
        e.preventDefault();
        const passenger = {
            firstName: e.target.fname.value, 
            lastName: e.target.lname.value,
            email:e.target.email.value,
            age:e.target.age.value}
            
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
          <div>Add a passenger</div>
         <form onSubmit={AddPassenger} className="passform">
           FirstName: <input type='text' name='fname'></input><br/>
           LastName: <input type='text' name='lname'></input><br/>
           Email: <input type='email' name='email'></input><br/>
           Age : <input type='number' name='age'></input><br/>
           <input type='submit'></input>
         </form>
         </> 
      )
}