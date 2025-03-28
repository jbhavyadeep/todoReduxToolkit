import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleComplete, storedTodos } from '../features/todo/todoSlice'

function Todos() {

    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editStates, setEditStates] = useState({});
    const [todoMsgs, setTodoMsgs] = useState({});



    const toggleEdit = (id, text) => {
        setEditStates((prev) => ({ ...prev, [id]: !prev[id] }));
        if (!editStates[id]) {
            setTodoMsgs((prev) => ({ ...prev, [id]: text }));
        }
    };

    const editTodo = (id) => {
        if (todoMsgs[id] !== undefined) {
            dispatch(updateTodo({ id, text: todoMsgs[id] }));
        }
        setEditStates((prev) => ({ ...prev, [id]: false }));
    };

    useEffect(() => {
        const todosmsgs = JSON.parse(localStorage.getItem("todoMsgs"));
        dispatch(storedTodos(todosmsgs));

    }, [])


    useEffect(() => {
        localStorage.setItem("todoMsgs", JSON.stringify(todos));
    }, [todos])




    return (
        <>

            <ul className="list-none w-full p-1">
                {todos.map((todo) => (
                    <li
                        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-4 shadow-sm shadow-white/50 duration-300  text-black 
                            mb-2
                            ${todo.isComplete ? "bg-green-200" : "bg-red-50"}`}
                        key={todo.id}
                    >
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={todo.isComplete}
                            onChange={() => dispatch(toggleComplete(todo.id))}
                        />

                        <input
                            type="text"
                            className={`border outline-none w-full bg-transparent rounded-lg ${editStates[todo.id] ? "border-black/10 px-2" : "border-transparent"
                                } ${todo.isComplete ? "line-through" : ""}`}
                            value={todoMsgs[todo.id] || todo.text}
                            onChange={(e) => setTodoMsgs((prev) => ({ ...prev, [todo.id]: e.target.value }))}
                            readOnly={!editStates[todo.id]}
                        />

                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                            onClick={() => {
                                if (todo.isComplete) return;

                                if (editStates[todo.id]) {
                                    editTodo(todo.id);
                                } else {
                                    toggleEdit(todo.id, todo.text);
                                }
                            }}
                            disabled={todo.isComplete}
                        >
                            {editStates[todo.id] ? "📁" : "✏️"}
                        </button>


                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos