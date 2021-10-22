const {getConexion,sql} = require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerUsuarios(req,res){
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerempleados');
            respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}

async function obtenerUsuario(req,res){
    const ide = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('ide',sql.Int,ide).execute('dbo.uspobtenerempleado');
            respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}

async function actualizarUsuario(req,res){
    const{ide,pn,sn,pa,sa,dpi,sex,dir,carg,tel,corr,fnaci}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('ide',sql.Int,ide)
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
        .execute('dbo.uspactualizarempleado');
        respuesta.exito(req,res,{msg:'Actualizado'},200);   
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}
async function eliminarUsuario(req,res){
    const ide = req.params.id;
    try {
        const pool = await getConexion();
        await pool.request().input('ide',sql.Int,ide).execute('uspeliminarempleado');
            respuesta.exito(req,res,{msg:'Eliminado'},200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}

module.exports={
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
}