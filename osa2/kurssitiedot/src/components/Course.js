import React from 'react'

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

export default Course

