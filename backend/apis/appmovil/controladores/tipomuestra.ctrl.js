const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerTipoMuestra(req,res) {
        
    try {
        const $pool = await getConexion();
        const result=  await $pool.request().execute('dbo.uspobtenertipomuestraapp');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

module.exports={
    obtenerTipoMuestra
}