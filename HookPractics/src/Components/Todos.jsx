import { memo } from "react";

function Todos({todos,addTodo}){
console.log('Child Render');
return(
    <>
    <h2>My Todos</h2>
    {todos.map((todo,index)=>{
        return <p key={index}>{todo+index}</p>
    })}
    <button onClick={addTodo}> Add todo</button>
    </>
)
}

export default memo(Todos)