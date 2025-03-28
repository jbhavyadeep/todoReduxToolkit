import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isComplete: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isComplete = !todo.isComplete;
            }
        },
        storedTodos: (state, action) => {

            if (action.payload && action.payload.length > 0) {
                action.payload.map((todo) => {
                    state.todos.push(todo);
                })

            }

        }
    }
});

//export individual functionalities to use in components
export const { addTodo, removeTodo, updateTodo, toggleComplete, storedTodos } = todoSlice.actions;

//export whole reducer for store.js
export default todoSlice.reducer