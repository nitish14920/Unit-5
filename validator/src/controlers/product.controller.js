const express= require("express")
const router = express.Router()
const Product = require("../models/product.model")
const {body,validationResult} = require("express-validator")


router.post("/",body("title").isLength({min:2}),async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const product =await Product.create(req.body);
    return res.status(201).send(product)
})
module.exports = router;