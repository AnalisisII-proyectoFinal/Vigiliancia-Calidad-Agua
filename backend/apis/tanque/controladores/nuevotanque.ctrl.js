const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerTanques(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenertanquest')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error de servidor'},500)
    }
}


async function obtenerTanque(req,res) {
    const idt = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idt',sql.Int,idt).execute('dbo.uspobtenertanquet');
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error de sevidor'},500)
    }
}



async function nuevoTanque(req,res) {
    const {nombre,numero,ubicacion,fechaf,largo,ancho,altura,img,mcl,idu}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('nombre',sql.VarChar(100),nombre)
        .input('numero',sql.Int,numero)
        .input('ubicacion',sql.VarChar(300),ubicacion)
        .input('fechaf',sql.Date,fechaf)
        .input('largo',sql.VarChar(50),largo)
        .input('ancho',sql.VarChar(50),ancho)
        .input('altura',sql.VarChar(50),altura)
        .input('img',sql.VarChar(200),img)
        .input('mcl',sql.Int,mcl)
        .input('idu',sql.Int,idu)
        .execute('dbo.uspcreartanquet')
        respuesta.exito(req,res,{msg:'Registro creado Satisfactoriamente'},200)
    } catch (error) {
        console.log(error);
        respuesta.error(req,res,{msg:'Error de servidor'},500)        
    }
}

async function actualizarTanque(req,res) {
    const {idt,nombre,numero,ubicacion,fechaf,largo,ancho,altura,img,mcl}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idt',sql.Int,idt)
        .input('nombre',sql.VarChar(100),nombre)
        .input('numero',sql.Int,numero)
        .input('ubicacion',sql.VarChar(300),ubicacion)
        .input('fechaf',sql.Date,fechaf)
        .input('largo',sql.VarChar(50),largo)
        .input('ancho',sql.VarChar(50),ancho)
        .input('altura',sql.VarChar(50),altura)
        .input('img',sql.VarChar(200),img)
        .input('mcl',sql.Int,mcl)
        .execute('dbo.uspactualizartanquet')
        respuesta.exito(req,res,{msg:'registro actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error Interno de sevidor'},500)
    }
}

async function  eliminarTanque(req,res) {
    const idt = req.params.id;
    try {
        const pool = await getConexion();
        await pool.request().input('idt',sql.Int,idt).execute('dbo.uspeliminartanquet');
        respuesta.exito(req,res,{msg:'Registro eliminado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Error de servidor'},500)
    }
}


module.exports={
    obtenerTanques,
    obtenerTanque,
    nuevoTanque,
    actualizarTanque,
    eliminarTanque
}