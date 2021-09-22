const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

function obtnerAppUsuarios(req,res) {
    respuesta.exito(req,res,{mensaje:'soy funcion obtnerappusuario'},200); 
}





module.exports={
    obtnerAppUsuarios
}