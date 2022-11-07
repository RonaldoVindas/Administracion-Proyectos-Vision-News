
import express from "express";
import morgan from "morgan";
import Routes from "./Routes/RoutesDB.js";

const app = express();

//settings
const port = 4000
app.set("port", process.env.PORT || port);

//middlewares
// app.use(morgan("start"));
app.use(express.json());

//routes
app.use(Routes);


//starting server
app.listen(app.get("port"), () => {
    console.log("server running on port", port);
});