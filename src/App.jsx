import { useState } from 'react'


import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import ThemeBtn from './components/ThemeBtn'

function App() {

  return (
    <>


      <div className="bg-gray-300 dark:bg-gray-600 min-h-screen  py-8 duration-300">
        <div className="w-full max-w-2xl mx-auto flex justify-end mb-4 ">
          <ThemeBtn />
        </div>
        <div className="dark:bg-gray-800 dark:border-gray-700  bg-white w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 ">


          <h1 className="text-2xl font-bold text-center mb-8 mt-2 tracking-tight text-gray-900 dark:text-white">Manage Your Todos</h1>

          <AddTodo />



          <Todos />

        </div>
      </div>


    </>
  )
}

export default App
