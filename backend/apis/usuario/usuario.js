const express = require('express');
const ctrl = require('./controladores');
const router = express.Router();

// rutas

router.post('/nuevousuario',ctrl.nuevoUsuario.nuevoEmpleadoUsuario);
router.get('/obtenerpermisos',ctrl.nuevoUsuario.obtenerPermisos);
module.exports = router;