import React from 'react'
import { createContext , useContext } from 'react'

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todoMessage : "Todo msg",
            completed : false
        }
    ],

    addTodo : (todoMessage) => {},
    updateTodo : (id , todoMessage) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});


export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}

