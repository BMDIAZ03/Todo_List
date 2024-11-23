import  connection  from "../database/db.js";

const getTodos = async (req, res) => {
  try {
    const todos = await connection.query("SELECT * FROM Todos");
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las tareas", error });
  }
};

const addTodo = async (req, res) => {
  const { text } = req.body;
  try {
    await connection.execute(`INSERT INTO Todos (text, completed) VALUES ('${text}', false)`);
    res.status(201).json({ message: "Tarea añadida exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al añadir la tarea", error });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await connection.execute(`DELETE FROM Todos WHERE id=${id}`);
    res.json({ message: "Tarea eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea", error });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  try {
    await connection.execute(
      `UPDATE Todos SET text='${text}', completed=${completed ? 1 : 0} WHERE id=${id}`
    );
    res.json({ message: "Tarea actualizada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la tarea", error });
  }
};

export default { getTodos, addTodo, deleteTodo, updateTodo };
