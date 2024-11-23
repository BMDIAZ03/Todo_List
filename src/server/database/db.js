import ADODB from "node-adodb";
import dotenv from "dotenv";


dotenv.config();


const DB_PATH = dotenv.config().parsed?.DB_PATH || './database/todolist.accdb'

const connection = ADODB.open(
  `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${DB_PATH};Persist Security Info=False;`
);

export default connection;

