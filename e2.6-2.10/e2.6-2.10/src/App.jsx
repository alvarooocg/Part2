import { useState } from "react"
import './App.css'
import Persons from "./Persons"
import Filter from "./Filter"
import Add from "./Add"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
  
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
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