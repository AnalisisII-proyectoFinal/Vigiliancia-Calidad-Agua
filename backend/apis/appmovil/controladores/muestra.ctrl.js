const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');
async function obtenerMuestras(req,res) {
        
    try {
        const $pool = await getConexion();
        const result=  await $pool.request().execute('dbo.uspobtenemuestrasapp');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtnerMuestrasActivas(req,res) {
    const idtanque = req.params.id
    try {
        const pool = await getConexion();
        const result = await pool.request()
        .input('idt',sql.Int,idtanque)
        .execute('dbo.uspmuestrasactivasapp');
        respuesta.exito(req,res,result.recordset,200)

    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}


module.exports={
    obtenerMuestras,
    obtnerMuestrasActivas
}