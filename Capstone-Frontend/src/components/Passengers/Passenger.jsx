import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Passenger()
{
    const AddPassenger = (e)=>
    {
        
    }
    const nav = useNavigate();
    return (
        <>
        <div>Add a passenger</div>
        <form onSubmit={AddPassenger}>
          Name: <input type='text' name='name'></input><br/>
          Color: <input type='text' name='color'></input><br/>
          Ready to Eat: <input type='checkbox' name='readyToEat'></input><br/>
          <input type='submit'></input>
        </form>
        </>
      )
}