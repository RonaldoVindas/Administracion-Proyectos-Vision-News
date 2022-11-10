
import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";


//Routes import
import cataloge from "./Routes/cataloge.routes.js";
import news from "./Routes/news.routes.js";

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
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './upload'
}));

//routes
app.use(cataloge);
app.use(news);


//starting server
app.listen(app.get("port"), () => {
    console.log("server running on port", port);
});