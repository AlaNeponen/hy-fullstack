import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123566' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let names = persons.map(person => person.name)
    if (!names.includes(newName)) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    } else {
      window.alert(`${newName} is already added to phonebook`)
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
      <DisplayPersons persons={persons}/>
    </div>
  )

}
const DisplayPersons = (props) => {
  return (
    <ul>
      {props.persons.map(person => 
        <DisplayPerson key={person.name} name={person.name} number={person.number}/>
      )}
    </ul>
  )
}
const DisplayPerson = (props) => {
  return (
    <p>{props.name} {props.number}</p>
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
