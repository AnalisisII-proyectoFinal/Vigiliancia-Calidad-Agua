const {getConexion,sql} = require('../../sqlserver/sqlserverconexion.js');
const {comparar}=require('../utilidad/cifrado.js')
const jwt= require('jsonwebtoken');
const config = require('../../config.js');
sql.on('error',err=>{
    console.log(err)
})

async function buscarUsuario(usuario,contrasena) {
    try{
        const pool = await getConexion();  
        const result = await pool.request()
        .input("usuario",sql.VarChar,usuario)
        .query("select id,usuario,contrasena from dbo.tbl_usuario WHERE usuario=@usuario");
        const compararContrasena= await comparar(contrasena,result.recordset[0].contrasena);

        if (!compararContrasena) {
            return 0;
        }
        const token= jwt.sign({id:result.recordset[0].id},config.jwt.secret,{
            expiresIn:86400
        });
        return token;
    }catch (err){
        return err;
    } 
}




module.exports={
    buscarUsuario
};