const jwt =require('jsonwebtoken');
const config = require('../../config');

const verificacarToken = async(req,res,next)=>{
    try {
        const token = req.headers["x-access-token"];
        if (!token){
        return res.status(403).json({mensaje:"no hay token"});
        }
        const decoficado= jwt.verify(token,config.jwt.secret)
        req.id = decoficado.id;
        console.log(token);
        next();
        
    } catch (error) {
        return res.status(401).json({mensaje:"no autorizado"});
    }

    
}

const esbasico = async(req,res,next)=>{

}
const esModerador= async(req,res,next)=>{

}
const esAdmin=async(req,res,next)=>{

}

module.exports={
    verificacarToken,
    esbasico,
    esModerador,
    esAdmin
}