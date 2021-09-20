const {getConexion,sql} = require('../../sqlserver/sqlserverconexion.js');

sql.on('error',err=>{
    console.log(err)
})

async function getNombre() {
    try{
        const pool = await getConexion();  
        return result = await pool.request().query("select * from dbo.tbl_publicacion");

    }catch (err){
        return err;
    } 
}