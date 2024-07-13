import { useContext,createContext } from "react";

export const todoContext = createContext({
    todos:[{
    }],
    completeTodo : (todo_id)=>{},
    updateTodo : (todo_id,todo)=>{},
    deleteTodo : (todo_id)=>{},
    createTodo : (todo)=>{}
})

export const useTodo = ()=>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider;