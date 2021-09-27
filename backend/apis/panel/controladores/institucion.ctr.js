const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerDatos(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtnerdatosinstitucion');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function actualizarDatos(req,res) {
    const {entidad,dependencia,aplicacion,logotipo,mision,imgm,vision,imgv} = req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('ent',sql.VarChar(100),entidad)
        .input('dep',sql.VarChar(100),dependencia)
        .input('app',sql.VarChar(200),aplicacion)
        .input('logo',sql.VarChar(200),logotipo)
        .input('mision',sql.Text,mision)
        .input('imgm',sql.VarChar(200),imgm)
        .input('vision',sql.Text,vision)
        .input('imgv',sql.VarChar(200),imgv)
        .execute('dbo.actualizardatosinstitucion');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
        console.log(req.body)
    } catch (error) {
        respuesta.error(req,res,{msg:'error de servidor'},500);
    }
}


async function obtnerDatosCentroSalud(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtnerdatoscentrosalud');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function actualizarDatosSalud(req,res) {
    const {departamento,municipio,areasal,sersal,dissal,dirsal,logsal,logsiv} = req.body;
    try {
        console.log(req.body);
        
        const pool = await getConexion();
        await pool.request()
        .input('dep',sql.VarChar(50),departamento)
        .input('mun',sql.VarChar(50),municipio)
        .input('aresal',sql.VarChar(50),areasal)
        .input('sersal',sql.VarChar(50),sersal)
        .input('dissal',sql.VarChar(50),dissal)
        .input('dirsal',sql.VarChar(100),dirsal)
        .input('logsal',sql.VarChar(200),logsal)
        .input('logsiv',sql.VarChar(200),logsiv)
        .execute('dbo.actualizardatossalud');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
        console.log(req.body)
    } catch (error) {
        console.log(error);
        respuesta.error(req,res,{msg:'error de servidor'},500);
    }
}


module.exports={
    obtnerDatos,
    actualizarDatos,
    obtnerDatosCentroSalud,
    actualizarDatosSalud
}