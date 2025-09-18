import Counter from './Counter'
import Cricket from './Cricket';
import Users from './Users';
import Freinds from './Freinds';
import './App.css'
import { Suspense } from 'react';




const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFreinds = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {

  // function handleBtn(){
  //   alert('clicked')
  // }

  // function clickToAdd(num){
  //   const newNum = num +5;
  //   alert(newNum)
  // }

  const freindsPromise = fetchFreinds();

  return (
    <>
      {/* <Suspense fallback={<h1 className='card'>loading...</h1>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense>  */}
      <Suspense fallback={<h1>loading freinds....</h1>}>
        <Freinds freindsPromise={freindsPromise}></Freinds>
      </Suspense>

      {/* <h1>Vite + React</h1> */}
      {/* <Cricket></Cricket> */}
      {/* <button onClick={handleBtn}>Click me</button>
      <button onClick={()=>{clickToAdd(5)}}>Click to Add</button> */}
    </>
  )
}

export default App
