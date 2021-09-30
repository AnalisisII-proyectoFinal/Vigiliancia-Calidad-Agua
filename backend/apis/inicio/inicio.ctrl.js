const {getConexion}=require('../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../respuesta/respuesta.js');

async function obtnerDatosInstitucion(req,res) {
    try{
        const pool = await getConexion();  
        const result = await pool.request().execute('dbo.uspObtnerDatosInstitucion');
        respuesta.exito(req,res,result.recordset,200)

    }catch (err){
        respuesta.error(req,res,error,500);
    } 
}

async function obtnerHiloActual(req,res) {
    try {
        const pool = await getConexion();
        const result = pool.request().execute('');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}

async function obtnerPublicaciones(req,res) {
    try {
        const pool = await getConexion();
        const result = pool.request().execute('');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}



module.exports = {
    obtnerDatosInstitucion,
    obtnerHiloActual,
    obtnerPublicaciones
}