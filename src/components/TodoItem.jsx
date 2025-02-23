import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  const [istodoEdit, setIstodoEdit] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIstodoEdit(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.isCompleted ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          istodoEdit ? 'border-black/10 px-2' : 'border-transparent'
        }`}
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
        readOnly={!istodoEdit}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;
          if (istodoEdit) {
            editTodo();
          } else setIstodoEdit((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {istodoEdit ? '📁' : '✏️'}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
