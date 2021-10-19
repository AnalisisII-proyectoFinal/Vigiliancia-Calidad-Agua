const {getConexion,sql} = require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtenerUsuarios(req,res){
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('');
            respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}

async function obtenerUsuario(req,res){
    const idu = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idu',sql.Int,idu).execute('');
            respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}

async function actualizarUsuario(req,res){
    const {}=req.body;
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('');
        respuesta.exito(req,res,result.recordset,200);   
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
}
async function eliminarUsuario(req,res){
    const idu = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idu',sql.Int,idu).execute('');
            respuesta.exito(req,res,result.recordset,200);
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