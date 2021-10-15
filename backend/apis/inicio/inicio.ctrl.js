const {getConexion,sql}=require('../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../respuesta/respuesta.js');
const {encriptar}=require('../utilidad/cifrado.js');

async function obtnerDatosInstitucion(req,res) {
    try{
        const pool = await getConexion();  
        const result = await pool.request().execute('dbo.uspObtnerDatosInstitucion');
        respuesta.exito(req,res,result.recordset,200)

    }catch (err){
        respuesta.error(req,res,error,500);
    } 
}

async function obtnerHiloActual(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerhiloactual');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}

async function obtnerPublicaciones(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerpublicaciones');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}



async function obtnerProgresoActual(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerdatoshiloactual')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function obtnerMisionVision(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenermisionvision')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    } 
}

async function obtenerInformacionUsuario(req,res) {
    const idu=req.params.id
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idu',sql.Int,idu).execute('dbo.obtenerdatosusuario');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error'},500)
    }
    
}

async function obtenerDatosUsuario(req,res) {
    const id = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('id',sql.Int,id).execute('dbo.tbl_obtenerdatosusuarioedit')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }    
}

async function actualizarDatosUsuario(req,res) {
    const id= req.params.id;
    const {av,tel,dir,em}=req.body;
    console.log(id);
    console.log(req.body);
    try {
        const pool = await getConexion();
        await pool.request()
                    .input('id',sql.Int,id)
                    .input('avatar',sql.VarChar(200),av)
                    .input('tel',sql.VarChar(100),tel)
                    .input('dir',sql.VarChar(200),dir)
                    .input('em',sql.VarChar(100),em)
                    .execute('dbo.uspactualizardatosusuarioperfil')
        respuesta.exito(req,res,{msg:'Datos actualizado'},200)
        
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500)
        
    }
}

async function actualizarContrasena(req,res) {
    const {id,pass} = req.body;
    const passEncript= await encriptar(pass);
    try {
        const pool = await getConexion();
        await pool.request().input('id',sql.Int,id).input('pass',sql.VarChar(200),passEncript)
        .execute('dbo.uspactualizarcontrasena');
        respuesta.exito(req,res,{msg:'dato actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Erro de servidor'},500)
    }  
}

async function actualizarPin(req,res) {
    const id=req.params.id;
    const {pin} = req.body;
    try {
        const pool = await getConexion();
        await pool.request().input('id',sql.Int,id).input('pin',sql.Int,pin)
        .execute('dbo.uspactualizarpin');
        respuesta.exito(req,res,{msg:'dato actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Erro de servidor'},500)
    }  
}


module.exports = {
    obtnerDatosInstitucion,
    obtnerHiloActual,
    obtnerPublicaciones,
    obtnerProgresoActual,
    obtnerMisionVision,
    obtenerInformacionUsuario,
    obtenerDatosUsuario,
    actualizarDatosUsuario,
    actualizarContrasena,
    actualizarPin
}