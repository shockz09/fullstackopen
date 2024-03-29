import React from 'react'

//APP.JS


//Header Component for Displaying Heading
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


//Part Component for each part 
const Part = (props) => {
  return (
    <p>
      {props.part}  {props.exercises}
    </p>
  )
}


//Content Component for all the content
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name}     exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name}     exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name}     exercises={props.parts[2].exercises}/>
    </div>
  )
}


//Total Component that displays total number of excercises
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}



const App = () => {

  //course object 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 //returning 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}


//exporting App component
export default App