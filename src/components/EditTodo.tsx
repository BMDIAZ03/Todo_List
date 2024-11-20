import React from 'react';
import { useState } from 'react';
import "../styles/EditTodo.css"

interface EditTodoProps {
  todo: string;
  onEdit: (newTodo: string) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = () => {
    if (newTodo.trim()) {
      onEdit(newTodo);
      setIsEditing(false);
    }
  };

  return (
    <>
      <button className='edit-todo' onClick={() => setIsEditing(true)}>Editar</button>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar tarea</h3>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleEdit}>Guardar</button>
              <button onClick={() => setIsEditing(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
