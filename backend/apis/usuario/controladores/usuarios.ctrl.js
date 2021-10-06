const respuesta = require('../../../respuesta/respuesta.js');
const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');

async function obtnerUsuario(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerusuarios')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

module.exports={
    obtnerUsuario
}