import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import React from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index: number, newTodo: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <AddTodo onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodo(index)}
            onEdit={(newTodo) => handleEditTodo(index, newTodo)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
