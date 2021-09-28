const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js')

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







async function nuevoHilo(req,res) {
    const {fechafin,descripcion,idusuario}=req.body;
    try {
        const pool= await getConexion();
        await pool.request()
            .input('fechaf',sql.Date,fechafin)
            .input('desc',sql.VarChar(200),descripcion)
            .input('idus',sql.Int,idusuario)
            .execute('dbo.uspcrearnuevohilo')
        respuesta.exito(req,res,{msg:'hilo crado satisfactoriament'},200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }    
}

module.exports={
    nuevoHilo,
    obtnerDatosHilo
}