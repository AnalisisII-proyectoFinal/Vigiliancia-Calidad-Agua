const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');
const {comparar}=require('../../utilidad/cifrado.js')

async function autenticarUsuario(req,res) {
    const user=req.params.user;
    const pass=req.params.pass;
    try {
        const $pool = await getConexion();
        const result = await $pool.request()
                       .input('usuario',sql.VarChar(100),user)
                       .execute('dbo.uspautenticarusuarioapp');
        if (result.recordset.length === 0) {
                        respuesta.exito(req,res,result.recordset,200)
        }else{
            const compararContrasena = await comparar(pass,result.recordset[0].pass);


            if (!compararContrasena) {
                    respuesta.exito(req,res,{},200);
            }else if(result.recordset[0].estado===0){
                    respuesta.exito(req,res,{},200);
            }else{
                respuesta.exito(req,res, result.recordset,200);
            }
        }
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500);
    }
    
}


module.exports={
    autenticarUsuario
}