import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input) {
            return;
        } else {
            dispatch(addTodo(input))
            setInput('')
        }

    }

    return (
        <form onSubmit={addTodoHandler} className="flex m-2">
            <input
                type="text"
                className={`bg-gray-300 dark:bg-gray-700 w-full dark: border-gray-700  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 text-gray-900 rounded-l-lg rounded px-3 duration-150
                    `}
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg rounded text-lg
                    `}
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo