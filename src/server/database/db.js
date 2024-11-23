import ADODB from "node-adodb";
import dotenv from "dotenv";

// Configuración de variables de entorno
dotenv.config();

// Obtener la ruta de la base de datos desde las variables de entorno
const DB_PATH = dotenv.config().parsed?.DB_PATH || './database/todolist.accdb';

// Crear la conexión
const connection = ADODB.open(
  `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${DB_PATH};Persist Security Info=False;`
);

export default connection;

