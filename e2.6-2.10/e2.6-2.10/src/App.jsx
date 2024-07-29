import { useState } from "react"
import './App.css'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
     }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
  
    const personObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    if(checkName(event.target.value) == false) {
      console.log("No valido")
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
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

const Persons = ({ persons }) => <>{persons.map((p) => <p key={p.id}>{p.name}</p>)}</>


export default App