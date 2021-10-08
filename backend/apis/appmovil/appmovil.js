const express = require('express');
const ctrl = require('./controladores')

const router = express.Router();

router.get('/autenticacion/:user/:pass',ctrl.autenticacion.autenticarUsuario);
router.get('/tanques',ctrl.tanque.obtenerTanques);
router.get('/tipomuestra',ctrl.tipomuestra.obtenerTipoMuestra);
router.get('/hilo',ctrl.hilo.obtenerHilo);
router.get('/muestra',ctrl.muestra.obtenerMuestras)
router.get('/muestrasactivas/:id',ctrl.muestra.obtnerMuestrasActivas);

module.exports= router;