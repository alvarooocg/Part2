import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = (country) => {
    // console.log('API KEY => ' + api_key)
    
    const request = axios.get(`${baseUrl}${country}&APPID=${api_key}`)
    // console.log('REQUEST => ' + request)
    return request.then(response => response.data)
}

export default { getWeather }