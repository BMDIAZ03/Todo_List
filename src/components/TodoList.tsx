import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import '../styles/TodoList.css';
import React from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index: number, newText: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <AddTodo onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.text}
            completed={todo.completed}
            onDelete={() => handleDeleteTodo(index)}
            onEdit={(newText) => handleEditTodo(index, newText)}
            onToggle={() => handleToggleTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
