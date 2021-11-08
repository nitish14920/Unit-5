const express = require("express");
const connect  = require("./config/db");
const userController = require("./controllers/user.controller")


const app = express();

app.use(express.json())
app.use("/users",userController)
app.use("")
    app.listen(2244,async()=>{
        await connect()
        console.log("Listening on port 2244")
    })

