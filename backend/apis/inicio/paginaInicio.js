const express = require('express');
const ctrl = require('./inicio.ctrl.js');
const {validarToken}=require('../auth/verificarToken.js');

const router = express.Router();

router.get('/datosinstitucion',ctrl.obtnerDatosInstitucion);
router.get('/hiloactual',ctrl.obtnerHiloActual);
router.get('/publicaciones',ctrl.obtnerPublicaciones);
router.get('/progresoactual',ctrl.obtnerProgresoActual);
router.get('/misionvision',ctrl.obtnerMisionVision);
router.get('/infousuario/:id',ctrl.obtenerInformacionUsuario);
router.get('/obtenerdatosusuario/:id',ctrl.obtenerDatosUsuario);
router.put('/actualizardatosusuario/:id',ctrl.actualizarDatosUsuario);
router.post('/hello',validarToken,(req,res)=>{
    res.json({name:'Bienvenido'})
})

module.exports = router;