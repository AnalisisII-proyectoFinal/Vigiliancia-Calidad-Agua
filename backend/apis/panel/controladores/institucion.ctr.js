const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');


async function obtnerDatosInstitucion(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtnerdatosinstitucion');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function obtnerDatosMision(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtnermision');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function obtnerDatosVision(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtenervision');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function actualizarDatosInstitucion(req,res) {
    const {entidad,dependencia,aplicacion,logo} = req.body;
    //const uri_img = (req.file==undefined)?'':'/imgcargados/' + req.file.filename;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('ent',sql.VarChar(100),entidad)
        .input('dep',sql.VarChar(100),dependencia)
        .input('app',sql.VarChar(200),aplicacion)
        .input('logo',sql.VarChar(200),logo)
        .execute('dbo.uspactualizardatosinstitucion');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500);
    }
}

async function actualizarMision(req,res) {
    const {mision,imgm} = req.body;
    //const uri_img = (req.file==undefined)?'':'/imgcargados/' + req.file.filename;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('mision',sql.Text,mision)
        .input('imgm',sql.VarChar(200),imgm)
        .execute('dbo.uspactualizarmision');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500);
    }
}


async function actualizarVision(req,res) {
    const {vision,imgv} = req.body;
    //const uri_img = (req.file==undefined)?'':'/imgcargados/' + req.file.filename;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('vision',sql.Text,vision)
        .input('imgv',sql.VarChar(200),imgv)
        .execute('dbo.uspactualizarvision');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500);
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

//const {departamento,municipio,areasal,sersal,dissal,dirsal,logsal,logsiv} = req.body;
async function actualizarDatosSalud(req,res) {
    const {departamento,municipio,areasal,sersal,dissal,dirsal,imgs,imgsiv} = req.body;
    try {        
        const pool = await getConexion();
        await pool.request()
        .input('dep',sql.VarChar(50),departamento)
        .input('mun',sql.VarChar(50),municipio)
        .input('aresal',sql.VarChar(50),areasal)
        .input('sersal',sql.VarChar(50),sersal)
        .input('dissal',sql.VarChar(50),dissal)
        .input('dirsal',sql.VarChar(100),dirsal)
        .input('imgs',sql.VarChar(200),imgs)
        .input('imgsiv',sql.VarChar(200),imgsiv)
        .execute('dbo.actualizardatossalud');
        respuesta.exito(req,res,{msg:'Datos Actualizados'},200);
    } catch (error) {
        console.log(error);
        respuesta.error(req,res,{msg:'error de servidor'},500);
    }
}



module.exports={
    obtnerDatosInstitucion,
    obtnerDatosMision,
    obtnerDatosVision,
    actualizarDatosInstitucion,
    actualizarMision,
    actualizarVision,
    obtnerDatosCentroSalud,
    actualizarDatosSalud
}