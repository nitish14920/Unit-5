const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(token){
    return new Promise(function (resolve,reject){
        jwt.verify(token,process.env.SECRET_KEY,function(error,same){
            if(err){
                return reject(error)
            }
            else{
                return resolve(same)
            }
        })
    })
}

async function authenticate(req,res,next){
    const bearerToken = req.headers.authorization;

    if(!bearerToken || !bearerToken.startsWith("Bearer")){
        return res.status(400).send({message:"Please provide a bearer Token"})

       
    }
    const token = bearerToken.split(" ")[1];
    try{
        const {user} = await verifyToken(token)
        req.user = user;
        return next()

    }
    catch(error){
        return res.status(400).send({message:"invalid token"})
    }
}
module.exports = authenticate;