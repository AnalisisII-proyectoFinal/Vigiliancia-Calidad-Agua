const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerMetodosCloracion(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenermetodoscl');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
}
async function obtenerMetodoCloracion(req,res) {
    const idm = req.params.id
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idmc',sql.Int,idm).execute('dbo.uspobtenermetodocl');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function crearMetodoCloracion(req,res) {
    const {tratamiento,descripcion}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('tratamiento',sql.VarChar(100),tratamiento)
        .input('descripcion',sql.VarChar(200),descripcion)
        .execute('dbo.uspcrearmetodocl');
        respuesta.exito(req,res,{msg:'registro Insertado satisfactoriamente'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function actualizarMetodoCloracion(req,res) {
    const {idmc,tratameinto,descripcion}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idmc',sql.Int,idmc)
        .input('tratamiento',sql.VarChar(100),tratameinto)
        .input('descripcion',sql.VarChar(200),descripcion)
        .execute('dbo.uspactualizarmetodocl');
        respuesta.exito(req,res,{msg:'Actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function eliminarMetodoCloracion(req,res) {
    const idmc = req.params.id;
    try {
        const pool = await getConexion();
        await pool.request().input('idmc',sql.Int,idmc).execute('dbo.uspeliminarmetodocl');
        respuesta.exito(req,res,{msg:'Registro Eliminado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}

module.exports={
    obtenerMetodosCloracion,
    obtenerMetodoCloracion,
    crearMetodoCloracion,
    actualizarMetodoCloracion,
    eliminarMetodoCloracion
}