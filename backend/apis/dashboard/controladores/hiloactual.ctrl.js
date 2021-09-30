const respuesta = require('../../../respuesta/respuesta.js');
const {getConexion} = require('../../../sqlserver/sqlserverconexion.js');

async function obtnerHiloactual(req,res) {
    try {
        const pool = await getConexion();
        const result = pool.request().execute('');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }    
}



module.exports={
    obtnerHiloactual
}