import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.jsx'
import FlightSearch from './components/FlightSearchForm/FlightSearch.jsx'

import './App.css'

function App() {
  const [flights,setFlights] = useState([])


  return (
    <>
    <div className='homepage-bg'>
    <Header/>
    <h2>Search Flights</h2>
    <FlightSearch />
      
      
    </div>
    </>
  )
}

export default App
