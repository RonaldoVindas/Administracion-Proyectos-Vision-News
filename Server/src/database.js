//import mysql from "mysql2";
import {createPool} from "mysql2/promise"

// conexion a la base de datos sql
const db = createPool({
    host: "b8urwchzonmvqpdfx6hx-mysql.services.clever-cloud.com",
    user: "u4fovajncfqxqamj",
    password: "qcX9rHnAONafBjDiHwtb",
    port: 3306,
    database: "b8urwchzonmvqpdfx6hx",
    
});

//export default db;
export{db};