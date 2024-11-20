import React from "react";

interface DeleteTodoProps {
    onDelete: () => void;
  }
  
  const DeleteTodo: React.FC<DeleteTodoProps> = ({ onDelete }) => {
    return <button onClick={onDelete}>Eliminar</button>;
  };
  
  export default DeleteTodo;
  
