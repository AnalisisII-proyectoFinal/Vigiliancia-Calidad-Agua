const {getConexion,sql} = require('../../sqlserver/sqlserverconexion.js');

async function registrarUsuario(us,con,per,est,emp) {
    try{
        const pool = await getConexion();  
        return result = await pool.request()
        .input('us',sql.VarChar,us)
        .input('con',sql.VarChar,con)
        .input('per',sql.Int,per)
        .input('est',sql.Int,est)
        .input('emp',sql.Int,emp)
        .query('INSERT INTO dbo.tbl_usuario(usuario,contrasena,id_permiso,estado,id_empleado) values(@us,@con,@per,@est,@emp)');

    }catch (err){
        return err;
    } 
    
}


async function obtnerusuarios() {
    try{
        const pool = await getConexion();  
        return result = await pool.request().query("SELECT * FROM dbo.tbl_usuario");

    }catch (err){
        return err;
    }
}

module.exports={
    registrarUsuario,
    obtnerusuarios
}




