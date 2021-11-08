const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require("dotenv").config();

const createToken = (user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY)
}

const register = async(req,res)=>{
    
    try{
       let user = await User.findOne({email:req.body.email})

       if(user)
       return res.status(400).send({message:"Email Exists"});

       user = await User.create(req.body);
       const token = createToken(user);

       return res.status(200).send({user,token})
    }
    catch(error){
        return res.status(400).send({
            message:"Error"
        })
    }
}

const login = async(req,res)=>{
    try{

        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send({message:"Check Your Email or Password"})
        }
        let match = user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"Check Your Email or Password"})
        }

        const token = createToken(user)

        return res.status(200).send({user,token})
    }
    catch(error){
        return res.status(500).send({message:"try again later"})
    }
}
module.exports = {register,login}