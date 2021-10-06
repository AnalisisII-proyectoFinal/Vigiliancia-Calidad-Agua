const {getConexion,sql}=require('../../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../../respuesta/respuesta.js');

async function obtnerPublicaciones(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerpublicaciones');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,{msg:'error servidor'},500);
    }
}

async function nuevaPublicacion(req,res) {
    const{titulo,fecha,descripcion}=req.body;
    const uri_img = (req.file==undefined)?'':'/imgcargados/' + req.file.filename;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('titulo',sql.VarChar(100),titulo)
        .input('fecha',sql.Date,fecha)
        .input('descripcion',sql.Text,descripcion)
        .input('img',sql.VarChar(200),uri_img)
        .execute('dbo.uspnuevapublicacion')
        respuesta.exito(req,res,{msg:'publicacion creada'},200);
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
    
}

async function eliminarPublicacion(req,res) {
    const {id}=req.body;
    try {
        const pool = await getConexion();
        await pool.request().input('id',sql.Int,id).execute('dbo.uspeliminarpublicacion');
        respuesta.exito(req,res,{msg:'publicacion eliminado'},200)
    } catch (error) {
        respuesta.error(req,res,error,500)        
    }
    
}

async function actulizarPublicacion(req,res) {
    const {id,descripcion}=req.body;
    const uri_img = (req.file==undefined)?'':'/imgcargados/' + req.file.filename;
    try {
        const pool = await getConexion();
        await pool.request()
        .input('id',sql.Int,id)
        .input('desc',sql.Text,descripcion)
        .input('img',sql.VarChar(200),uri_img)
        .execute('dbo.uspactualizarpublicacion');
        respuesta.exito(req,res,{msg:'publicacion eliminado'},200)
        
    } catch (error) {
        respuesta.error(req,res,error,500)  
    }
    
}



module.exports={
    obtnerPublicaciones,
    nuevaPublicacion,
    eliminarPublicacion,
    actulizarPublicacion

}