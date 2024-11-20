import React from 'react';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

interface TodoItemProps {
    todo: string;
    onDelete: () => void;
    onEdit: (newTodo: string) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
    return (
      <li className="todo-item">
        <span>{todo}</span>
        <EditTodo todo={todo} onEdit={onEdit} />
        <DeleteTodo onDelete={onDelete} />
      </li>
    );
  };
  
  export default TodoItem;
  
