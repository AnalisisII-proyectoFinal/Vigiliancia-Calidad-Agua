const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

function obtnerDatos(req,res) {
    respuesta.exito(req,res,{mensaje:'soy funcion obtnerdatos'},200); 
}

function obtnerDatosCentroSalud(req,res) {
    respuesta.exito(req,res,{mensaje:'soy funcion obtnerdatos centro salud'},200); 
}

module.exports={
    obtnerDatos,
    obtnerDatosCentroSalud
}