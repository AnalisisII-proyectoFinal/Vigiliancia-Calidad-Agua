const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerHiloActual(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerhiloactual')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}




async function obtnerMuestras(req,res) {
    const ignorar = req.params.ig;
    const cantidad = req.params.cant;
    try {
        const pool = await getConexion();
        const result = await pool.request()
        .input('ig',sql.Int,ignorar)
        .input('fil',sql.Int,cantidad)
        .execute('dbo.uspobtenermuestras')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function nuevaMuestra(req,res) {
    const {tanque,tipo,punto,ph,cl,idus,idh,cliente}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('tanque',sql.Int,tanque)
        .input('tipo',sql.Int,tipo)
        .input('punto',sql.VarChar(200),punto)
        .input('ph',sql.VarChar(50),ph)
        .input('cl',sql.VarChar(50),cl)
        .input('idu',sql.Int,idus)
        .input('idh',sql.Int,idh)
        .input('client',sql.Int,cliente)
        .execute('dbo.uspnuevamuestra');
        respuesta.exito(req,res,{msg:'nueva muestra'},200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error.message,500);
    }
}

async function actulizarMuestra(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('id',sql.Int,id)
        .execute('')
        respuesta.exito(req,res,{msg:'actualizado'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function eliminarMuestra(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('idm',sql.Int,id)
        .execute('dbo.uspeliminarmuestra')
        respuesta.exito(req,res,{msg:'eliminado'},200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    }
}

async function obtnerMuestrasIncompletas(req,res) {
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


module.exports={
    obtnerMuestras,
    nuevaMuestra,
    eliminarMuestra,
    actulizarMuestra,
    obtnerHiloActual,
    obtnerMuestrasIncompletas
}