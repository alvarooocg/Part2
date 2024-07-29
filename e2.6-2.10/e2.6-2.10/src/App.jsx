import { useState } from "react"
import './App.css'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567',
      id: 1
     }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
                    value={newName}
                    onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
                    value={newNumber}
                    onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

const Persons = ({ persons }) => <>{persons.map((p) => <p key={p.id}>{p.name}   {p.number}</p>)}</>


export default App