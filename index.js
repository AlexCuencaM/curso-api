const express = require("express");
const cors = require("cors");
const routesCurso = require("./routes/curso");

const app = express();
require('dotenv').config();
app.use(express.json())

const { dbConnection } = require('./database/config');
dbConnection();
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 20
}
app.use(cors(corsOptions));
app.use("/api/cursos",routesCurso);
app.listen(process.env.PORT,()=>{
    console.log("Server is running\nPress CTRL + C to finish");
})