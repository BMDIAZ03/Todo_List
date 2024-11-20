import React from 'react';
import { useState } from 'react';
import "../styles/AddTodo.css";

interface AddTodoProps {
  onAdd: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    if (todo.trim()) {
      onAdd(todo);
      setTodo('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Escribe tu tarea..."
      />
      <button onClick={handleAdd}>Añadir</button>
    </div>
  );
};

export default AddTodo;
