import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nevbar from './components/Nevbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nevbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]" >
      <div className="addTodo">
        <h2 className='text-lg font-bold'> Add a Todo</h2>
        <input type="text" />
        <button className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-6'>Add</button>
      </div>
          <h2 className='text-lg font-bold'> Your Todos</h2>
        <div className="todos">
        <div className="todo flex">
          <div className="text"></div>
          <div className="buttons">
           <button>Edit</button>
           <button>Delete</button>
          </div>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default App
