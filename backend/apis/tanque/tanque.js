const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {getConexion} = require('../../sqlserver/sqlserverconexion.js');
const router = express.Router();

// rutas

router.get('/',iniTanque);

async function iniTanque(req,res,next) {
  respuesta.exito(req,res,{saludo:'soy ruta tanque'},200);
}


module.exports = router;