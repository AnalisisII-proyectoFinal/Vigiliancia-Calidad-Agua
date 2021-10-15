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

async function obtenerHilosXfecha(req,res) {
    const y=req.params.y;
    const m=req.params.m;
    try {
        const pool = await getConexion();
        const result = await pool.request()
                    .input('year',sql.Int,y)
                    .input('month',sql.Int,m)
                    .execute('dbo.uspobtenerhilos')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtenerMuestrasXHilo(req,res){
    const idh=req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request()
                    .input('idh',sql.Int,idh)
                    .execute('dbo.uspmuestrasxhilo')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
}


module.exports={
    obtnerDatosHilo,
    obtnerDatosHilos,
    obtenerHilosXfecha,
    obtenerMuestrasXHilo
}