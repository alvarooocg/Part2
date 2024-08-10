const Result = ({ filteredCountries, countriesLength }) => {
    if ( countriesLength == 1 ) {    
        <>
            {filteredCountries.map(c => {
                <div>
                    <h2>{c.name.common}</h2>
                    <br />
                    <p>capital {c.capital}</p>
                    <p>area {c.area}</p>
                </div>
                })
            }
                
        </>
    }
}

export default Result