const respuesta = require('../../../respuesta/respuesta.js');
const {getConexion, sql} = require('../../../sqlserver/sqlserverconexion.js');

async function obtnerHilos(req,res) {
    try {
        const pool = await getConexion();
        const result = pool.request()
        .execute('');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }    
}



async function obtnerHilo(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        const result = pool.request()
        .input('id',sql.Int,id)
        .execute('');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }    
}



module.exports={
    obtnerHilo,
    obtnerHilos
}