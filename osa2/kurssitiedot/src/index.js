import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}
const Content = (props) => {
  return (
    <ul>
      {props.parts.map((part, i) => 
        <li key={i}>{part.name} {part.exercises}</li>  
      )}
    </ul>
  )
}
const Total = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const array = props.parts.map(part => part.exercises)
  return (
    <b>total of {array.reduce(reducer)} exercises</b>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))