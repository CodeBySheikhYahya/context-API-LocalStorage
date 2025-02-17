import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo
      )
    )
  }

  useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem('todos'))
   if(todos&&todos.length>0){
      setTodos(todos)

   }
  },[])

  useEffect(()=>{

    localStorage.setItem("todos" , JSON.stringify(todos))
    
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      {/* Add your components here */}
    </TodoProvider>
  )
}

export default App
