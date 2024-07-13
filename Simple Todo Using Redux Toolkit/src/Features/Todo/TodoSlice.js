import { createSlice, nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload//Try action.payload.todo
            }
            state.todos.push(todo)    
        },
        deleteTodo:(state,action)=>{state.todos = state.todos.filter((todo)=>(
            todo.id!==action.payload  // Try action.payload.id
        ))},
        updateTodo:(state,action)=>{
          
            
            state.todos.map((todo)=>(
                todo.id===action.payload.todo? todo.text=action.payload.string:todo
            ))
        },
    }
})

export const TodoSliceReducer = TodoSlice.reducer
export const {addTodo,deleteTodo,updateTodo} = TodoSlice.actions