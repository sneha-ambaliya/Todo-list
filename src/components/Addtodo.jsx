import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feture/TodoSlice';

function Addtodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; 
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-center gap-4 p-4 mt-20 bg-white rounded-xl shadow-md max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="text-white bg-blue-950 px-10 py-2 rounded-xl hover:bg-blue-900 transition-all duration-200 cursor-pointer"
      >
        Add Todo
      </button>
      <h1></h1>
      
    </form>
    
  );
}

export default Addtodo;
