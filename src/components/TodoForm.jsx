import React from 'react'
import { useTodo } from '../contexts'

function TodoForm() {

    const [todo,setTodo] = React.useState('')
    const{addTodo} =useTodo()

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({
            todo,
            isCompleted: false,
        });
        setTodo('');
    };
    
    
    
    
    
    
    


  return (
   <form onSubmit={add}  className='flex'>
    <input type="text" 
    placeholder='Write your todo here'
    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' 
    value={todo}
    onChange={(e)=>{e.target.value}}  
    />

    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-r-lg'>Add</button>
   </form>
  )
}

export default TodoForm