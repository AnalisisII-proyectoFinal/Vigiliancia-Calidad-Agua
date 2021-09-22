const express = require('express');
const router = express.Router();
const ctr = require('./controladores');
/**
 * Rutas de pagina insitutucion
 */
router.get('/institucion',ctr.institucion.obtnerDatos);
router.put('/institucion',);
/**
 * Rutas de pagina institucion/datos centro de salud
 */
router.get('/institucion/datoscentrosalud',ctr.institucion.obtnerDatosCentroSalud);
router.put('/institucion/datoscentrosalud',);
/**
 * Rutas de pagina appmovil
 */
router.get('/appmovil',ctr.appmovil.obtnerAppUsuarios);
router.post('appmovil',)
router.put('/appmovil',);
/**
 * Rutas de pagina de publicacion
 */
router.get('/publicacion',);
router.get('/publicacion/:id',);
router.post('/publicacion',);
router.put('/publicacion/:id',);
router.delete('/publicacion/:id',);
/**
 * Rutas de pagina copia de seguridad
 */
router.get('/copiaseguridad',);
router.post('/copiaseguridad',);

module.exports = router;

/*
async function institucion(req,res) {

  try {
      const result = await obtnerDatosInstitucion();
      respuesta.exito(req,res,result.recordset,200);
  } catch (error) {
      respuesta.error(req,res,error,500);
  }
}

async function actulizarDatos(req,res) {
  const{entidad,dependencia,aplicacion}=req.body;

  try {
      const result = await actulizarInstitucion(entidad,dependencia,aplicacion);
      respuesta.exito(req,res,result.recordset,200);
  } catch (error) {
      respuesta.error(req,res,error,500);
  }
}*/

/**
 const {getConexion,sql} = require('../../sqlserver/sqlserverconexion.js');

sql.on('error',err=>{
    console.log(err)
})

async function obtnerDatosInstitucion() {
    try{
        const pool = await getConexion();  
        return result = await pool.request().execute('dbo.uspObtnerDatosInstitucion');

    }catch (err){
        return err;
    } 
}

async function actulizarInstitucion(entidad,dependencia,applicacion) {
    try{
        const pool = await getConexion();  
        return result = await pool.request()
        .input('entidad',sql.VarChar,entidad)
        .input('dependencia',sql.VarChar,dependencia)
        .input('nombre_aplicacion',sql.VarChar,applicacion)
        .query('UPDATE dbo.tbl_institucion SET entidad=@entidad, dependencia=@dependencia,nombre_aplicacion=@nombre_aplicacion WHERE id=1;')

    }catch (err){
        return err;
    } 
}





module.exports={obtnerDatosInstitucion,actulizarInstitucion};
 */