import { useEffect, useState } from 'react'

import {TodoProvider } from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
function App() {
  const [todos,setTodos] = useState([])
  

  const createTodo = (todo)=>{
    setTodos((prev)=>[...prev,todo])
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.todo_id!==id))
  }
  const updateTodo = (id ,newtodo)=>{
   setTodos((prev)=>prev.map((todo)=>(
    todo.todo_id===id? newtodo:todo
   ))) 
  }
  const completeTodo = (id)=>{
    console.log('I am here to update a todo with id ',id);
    setTodos((prev)=>prev.map((todo)=>(
      todo.todo_id===id ? {...todo,completed:!todo.completed}: todo
    )))
  }

  useEffect(()=>{
  
    setTodos(JSON.parse(localStorage.getItem('todos')))
  },[])

  useEffect(()=>{
   
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
  <TodoProvider value={{todos,completeTodo,deleteTodo,createTodo,updateTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.todo_id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App
