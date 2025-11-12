import React, { createContext, useContext, useEffect, useState } from "react";

const ToDoContext = createContext();

export const useToDoContext = () => useContext(ToDoContext);

export const ToDoContextProvider = ({ children }) => {

    const [toDos, setTodos] = useState([]);

    useEffect(() => {
        try {
            const storedTodo = JSON.parse(localStorage.getItem("todo")) || [];
            setTodos(storedTodo);
        } catch (error) {
            console.error("Error parsing todos from localStorage:", error);
            setTodos([]);
        }
    }, []);




    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(toDos));
    }, [toDos])

    const addToDo = (todo) => {
        setTodos((prev) => {
            return [todo, ...prev]
        })
    }

    const deleteToDo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));


    }

    const updateToDo = (id, newTitle) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                return todo.id === id ? { ...todo, title: newTitle } : todo;
            })
        })
    }

    return (
        <ToDoContext.Provider value={{ toDos, addToDo, deleteToDo, updateToDo }}>
            {children}
        </ToDoContext.Provider>
    )
}