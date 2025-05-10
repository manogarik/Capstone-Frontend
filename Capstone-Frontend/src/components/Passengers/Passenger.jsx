import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPassenger } from '../../services/passengers-api-jsx';
export default function Passenger()
{
    const AddPassenger = (e)=>
    {
        e.preventDefault();
        const passenger = {
            firstName: e.target.name.value, 
            color: e.target.color.value,
            readyToEat: e.target.readyToEat.checked }
            createPassenger(passenger).then(()=>{
              nav('/')
            })
    }
    
    const nav = useNavigate();
    return (
        <>
        <div>Add a passenger</div>
        <form onSubmit={AddPassenger}>
          FirstName: <input type='text' name='name'></input><br/>
          LastName: <input type='text' name='color'></input><br/>
          Email: <input type='checkbox' name='readyToEat'></input><br/>
          Age : <input type='number' name='age'></input><br/>
          <input type='submit'></input>
        </form>
        </>
      )
}