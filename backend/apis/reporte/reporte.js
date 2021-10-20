const express = require('express');
const {
  obtenerEmpleados,
  informeCentroSaludXHilo,
  obtenerUltimosHilos,
  obtenerHilosXfecha
}=require('./controladores/reporte.ctrl.js');
const {obtenerTanques, obtenerDetalleTanque}=require('./controladores/tanque.ctrl.js');
const router = express.Router();

// rutas
router.get('/tanques',obtenerTanques);
router.get('/tanque/:id',obtenerDetalleTanque);
router.get('/informeempleados',obtenerEmpleados);
router.get('/centrosaludxhilo/:idh',informeCentroSaludXHilo);
router.get('/ultimoshilos',obtenerUltimosHilos);
router.get('/obtenerhilo/:m/:y',obtenerHilosXfecha);
module.exports = router;