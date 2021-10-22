const {getConexion,sql} = require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');
const {comparar}=require('../../utilidad/cifrado.js');
const config = require('../../../config.js')
const jwt= require('jsonwebtoken');

async function autenticarUsuario(req,res) {
    const {user,pass}=req.body;
    try{
        const pool = await getConexion();  
        const result = await pool.request()
                        .input("usuario",sql.VarChar(100),user)
                        .execute('dbo.uspobtenerusuario');
        console.log(result)
        if (result.recordset.length === 0) {
             respuesta.exito(req,res,{msg:'Credenciales Incorrectos',t:0},200)
        }else{
            const compararContrasena = await comparar(pass,result.recordset[0].contrasena);
            if (!compararContrasena) {
                 respuesta.exito(req,res,{msg:'Credenciales Incorrectos',t:0},200);
            }else{
                const token= jwt.sign({id:result.recordset[0].id},config.jwt.secret,{
                    expiresIn:86400
                });
                const authExito={
                    msg:"Bienvenido",
                    t:token,
                    id:result.recordset[0].id,
                    rol:result.recordset[0].per,
                    cloudinary:config.cloudinary.cloud,
                    presets:config.cloudinary.presets,
                }    
                respuesta.exito(req,res,authExito,200)
            }  
        }
    }catch (error){
        console.log(error)
        respuesta.error(req,res,{msg:"Error Servidor"},500)
    } 
}

module.exports={
    autenticarUsuario
}