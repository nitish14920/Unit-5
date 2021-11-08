const express = require("express");
const connect  = require("./config/db");
const userController = require("./controllers/user.controller")
const lectureController = require("./controllers/lecture.controller"); 
const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(express.json())
app.use("/users",userController)
app.use("/lectures",lectureController)
app.use("/users/signup",register)
app.use("/users/login",login)


    app.listen(2244,async()=>{
        await connect()
        console.log("Listening on port 2244")
    })

