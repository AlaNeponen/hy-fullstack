import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} assigments={exercises1} />
      <Content part={part2} assigments={exercises2} />
      <Content part={part3} assigments={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.assigments}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercies {props.total}
      </p>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))