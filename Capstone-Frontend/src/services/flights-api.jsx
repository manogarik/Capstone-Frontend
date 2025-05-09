import axios from 'axios'
const baseURL = 'http://localhost:3000/flights';

//Get Airports
export const getAirports = async () => {
    const URL = 'http://localhost:3000/flights/airports'
    const response = await axios.get(URL)
    return response
}