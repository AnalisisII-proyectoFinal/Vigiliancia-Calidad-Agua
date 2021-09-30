const express = require('express');
const {obtnerHiloactual}=require('./controladores/hiloactual.ctrl.js');
const {obtnerHilo,obtnerHilos}=require('./controladores/historial.ctrl.js');


const router = express.Router();

// rutas

router.get('/hiloactual',obtnerHiloactual);
router.get('/historial',obtnerHilos);
router.get('/hilo',obtnerHilo)


module.exports = router;