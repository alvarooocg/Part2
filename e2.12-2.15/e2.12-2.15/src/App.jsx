import { useEffect, useState } from "react"
import axios from 'axios'

import './App.css'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import Add from "./components/Add"
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  })

  const addPerson = (event) => {
    event.preventDefault()
  
    const personObject = {
      id: "" + (persons.length + 1),
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    if(checkName(event.target.value) == false) {
      console.log("Not valid name")
      return
    } else {
      setNewName(event.target.value)
    }
  }

  const checkName = (newName) => {
    const nameExists = persons.some(p => p.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return false
    }
    return true
  }

  const handleNumberChange = (event) => {
    if(checkNumber(event.target.value) == false)  {
      console.log("Not valid number")
      return
    } else {
      setNewNumber(event.target.value)
    }
  }

  const checkNumber = (newNumber) => {
    const numberExists = persons.some(p => p.number === newNumber)
    if (numberExists) {
      alert(`${newNumber} is already added to phonebook`)
      return false 
    }
    return true
  }

  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <Add newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App