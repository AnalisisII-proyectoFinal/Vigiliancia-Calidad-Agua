const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerMantenimientos(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenermantenimientosm');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
}
async function obtenerMantenimiento(req,res) {
    const idm = req.params.id
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idm',sql.Int,idm).execute('dbo.uspobtenermantenimientom');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function crearMantenimiento(req,res) {
    const {titulo,descripcion,img,fecha,idtanq,idu}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('titulo',sql.VarChar(100),titulo)
        .input('descripcion',sql.Text,descripcion)
        .input('img',sql.VarChar(200),img)
        .input('fecha',sql.Date,fecha)
        .input('idt',sql.Int,idtanq)
        .input('idu',sql.Int,idu)
        .execute('dbo.uspcrearmantenimientom');
        respuesta.exito(req,res,{msg:'Registro Creado Satisfactoriamente'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function actualizarMantenimiento(req,res) {
    const {idm,titulo,descripcion,img,fecha}=req.body;
    try {
        const pool = await getConexion();
        const result = await pool.request()
        .input('idm',sql.Int,idm)
        .input('titulo',sql.VarChar(100),titulo)
        .input('descripcion',sql.Text,descripcion)
        .input('img',sql.VarChar(200),img)
        .input('fecha',sql.Date,fecha)
        .execute('dbo.uspactualizarmantenimientom');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}
async function eliminarMantenimiento(req,res) {
    const idm = req.params.id;
    try {
        const pool = await getConexion();
        await pool.request().input('idm',sql.Int,idm).execute('dbo.uspeliminarmantenimientom');
        respuesta.exito(req,res,{msg:'Eliminado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error interno'},500)
    }
    
}

async function obtnerTanques(req,res) {
    try {
        const pool= await getConexion();
        const result = await pool.request().execute('dbo.uspobtnetanquesopc')
        respuesta.exito(req,res,result.recordset,200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

module.exports={
    obtenerMantenimientos,
    obtenerMantenimiento,
    crearMantenimiento,
    actualizarMantenimiento,
    eliminarMantenimiento,
    obtnerTanques
}