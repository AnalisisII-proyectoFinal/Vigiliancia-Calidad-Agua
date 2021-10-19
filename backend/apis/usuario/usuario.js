const express = require('express');
const ctrl = require('./controladores');
const router = express.Router();

// rutas

router.post('/nuevousuario',ctrl.nuevoUsuario.nuevoEmpleadoUsuario);
router.get('/obtenerpermisos',ctrl.nuevoUsuario.obtenerPermisos);

router.get('/usuarios',ctrl.usuarios.obtenerUsuarios);
router.get('/usuario',ctrl.usuarios.obtenerUsuario);
router.put('/usuario',ctrl.usuarios.actualizarUsuario);
router.delete('/usuario',ctrl.usuarios.eliminarUsuario);
module.exports = router;