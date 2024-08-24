import { useState, useEffect } from 'react'

import './App.css'

import Finder from './components/Finder'
import Message from './components/Message'
import Result from './components/Result'
import ServicesCountries from './services/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // console.log('API KEY => ' + api_key)

  useEffect(() => {
    if (filter) {
      ServicesCountries
        .getAll()
        .then((countries) => {
          const filteredCountries = countries.filter((country) => 
            country.name.common.toLowerCase().includes(filter.toLowerCase())
          )
          setCountries(filteredCountries)
        })
    } else {
      setCountries([])
    }
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="main-container">
      <h1>Finder: </h1>
      <Finder filter={filter} handleFilterChange={handleFilterChange} />
      <Message arrayLength={countries.length} />
      <Result countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App
