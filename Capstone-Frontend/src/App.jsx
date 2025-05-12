import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage'
import Flights from './components/Flights/Flights'
import Passenger from './components/Passengers/Passenger.jsx'
import Confirm from './components/Confirm/Confirm.jsx'
import { FlightProvider } from './context/FlightContext.jsx'

import './App.css'


function App() {
 


  return (
    <>
    <div className='homepage-bg'>
    
      <Routes>
        <Route path ='/' element={<Homepage/>}/>
        <Route path ='/search' element={<Flights/>}/>
        <Route path = '/passengers' element = {<Passenger/>}/>
        <Route path = '/confirmation' element ={<Confirm/>}/>
      </Routes>
      
    </div>
    </>
  )
}

export default App
