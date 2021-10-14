const express = require('express');
const ctrl = require('./controladores');
const router = express.Router();


router.post('/autenticarusuario',ctrl.autenticar.autenticarUsuario)

module.exports= router;