const express = require('express');
const {obtnerUsuario}= require('./controladores/usuarios.ctrl.js')
const {encriptar}=require('../utilidad/cifrado.js')

const router = express.Router();

// rutas

router.get('/usuarios',obtnerUsuario);


module.exports = router;