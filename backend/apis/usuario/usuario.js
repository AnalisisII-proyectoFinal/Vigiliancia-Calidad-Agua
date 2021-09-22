const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {registrarUsuario,obtnerusuarios}=require('./controlador.js')
const {encriptar}=require('../utilidad/cifrado.js')

const router = express.Router();

// rutas

router.get('/',inicio);
router.post('/registrarusuario',nuevoUsuario)


async function nuevoUsuario(req,res) {
  const {us,con,per,est,emp}=req.body;
  let conEncrip= await encriptar(con);
  let result= await registrarUsuario(us,conEncrip,per,est,emp);
  console.log(us,conEncrip,per,est,emp);
  respuesta.exito(req,res,{result:'se registro el usuario'},200)
}
async function inicio(req,res) {
  const result = await obtnerusuarios();
  respuesta.exito(req,res,result,200); 
}


module.exports = router;