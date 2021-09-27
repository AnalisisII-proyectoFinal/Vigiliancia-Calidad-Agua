const express = require('express');
const router = express.Router();
const ctr = require('./controladores');
/**
 * Rutas de pagina insitutucion
 */
router.get('/institucion',ctr.institucion.obtnerDatos);
router.put('/institucion',ctr.institucion.actualizarDatos);
/**
 * Rutas de pagina institucion/datos centro de salud
 */
router.get('/datoscentrosalud',ctr.institucion.obtnerDatosCentroSalud);
router.put('/datoscentrosalud',ctr.institucion.actualizarDatosSalud);
/**
 * Rutas de pagina appmovil
 */
router.get('/appmovil',ctr.appmovil.obtnerAppUsuarios);
router.post('/appmovilnuevo',ctr.appmovil.nuevoUsuarioApp);
router.put('/appmovilestado',ctr.appmovil.cambiarEstadoUsuario);
router.put('/eliminarusuario',ctr.appmovil.eliminarUsuario);
/**
 * Rutas de pagina de publicacion
 */
router.get('/publicacion',ctr.publicion.obtnerPublicaciones);
router.get('/publicacion/:id',);
router.post('/publicacion',ctr.publicion.nuevaPublicacion);
router.put('/eliminarpublic',ctr.publicion.eliminarPublicacion);
router.put('/actpublicacion',);
router.delete('/publicacion/:id',);
/**
 * Rutas de pagina copia de seguridad
 */
router.get('/copiaseguridad',);
router.post('/copiaseguridad',);

module.exports = router;

