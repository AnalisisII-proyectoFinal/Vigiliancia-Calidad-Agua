const express = require('express');
const ctrl = require('./inicio.ctrl.js')

const router = express.Router();

router.get('/datosinstitucion',ctrl.obtnerDatosInstitucion);
router.get('/hiloactual',ctrl.obtnerHiloActual);
router.get('/publicaciones',ctrl.obtnerPublicaciones);
router.get('/progresoactual',ctrl.obtnerProgresoActual);

module.exports = router;