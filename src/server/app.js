import express, { json } from "express";
import { config } from "dotenv";
import todosRoutes from "./routes/todosRoutes.js";


const { parsed } = config();


const PORT = parsed?.PORT || 5000;
const app = express();


app.use(json());


app.use("/api/todos", todosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
