const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {getConexion} = require('../../sqlserver/sqlserverconexion.js');
const router = express.Router();

// rutas

router.get('/',inicio);


function inicio(req,res,next) {
  res.json({saludo:'soy ruta ayuda'})
}


module.exports = router;