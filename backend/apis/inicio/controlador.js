const {getConexion} = require('../../sqlserver/sqlserverconexion.js');

async function obtnerDatosInstitucion() {
    try{
        const pool = await getConexion();  
        return result = await pool.request().execute('dbo.uspObtnerDatosInstitucion');

    }catch (err){
        return err;
    } 
}

module.exports = {
    obtnerDatosInstitucion
}