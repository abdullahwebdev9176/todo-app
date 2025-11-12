import { useState } from 'react'
import ThemeTogglerBtn from './components/ThemeTogglerBtn'
import AddToDoList from './components/AddToDoList'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className='flex justify-center items-center border-b border-gray-500 w-full pb-4'>
          <div className='flex justify-between items-center max-w-[450px] w-full'>
            <span className='font-semibold text-gray-800 dark:text-white text-2xl'>To Do App</span>
            <ThemeTogglerBtn />
          </div>

        </div>
        <main style={{ minHeight: '85vh' }} className='w-full'>
          <AddToDoList />
          <ToDoList />
        </main>


        {/*  */}
        {/* <h1 className="text-gray-900 dark:text-white text-2xl font-bold text-center">
        Muhammad Abdullah
      </h1> */}
      </div>
    </>
  )
}

export default App
