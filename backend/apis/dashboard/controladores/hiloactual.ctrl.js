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

async function obtnerProgresoActual(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerdatoshiloactual')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}


module.exports={
    obtnerHiloactual,
    obtnerProgresoActual   
}