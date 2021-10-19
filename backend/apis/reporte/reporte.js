const express = require('express');
const {
  obtenerEmpleados,
  obtenerTanques,
  informeCentroSaludXHilo
}=require('./controladores/reporte.ctrl.js');
const router = express.Router();

// rutas
router.get('/informetanques',obtenerTanques);
router.get('/centrosaludxhilo/:idh',informeCentroSaludXHilo);
router.get('/informeempleados',obtenerEmpleados);
//router.get('/obtenerhilo/:m/:y',obtenerHilosXfecha);
module.exports = router;