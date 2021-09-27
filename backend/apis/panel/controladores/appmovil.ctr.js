const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerAppUsuarios(req,res) {
    try {
        const pool = await getConexion();
        const resultDB = await pool.request().execute('dbo.uspobtnerusuariosappmovil');
        respuesta.exito(req,res,resultDB.recordset,200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    } 
}

async function cambiarEstadoUsuario(req,res) {
    const {id,acceso} = req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idu',sql.Int,id)
        .input('acceso',sql.Int,acceso)
        .execute('dbo.uspcambiarestadousuariomovil');
        respuesta.exito(req,res,{msg:'Se cambio el acceso del usuario'},200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    } 
    
}

async function eliminarUsuario(req,res) {
    const {id} = req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idus',sql.Int,id)
        .execute('dbo.uspeliminarusuariomovil');
        respuesta.exito(req,res,{msg:'Se elimino el usuario'},200);         
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function nuevoUsuarioApp(req,res) {
    const {usuario}=req.body;
    try {
        let rop='not-found';
        const pool = await getConexion();
        const result = await pool.request()
        .input('usuario',sql.VarChar(50),usuario)
        .output('result',sql.Int)
        .execute('dbo.uspnuevousuarioapp')
        console.log(result.output.result);
        if (result.output.result == 1) {
            rop="se agrego el usuario";
        }else{
            rop="El usuario no existe o ya esta agregado";
        }
        respuesta.exito(req,res,{msg:rop},200);
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}




module.exports={
    obtnerAppUsuarios,
    cambiarEstadoUsuario,
    eliminarUsuario,
    nuevoUsuarioApp
}