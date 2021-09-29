const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerDatosHilo(req, res) {
    const {id} =req.body;
    try {
        const pool = await getConexion();
        const result = await pool.request()
                        .input('idhilo',sql.Int,id)
                        .execute('dbo.uspobtnerhilo')
        respuesta.exito(req,res,result.recordset,200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtnerDatosHilos(req, res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtnerhilos')
        respuesta.exito(req,res,result.recordset,200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}



module.exports={
    obtnerDatosHilo,
    obtnerDatosHilos
}