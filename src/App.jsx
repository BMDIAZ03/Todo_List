

const App = () => {
  return (
    <div className="todo-list">
      <h1>
      LISTA DE TAREAS
      </h1>
        <input type="text" id="todoInput" name="todoInput" placeholder="Escribe tu tarea..."/>
        <button>Añadir</button>
        <ul id="todoList" ></ul>
    </div>
  )
}

export default App
