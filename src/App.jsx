import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nevbar from './components/Nevbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nevbar/>
      <div className="container mx-auto" >
        <div className="bg-red-600">
          hey iam red
        </div>
      </div>
    </>
  )
}

export default App
