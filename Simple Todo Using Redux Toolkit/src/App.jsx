import React from 'react'
import { Provider } from 'react-redux'
import { TodoStore } from './App/Store'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
    return (
        <Provider store={TodoStore}>
            <AddTodo/>
            <Todos/>
        </Provider>
    )
}

export default App
