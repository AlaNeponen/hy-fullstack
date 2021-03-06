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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <thead></thead>
        <tbody>
          <StatisticLine text="good" amount={props.good} />
          <StatisticLine text="neutral" amount={props.neutral} />
          <StatisticLine text="bad" amount={props.bad} />
          <StatisticLine text="all" amount={props.good + props.bad + props.neutral}/>
          <StatisticLine text="average" amount={(props.good - props.bad)/(props.good + props.bad + props.neutral)} />
          <StatisticLine text="positive" amount={(props.good/(props.good + props.bad + props.neutral)) * 100} percentage="%"/>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.amount}{props.percentage}</td>
    </tr>
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

