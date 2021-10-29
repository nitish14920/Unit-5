const express = require("express");
const app = express();
const connect = require("./config/db")
const productController = require("./controlers/product.controller")

app.use(express.json())
app.use("/products",productController)


   

    app.listen(4001,async ()=>{
        await connect();
        console.log("listening on 4001")
    })


