const express = require('express');
const ctrl = require('./controladores')

const router = express.Router();

router.get('/autenticacion/:user/:pass',ctrl.autenticacion.autenticarUsuario);
router.get('/tanques',ctrl.tanque.obtenerTanques);
router.get('/hilo',ctrl.hilo.obtenerHilo);
router.get('/muestra',ctrl.muestra.obtenerMuestras)
router.get('/muestrascompletadas',ctrl.muestra.obtnerMuestrasCompletas);
router.get('/muestrasincompletas/:id',ctrl.muestra.obtenerMuestrasIncompletas);
router.put('/nuevamuestra',ctrl.muestra.nuevaMuestraApp)

module.exports= router;