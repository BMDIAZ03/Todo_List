import React from 'react';
import { useState } from 'react';

interface EditTodoProps {
  todo: string;
  onEdit: (newTodo: string) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo, onEdit }) => {
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = () => {
    if (newTodo.trim()) {
      onEdit(newTodo);
    }
  };

  return (
    <div className="edit-todo">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleEdit}>Guardar</button>
    </div>
  );
};

export default EditTodo;
