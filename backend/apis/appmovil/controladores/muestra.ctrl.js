const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');
async function obtenerMuestras(req,res) {
        
    try {
        const $pool = await getConexion();
        const result=  await $pool.request().execute('dbo.appobtnermuestrascompletadas');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtnerMuestrasCompletas(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request()
        .execute('dbo.appobtnermuestrascompletadas');
        respuesta.exito(req,res,result.recordset,200)

    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtenerMuestrasIncompletas(req,res) {
    const idtanque=req.params.id;
    try {
        const pool = await getConexion();
        const resut = await pool.request()
        .input('idt',sql.Int,idtanque)
        .execute('dbo.obtenermuestrasincompletoapp');
        respuesta.exito(req,res,resut.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function nuevaMuestraApp(req,res) {
    const{idm,punto,ph,cl,idu}=req.body;
    try {
        
        const pool = await getConexion();
        await pool.request()
        .input('idm',sql.Int,idm)
        .input('punto',sql.VarChar(200),punto)
	    .input('ph',sql.VarChar(50),ph)
        .input('cl',sql.VarChar(50),cl)
	    .input('idu',sql.Int,idu)
        .execute('dbo.uspnuevamestraapp');
        respuesta.exito(req,res,{msg:'muestra actualizada'},200)
    } catch (error) {
        respuesta.error(req,res,{msg:'no se pudo actualizar'},500)
    }


    
}

module.exports={
    obtenerMuestras,
    obtnerMuestrasCompletas,
    obtenerMuestrasIncompletas,
    nuevaMuestraApp
}