const express = require('express');
const ctrl = require('./controladores')

const router = express.Router();

// rutas
//hilos
router.get('/hilos',ctrl.hilo.obtnerDatosHilos)
router.get('/hilo',ctrl.hilo.obtnerDatosHilo)
router.get('/hiloxfecha/:y/:m',ctrl.hilo.obtenerHilosXfecha);
router.get('/muestrasxhilo/:id',ctrl.hilo.obtenerMuestrasXHilo);
//nuevo hilo
router.post('/nuevohilo',ctrl.nuevohilo.nuevoHilo)
router.get('/tanquesopc',ctrl.nuevohilo.obtnerTanquesOpc)
router.post('/agregartanque',ctrl.nuevohilo.agregarTanque);
router.post('/agregartanques',ctrl.nuevohilo.agregarTanques);

//muestras
router.get('/muestra/:ig/:cant',ctrl.muestra.obtnerMuestras);
router.get('/hiloactual',ctrl.muestra.obtnerHiloActual);
router.post('/muestra',ctrl.muestra.nuevaMuestra);
router.put('/muestra',ctrl.muestra.actulizarMuestra);
router.put('/eliminarmuestra',ctrl.muestra.eliminarMuestra);
router.get('/muestrasincompletas/:id',ctrl.muestra.obtnerMuestrasIncompletas);

//tipomuestra
router.get('/tipomuestra',ctrl.tipomuestra.obtenerTipoMuestra);
router.post('/tipomuestra',ctrl.tipomuestra.nuevoTipoMuestra);
router.put('/tipomuestra',ctrl.tipomuestra.eliminarTipoMuestra);

module.exports = router;