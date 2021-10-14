const respuesta = require('../../respuesta/respuesta.js');
const config = require('../../config.js');
const jwt= require('jsonwebtoken');

function validarToken(req,res,next) {
    try {
        const tokenAcceso = req.headers['authorization'];
        if (!tokenAcceso) {
         respuesta.error(req,res,{msg:'No tiene acceso(no token)'},403)
        }
        const decoficado= jwt.verify(token,config.jwt.secret)
        req.id = decoficado.id;
        console.log(token);
        next();
    } catch (error) {
        respuesta.error(req,res,{msg:'No autorizado'},401)
    }  
}

module.exports={
    validarToken
}