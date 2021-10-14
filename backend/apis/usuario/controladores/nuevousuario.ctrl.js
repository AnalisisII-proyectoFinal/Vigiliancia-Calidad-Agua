const {getConexion,sql} = require('../../../sqlserver/sqlserverconexion.js')
const {encriptar} = require('../../utilidad/cifrado.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function nuevoEmpleadoUsuario(req,res) {
    const{pn,sn,pa,sa,dpi,sex,dir,carg,tel,corr,fnaci,uria,user,pass,perm}=req.body;
    let passEncriptado = await encriptar(pass);
    console.log(user,passEncriptado);
    try {
        const pool = await getConexion();
        await pool.request()
        .input('pn',sql.VarChar(100),pn)
        .input('sn' ,sql.VarChar(100),sn)
        .input('pa' ,sql.VarChar(100),pa)
        .input('sa' ,sql.VarChar(100),sa)
        .input('dpi', sql.VarChar(100),dpi)
        .input('sex', sql.VarChar(100),sex)
        .input('dir', sql.VarChar(100),dir)
        .input('carg', sql.VarChar(100),carg)
        .input('tel', sql.VarChar(100),tel)
        .input('corr',sql.VarChar(100),corr)
        .input('fnaci',sql.Date,fnaci)
        .input('uria',sql.VarChar(200),uria)
        .input('usuario',sql.VarChar(100),user)
        .input('pass',sql.VarChar(200),passEncriptado)
        .input('perm',sql.Int,perm)
        .execute('dbo.uspempleadousuario')
        respuesta.exito(req,res,{msg:'Se registro nuevo empleado'},200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}


async function obtenerPermisos(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerpermisos');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
}


module.exports={
    nuevoEmpleadoUsuario,
    obtenerPermisos
}
