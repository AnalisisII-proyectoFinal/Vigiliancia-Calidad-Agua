const express = require('express');
const respuesta = require('../../respuesta/respuesta.js');
const {getConexion,sql} = require('../../sqlserver/sqlserverconexion.js');
const router = express.Router();

// rutas

router.get('/',inicio);


async function inicio(req,res,next) {

  const pool = await getConexion();

  pool.request()
  .input('primernombre', sql.VarChar(30), 'Kevin')
  .execute('pr_obtnerempleado_usuario').then(result=>{
    console.dir(result)
  }).catch(err=>{
    console.log(err)
  })
}


module.exports = router;