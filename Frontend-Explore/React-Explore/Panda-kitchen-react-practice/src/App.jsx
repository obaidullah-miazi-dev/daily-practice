import Foods from './Components/Foods/Foods'
import './App.css'
import { Suspense } from 'react'

function App() {

  const foodsPromise= fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
  .then(res => res.json())

  return (
    <div>
      
      <Suspense fallback={<p><span class="loading loading-spinner text-warning w-80 block mx-auto mt-70"></span></p>}>
        <Foods foodsPromise={foodsPromise}></Foods>
      </Suspense>
    </div>
  )
}

export default App
