
import React, { useState, useEffect } from 'react'
import personService from './services/person'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    let names = persons.map(person => person.name)
    if (!names.includes(newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
        })
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
    
  }
  const deletePerson = (id) => {
    const name = persons.find(p => p.id === id).name
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .deletePerson(id)

      setPersons(persons.filter(p => p.id !== id))
    }

  } 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} deletePerson={deletePerson}/>
    </div>
  )

}
const DisplayPersons = (props) => {
  return (
    <ul>
      {props.persons.map(person => 
        <DisplayPerson id={person.id} key={person.id} name={person.name} number={person.number} deletePerson={props.deletePerson}/>
      )}
    </ul>
  )
}
const DisplayPerson = (props) => {
  return (
    <p>{props.name} {props.number} <button onClick={() => props.deletePerson(props.id)}>Delete number</button></p>
  )
}
const NewPersonForm = (props) => {
  return (
    <div>
    <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
  )
}
export default App
