import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'



function App() {

  const [todos , setTodos] = useState([]);

  const addTodo = (todoMessage) => {
    setTodos((prev) => [...prev , {id: Date.now() , ...todoMessage}])
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => (eachTodo.id !== id )))
  };

  const updateTodo = (id , todoMessage) => {
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todoMessage: eachTodo)))
  };

  const toggleComplete = (id) => {

   setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed}: eachTodo)))

  };

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if (todos && todos.length>0) {
      setTodos(todos)
    }
    
  }, [])

  useEffect(() => {

    localStorage.setItem("todos" , JSON.stringify(todos))
    
  }, [todos])
  
  
  

  return (
    <TodoProvider value={{todos , addTodo , removeTodo , updateTodo , toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map( (todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </TodoProvider>
  )
}

export default App
