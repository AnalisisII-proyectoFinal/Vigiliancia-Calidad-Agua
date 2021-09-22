const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {buscarUsuario} = require('./controlador.js');
const router = express.Router();

router.post('/ingresar',ingresar)
async function ingresar(req,res) {
    const {usuario,contrasena}=req.body;
    let result= await buscarUsuario(usuario,contrasena);
    if (result==0) {
        respuesta.error(req,res,{mensaje:'erro contrasena'},500)
        
    }else{
        respuesta.exito(req,res,result,200)
    }
}

module.exports= router;