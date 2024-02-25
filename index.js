import dotenv from "dotenv";
dotenv.config();
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import ProjectRoute from "./src/routes/routes.js";

const app = express();

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(expressEjsLayouts)
app.set("view engine", "ejs")
app.set("views", path.resolve("src", "views"))

app.use('/project', ProjectRoute)

app.use('*', (req, res)=>{
    res.render('404', {msg:"Incorrect URL, try below link"})
})

export default app;