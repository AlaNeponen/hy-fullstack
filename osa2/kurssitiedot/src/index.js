import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
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
    <h2>{props.title}</h2>
  )
}
const Content = (props) => {
  return (
    <ul>
      {props.parts.map(part => 
        <li key={part.id}>{part.name} {part.exercises}</li>  
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