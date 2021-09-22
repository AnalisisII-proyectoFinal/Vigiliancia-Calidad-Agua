const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {obtnerDatosInstitucion}= require('./controlador.js')

const router = express.Router();

// rutas
router.get('/',cargarDatos);

async function cargarDatos(req,res) {

    try {
        const result = await obtnerDatosInstitucion();
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}

module.exports = router;