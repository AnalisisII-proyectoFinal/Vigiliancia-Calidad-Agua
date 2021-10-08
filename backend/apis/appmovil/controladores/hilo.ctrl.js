const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerHilo(req,res) {
        
    try {
        const $pool = await getConexion();
        const result=  await $pool.request().execute('dbo.uspobtenerhiloactualapp');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

module.exports={
    obtenerHilo
}