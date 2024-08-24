const Weather = ({ weather }) => {
    // console.log('WEATHER => ' + weather)

    if(weather !== null){
        return (
            <div>
                <h1>Weather in {weather.name}</h1>
                <p>temperature {(weather.main.temp - 273).toFixed(2)} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather.description} />
                <p>wind {weather.wind.speed} m/s</p>
            </div>
        )   
    } else {
        return null
    }
}

export default Weather