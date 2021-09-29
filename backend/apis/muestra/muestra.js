const express = require('express');
const ctrl = require('./controladores')

const router = express.Router();

// rutas
router.get('/hilos',ctrl.hilo.obtnerDatosHilos)
router.get('/hilo',ctrl.hilo.obtnerDatosHilo)

router.post('/nuevohilo',ctrl.nuevohilo.nuevoHilo)
router.get('/tanquesopc',ctrl.nuevohilo.obtnerTanquesOpc)
router.post('/agregartanque',ctrl.nuevohilo.agregarTanque);
router.post('/agregartanques',ctrl.nuevohilo.agregarTanques);

//tipomuestra
router.get('/tipomuestra',);
router.post('/tipomuestra',);
router.put('/tipomuestra',);




module.exports = router;