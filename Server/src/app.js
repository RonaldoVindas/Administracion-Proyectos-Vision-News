
import express from "express";
import morgan from "morgan";
import Routes from "./Routes/RoutesDB.js";

const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
// app.use(morgan("start"));
app.use(express.json());

//routes
app.use(Routes);


//starting server
app.listen(app.get("port"), () => {
    console.log("server running on port", 4000);
});