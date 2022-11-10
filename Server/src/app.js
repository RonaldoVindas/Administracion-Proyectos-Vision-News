
import express from "express";
import morgan from "morgan";

//Routes import
import cataloge from "./Routes/cataloge.routes.js";
import news from "./Routes/news.routes.js";
import person from "./Routes/person.routes.js";

const app = express();

//settings
const port = 4000
app.set("port", process.env.PORT || port);

//middlewares
// app.use(morgan("start"));
app.use(express.json());
//Cors
import cors from "cors" 
const options = {
    origin: 'http://localhost:3000',
    }
    app.use(cors(options))


//routes
app.use(cataloge);
app.use(news);
app.use(person);


//starting server
app.listen(app.get("port"), () => {
    console.log("server running on port", port);
});