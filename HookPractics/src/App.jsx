import { useCallback, useState } from 'react'
import Todos from './Components/Todos'

function App() {

  const [count ,setCount] = useState(0);
  const [todos,setTodos] = useState([]);

  const increment = ()=>{
    setCount(count+1);
  }

  const addTodo = useCallback(()=>{
    setTodos((prev)=>[...prev,'new Entry'])
  },[setTodos])
  

  return (
    <>
      <Todos todos={todos} addTodo={addTodo}/>
      <hr/>
      <div>
        count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
