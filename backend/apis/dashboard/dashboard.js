const express = require('express');
const ctrl = require('./controladores')


const router = express.Router();

// rutas

router.get('/progresoactual',ctrl.hiloactual.obtnerProgresoActual)

module.exports = router;