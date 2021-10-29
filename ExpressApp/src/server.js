const express = require("express")
const connect = require("./config/db")
const app = express()
const userController = require("./controllers/user.controller")
app.use(express.json())
app.use("/users",userController)

app.listen(2244,async function(){
    await connect()
    console.log("Listening on 2244")
})