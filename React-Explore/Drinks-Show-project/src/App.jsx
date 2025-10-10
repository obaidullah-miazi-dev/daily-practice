
import './App.css'
import Drinks from './components/Drinks/Drinks'
import { Suspense } from 'react'

function App() {

  
  const drinksPromise = fetch('../public/Drinks.json').then(res => res.json())


  return (
    <>
      <h1 className='font-black m-5 md:ml-28 mb-12 border-b-2 border-amber-400 pb-3 inline-block w-[240px] mx-auto  text-5xl'>Bottle list</h1>
      <Suspense fallback={<span className="loading loading-ring text-yellow-500 mt-48 block mx-auto w-60"></span>}>
        <Drinks drinksPromise={drinksPromise}></Drinks>
      </Suspense>
    </>
  )
}

export default App
