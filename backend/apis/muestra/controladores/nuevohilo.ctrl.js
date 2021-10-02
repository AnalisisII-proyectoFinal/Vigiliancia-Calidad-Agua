const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerTanquesOpc(req,res) {
    try {
        const pool= await getConexion();
        const result = await pool.request().execute('dbo.uspobtnetanquesopc')
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
        respuesta.exito(req,res,{msg:'hilo crado satisfactoriamente'},200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }    
}

async function agregarTanque(req,res) {
    const{idtanque}=req.body;
    try {
        const pool= await getConexion();
        await pool.request()
            .input('idtanque',sql.Int,idtanque)
            .execute('dbo.uspagregartanquehilo')
        respuesta.exito(req,res,{msg:'tanque agregado'},200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function agregarTanques(req,res) {
    try {
        const pool= await getConexion();
        await pool.request().execute('dbo.uspagregartanqueshilo')
        respuesta.exito(req,res,{msg:'tanques agregados'},200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}


module.exports={
    nuevoHilo,
    obtnerTanquesOpc,
    agregarTanque,
    agregarTanques
}