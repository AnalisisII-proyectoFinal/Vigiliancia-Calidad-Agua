const express = require('express');
const router = express.Router();
const ctrl = require('./controladores');
/**
 * Rutas de pagina insitutucion
 */
router.get('/institucion',ctrl.institucion.obtnerDatosInstitucion);
router.get('/mision',ctrl.institucion.obtnerDatosMision);
router.get('/vision',ctrl.institucion.obtnerDatosVision);
router.put('/institucion',ctrl.institucion.actualizarDatosInstitucion);
router.put('/mision',ctrl.institucion.actualizarMision);
router.put('/vision',ctrl.institucion.actualizarVision);


//router.put('/institucion',ctr.institucion.actualizarDatos);
/**
 * Rutas de pagina institucion/datos centro de salud
 */
router.get('/datoscentrosalud',ctrl.institucion.obtnerDatosCentroSalud);
router.put('/datoscentrosalud',ctrl.institucion.actualizarDatosSalud);

/**
 * Rutas de pagina appmovil
 */
router.get('/appmovil',ctrl.appmovil.obtnerAppUsuarios);
router.post('/appmovilnuevo',ctrl.appmovil.nuevoUsuarioApp);
router.put('/appmovilestado',ctrl.appmovil.cambiarEstadoUsuario);
router.put('/eliminarusuario',ctrl.appmovil.eliminarUsuario);
/**
 * Rutas de pagina de publicacion
 */
router.get('/publicacion',ctrl.publicion.obtnerPublicaciones);
router.get('/publicacion/:id',);
router.post('/publicacion',ctrl.publicion.nuevaPublicacion);
router.put('/eliminarpublic',ctrl.publicion.eliminarPublicacion);
router.put('/actpublicacion',ctrl.publicion.actulizarPublicacion);
router.delete('/publicacion/:id',);
/**
 * Rutas de pagina copia de seguridad
 */
router.get('/copiaseguridad',);
router.post('/copiaseguridad',);

module.exports = router;

