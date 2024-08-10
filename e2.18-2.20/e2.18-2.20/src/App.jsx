import { useState, useEffect } from 'react'

import './App.css'

import Finder from './components/Finder'
import Message from './components/Message'
import Result from './components/Result'
import Services from './services/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    Services
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.log('ERROR')
      })
  })

  // console.log('length of the countries => ' + countries.length)

  const handleFilterChange = (event) => setFilter(event.target.value)

  // const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <Finder filter={filter} handleFilterChange={handleFilterChange} />
    </>
  )
}

export default App
