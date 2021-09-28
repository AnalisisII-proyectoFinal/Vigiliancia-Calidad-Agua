const express = require('express');
const ctrl = require('./controladores')

const router = express.Router();

// rutas

router.post('/nuevohilo',ctrl.hilo.nuevoHilo)
router.get('/hilo',ctrl.hilo.obtnerDatosHilo)





module.exports = router;