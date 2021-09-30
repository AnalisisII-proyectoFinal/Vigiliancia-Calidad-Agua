const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerMuestras(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function nuevaMuestra(req,res) {
    const {tanque,tipo,punto,ph,cl,pa}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('tanque',sql.Int,tanque)
        .input('tipo',sql.Int,tipo)
        .input('punto',sql.VarChar(200),punto)
        .input('ph',sql.Int,ph)
        .input('cl',sql.Int,cl)
        .input('pa',sql.Int,pa)
        .execute('')
        respuesta.exito(req,res,{msg:'nueva muestra'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function actulizarMuestra(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('id',sql.Int,id)
        .execute('')
        respuesta.exito(req,res,{msg:'actualizado'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function eliminarMuestra(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idm',sql.Int,id)
        .execute('')
        respuesta.exito(req,res,{msg:'eliminado'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}


module.exports={
    obtnerMuestras,
    nuevaMuestra,
    eliminarMuestra,
    actulizarMuestra
}