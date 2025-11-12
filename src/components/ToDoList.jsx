import React, { useState } from 'react';
import { Trash2, Pencil, Check } from 'lucide-react';
import { useToDoContext } from '../contextApi/toDoContenxtApi';

const ToDoList = () => {

    const { toDos, deleteToDo, updateToDo } = useToDoContext()
    const [editTitle, setEditTitle] = useState(null);
    const [editId, setEditId] = useState('');

    const handleDelete = (id) => {
        deleteToDo(id)
    }

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setEditTitle(todo.title);
    }

    const handleUpdate = (id) => {
        updateToDo(id, editTitle)
        setEditId(null)
        setEditTitle('')
    }


    return (
        <div className="max-w-[500px] w-full mx-auto mt-6 space-y-2">

            {toDos.map((todo) => {
                return (
                    <div key={todo.id}
                        className="flex justify-between items-center bg-gray-800 border border-gray-700 rounded-lg p-3 text-white shadow-md hover:shadow-lg transition"
                    >

                        {editId == todo.id ? (
                            <input
                                type="text"
                                className="flex-1 bg-transparent border mr-2 border-gray-600 outline-none text-white p-1 rounded"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <span className="text-lg">{todo.title}</span>
                        )}

                        <div className="flex items-center gap-3">
                            {/* Update button (optional) */}

                            {editId === todo.id ? (
                                <button className="hover:text-yellow-400 transition" onClick={() => handleUpdate(todo.id)}>
                                    <Check size={18} />
                                </button>
                            ) : (
                                <button className="hover:text-yellow-400 transition" onClick={() => handleEdit(todo)}>
                                    <Pencil size={18} />
                                </button>
                            )}

                            {/* Delete button */}
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="hover:text-red-500 transition"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default ToDoList;
