import express from "express";
import todosController from "../controllers/todosController.js";

const router = express.Router();

// Rutas para las tareas
router.get("/", todosController.getTodos);
router.post("/", todosController.addTodo);
router.delete("/:id", todosController.deleteTodo);
router.put("/:id", todosController.updateTodo);

export default router;

