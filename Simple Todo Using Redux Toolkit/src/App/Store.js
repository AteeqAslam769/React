import {configureStore} from '@reduxjs/toolkit';
import { TodoSliceReducer } from '../Features/Todo/TodoSlice';

export const TodoStore = configureStore({
    reducer: TodoSliceReducer
})
