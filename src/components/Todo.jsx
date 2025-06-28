import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../feture/TodoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: editId, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <>
      <div className="text-2xl font-semibold text-center my-4">Todo List:</div>

      <ul className="space-y-3 max-w-xl mx-auto px-4">
        {todos.map((todo) => (
          <li key={todo.id} className="relative group rounded-md p-[2px] transition duration-300">
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
            <div className="absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>

            <div className="flex justify-between items-center bg-gray-600 px-4 py-2 rounded-md shadow-sm hover:shadow-md relative z-10 text-white">
              {editId === todo.id ? (
                <input
                  className="bg-gray-600 text-white border-none focus:outline-none  w-full rounded px-2 py-1"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span>{todo.text}</span>
              )}

              <div className="flex gap-5 items-center ml-4">
                {editId === todo.id ? (
                  <button
                    onClick={handleSave}
                    className="text-white hover:text-green-600"
                  >
                    <span className="material-icons cursor-pointer">check</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-yellow-400 hover:text-yellow-600"
                  >
                    ✏️
                  </button>
                )}

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white text-2xl hover:text-red-600"
                >
                  <span className="material-icons cursor-pointer">close</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
