// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo';

function App() {


  return (
    <>

      {/* <h1>Exploring React</h1>
      <Person></Person>
      <Developer name="Yeasin" tech="Javascript"></Developer>
      <Developer name="Unknown" tech="Python"></Developer> */}
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Learn Js" isDone={false}></Todo>
      <Todo task="Learn Tailwind" isDone={true}></Todo>
    </>
  )
}

function Person() {
  const age = 21;
  return (
    <div style={{
      border:'2px solid yellow',
      padding:'20px',
      fontWeight:'bolder',
      borderRadius:'20px',
      marginBottom:'10px'
    }}>
      <p>I am Obaidullah Miazi and I am {age} years old</p>
    </div>
  )
}

const style = {
  border:'2px solid green',
  borderRadius:'20px',
  padding:'20px',
  marginBottom:'10px'
}

function Developer({name,tech}){
  // console.log(props)
  return(
    <div style={style}>
      <h1>Developer: {name}</h1>
      <h4>Technology: {tech}</h4>
    </div>
  )
}

export default App
