import React from "react";
import "../styles/DeleteTodo.css"

interface DeleteTodoProps {
    onDelete: () => void;
  }
  
  const DeleteTodo: React.FC<DeleteTodoProps> = ({ onDelete }) => {
    return <button onClick={onDelete} className="delete-todo" >Eliminar</button>;
  };
  
  export default DeleteTodo;
  
