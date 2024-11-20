import React from 'react';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
import "../styles/TodoItem.css";

interface TodoItemProps {
    todo: string;
    completed: boolean;
    onDelete: () => void;
    onEdit: (newTodo: string) => void;
    onToggle: () => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, completed, onDelete, onEdit ,onToggle}) => {
    return (
      <li className={`todo-item ${completed ? 'completed' : ''}`}>
        <div className="todo-content"> 
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
            <span>{todo}</span>
        </div>
        <div className="todo-actions">
          <EditTodo todo={todo} onEdit={onEdit} />
          <DeleteTodo onDelete={onDelete} />
        </div>
      </li>
    );
  };
  
  export default TodoItem;
  
