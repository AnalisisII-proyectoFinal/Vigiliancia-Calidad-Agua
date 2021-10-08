const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function autenticarUsuario(req,res) {
    const user=req.params.user;
    const pass=req.params.pass;
    try {
        const $pool = await getConexion();
        const result = await $pool.request()
                       .input('usuario',sql.VarChar(100),user)
                       .input('pass',sql.VarChar(100),pass)
                       .execute('dbo.uspautenticarusuarioapp');
        respuesta.exito(req,res, result.recordset,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500);
    }
    
}


module.exports={
    autenticarUsuario
}