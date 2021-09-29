const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function nuevoTipoMuestra(req,res) {
    const {tipo,desc}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('tipo',sql.VarChar(100),tipo)
        .input('desc',sql.VarChar(200),desc)
        .execute('')
        respuesta.exito(req,res,{msg:'registro sastisfacorio'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

module.exports={
    nuevoTipoMuestra
}