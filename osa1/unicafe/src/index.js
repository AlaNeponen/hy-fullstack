import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics text="good" amount={good} />
      <Statistics text="neutral" amount={neutral} />
      <Statistics text="bad" amount={bad} />
      <Statistics text="all" amount={good + bad + neutral}/>
      <Statistics text="average" amount={(good - bad)/(good + bad + neutral)} />
      <Statistics text="positive" amount={(good/(good + bad + neutral)) * 100} percentage="%"/>
    </div>
  )
}
const Statistics = (props) => {
  return (
    <div>
      <p>{props.text} {props.amount}{props.percentage}</p>
    </div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)

