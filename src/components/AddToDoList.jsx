import React, { useState } from 'react';
import { useToDoContext } from '../contextApi/toDoContenxtApi';

const AddToDoList = () => {

    const [todo, setTodos] = useState('');
    const {addToDo} = useToDoContext()

    const handleToDo = (e) => {
        e.preventDefault();

        const toDoItem = {
            id: Date.now(),
            title: todo
        }

        addToDo(toDoItem);
        console.log(todo)
        setTodos('');
    }


    return (
        <div className="max-w-[500px] w-full mx-auto mt-8">
            <form onSubmit={handleToDo}
                className="flex w-full shadow-lg rounded-lg border border-red-600 overflow-hidden"
            >
                <input
                    value={todo}
                    onChange={(e) => setTodos(e.target.value)}
                    type="text"
                    placeholder="Add Item"
                    className="flex-1 p-3 text-white bg-gray-800 outline-none placeholder-gray-400"
                />
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 font-semibold transition-colors duration-200"
                >
                    Add
                </button>
            </form>

            <div >

            </div>
        </div>
    )
}

export default AddToDoList;
