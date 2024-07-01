import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nevbar from './components/Nevbar'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const[showFinished , setShowFinished] = useState(true)



useEffect(()=>{
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
},[])


  const saveToLS = (params) =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished =(e) => {
    setShowFinished(!showFinished)
  }
  

  const handleEdit = (e,id) =>{
    let t = todos.filter(item=> item.id === id)
    setTodo(t[0].todo)

    let newTodos  = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()

  }

  const handleDelete =(e, id)=>{
    let newTodos  = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = ()=>{
    setTodos([...todos, {todo, id:uuidv4(), isCompleted : false}])
    setTodo(" ")
    saveToLS()
   

  }




  const handleChange = (e)=>{
    setTodo(e.target.value)
console.log("hello ", e.target.value)
  }





  const handleCheckbox = (e) => {
    
    let id = e.target.name
   
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos) 
    
    saveToLS()
  }
  





  return (
    <>
    <Nevbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]" >
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'> Add a Todo</h2>
        <input onChange={handleChange} value={todo}  type="text"  className='w-1/2'/>
 
        {/* <input onChange={handleChange} value={todo}  type="text"  className='w-1/2'/> */}

        <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 disabled:bg-violet-700 text-white rounded-md mx-6'>Add</button>
      </div>
      <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> show finished
          <h2 className='text-lg font-bold'> Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todos to display </div>}
          
          {todos.map(item=>{

      return(showFinished || !item.isCompleted) && <div key = {item.id} className="todo flex w-1/4 my-3 justify-between">
        <div className='flex gap-5'>
        <input name = {item.id} onChange={handleCheckbox} checked = {item.isCompleted} type="checkbox" id="" />
        
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full">
           <button onClick= {(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'>Edit</button>
           <button onClick={(e)=> {handleDelete(e, item.id)}}className='bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-md mx-1'>Delete</button>
          </div>
        </div>
      })}
        </div>
      
       
      </div>
    </>
  )
}

export default App
