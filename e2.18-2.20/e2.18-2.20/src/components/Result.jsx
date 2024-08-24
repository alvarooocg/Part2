import './Result.css'
import Info from './Info.jsx'


const Result = ({ countries, setCountries }) => {
    const arrayLength = countries.length
    
    if ( arrayLength === 1 ) {    
        return <Info country={countries[0]} />
    } else if ( arrayLength > 1 && arrayLength <= 10 ) {
        
        return (
            <ul> 
                {countries.map(country => 
                    <li className="country-container" key={country.name.common}>    
                        <p>{country.name.common}</p><button type="submit" onClick={() => setCountries([country])}>show</button>
                    </li>
                )}
            </ul>
        )
    } else if (arrayLength > 10) {
        console.log('theres more than 10 countries')
        return
    }
        
}

export default Result