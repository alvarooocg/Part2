import './Result.css'

const Result = ({ filteredCountries, changeFilter }) => {
    const arrayLength = filteredCountries.length
    
    if ( arrayLength == 1 ) {    
        
        return (
            <div>
                {filteredCountries.map((item) => {
                    return (
                        <div>
                            <h1>Country</h1>
                            <h2>{item.name.common}</h2>
                            <br />
                            <p>capital {item.capital}</p>
                            <p>area {item.area}</p>
                            <br />
                            <p><b>languages:</b>
                            <ul class="languages-list">
                                {Object.entries(item.languages).map(([key, value]) =>
                                    <li key={key}>{value}</li>
                                )}
                            </ul>
                            </p>
                            <br />
                            <img src={item.flags.png} alt={item.flags.alt} />
                        </div>
                    )
                    })
                }
                    
            </div>
        )
    } else if ( arrayLength > 1 && arrayLength <= 10 ) {
        
        return (
            <div> 
                {filteredCountries.map(item => 
                    <div class="country-container">    
                        <p>{item.name.common}</p><button type="submit" onClick={() => changeFilter(item.name.common)}>show</button>
                    </div>
                )}
            </div>
        )
    } else if (arrayLength > 0) {
        console.log('theres more than 10 countries')
        return null
    }
        
}

export default Result