import './Result.css'
import ServicesWeather from '../services/weather'

import { useState, useEffect } from 'react'
import Weather from './Weather'

const Info = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (country) {
            ServicesWeather
                .getWeather(country.capital)
                .then((weather) => setWeather(weather))
        }
    }, [country])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <br />
            <div>
                <b>languages:</b>
                <ul className="languages-list">
                    {Object.values(country.languages).map((lang) => 
                        <li key={lang}>{lang}</li>
                    )}
                </ul>
            </div>     
            <img src={country.flags.png} alt={country.flags.alt} />
            <Weather weather={weather} />
        </div>
    )
}

export default Info
