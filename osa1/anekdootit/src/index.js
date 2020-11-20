import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>Has {points[selected]} votes.</p>
      <br/>
      <Button handleClick={() => setSelected(RandomInteger)} text="next anecdote" />
      <Button handleClick={() => updatePoints(points, selected, setPoints)} text="vote"/>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[mostVotes(points)]}</p>
      <p>Has {points[mostVotes(points)]} votes.</p>
    </div>
  )
}
const mostVotes = (points) => {
  let topAnecdote = 0
  let numberOfVotes = 0
  let i
  for (i = 0; i < 6; i++) {
    if (points[i] > numberOfVotes) {
      topAnecdote = i
      numberOfVotes = points[i]
    }
  }
  return (
    topAnecdote
  )
}
const updatePoints = (points, selected, setter) => {
  const copy = { ...points }
  copy[selected] += 1
  setter(copy)
}
const RandomInteger = () => Math.floor(Math.random() * 6)
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
