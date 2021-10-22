const express = require('express');
const ctrl = require('./controladores')
const router = express.Router();

// rutas nuevo tanque

router.get('/tanques',ctrl.tanque.obtenerTanques);
router.get('/tanques/:id',ctrl.tanque.obtenerTanque);
router.post('/tanque',ctrl.tanque.nuevoTanque);
router.put('/tanque',ctrl.tanque.actualizarTanque);
router.delete('/tanque/:id',ctrl.tanque.eliminarTanque);

// mantenimiento
 
router.get('/mantenimiento',ctrl.mantenimiento.obtenerMantenimientos);
router.get('/manttanques',ctrl.mantenimiento.obtnerTanques);
router.get('/mantenimiento/:id',ctrl.mantenimiento.obtenerMantenimiento);
router.post('/mantenimiento',ctrl.mantenimiento.crearMantenimiento);
router.put('/mantenimiento',ctrl.mantenimiento.actualizarMantenimiento);
router.delete('/mantenimiento/:id',ctrl.mantenimiento.eliminarMantenimiento);

//metodo cloracion
router.get('/metodocl',ctrl.metodocl.obtenerMetodosCloracion);
router.get('/metodocl/:id',ctrl.metodocl.obtenerMetodoCloracion);
router.post('/metodocl',ctrl.metodocl.crearMetodoCloracion);
router.put('/metodocl',ctrl.metodocl.actualizarMetodoCloracion);
router.delete('/metodocl/:id',ctrl.metodocl.eliminarMetodoCloracion);

module.exports = router;

/* 
router.get('/tanques',(req,res)=>{
  res.json([{
    idt:1,
    tanq:"tanque 1",
    num:2,
    ubic:"centro municipio",
    ffuncion:"01-05-2021",
    largo:"1mts",
    ancho:"2mts",
    altura:"3mts",
    tpcloro:"pastillas"
  },
  {
    idt:1,
    tanq:"tanque 1",
    num:2,
    ubic:"centro municipio",
    ffuncion:"01-05-2021",
    largo:"1mts",
    ancho:"2mts",
    altura:"3mts",
    tpcloro:"pastillas"
  }])
});

router.post('/nuevotanque',(req,res)=>{
  console.log(req.body)
})
router.get('/metodocloro',(req,res)=>{
  res.json([{
    id:1,
    mcl:"pastilla"
  },{
    id:2,
    mcl:"otro"
  }])
})

router.get('/tanque',(req,res)=>{
  console.log(req.body.idt)
  res.json([{
    idt:1,
    nombre:"tanque 1",
    numero:2,
    ubicacion:"centro municipio",
    fechaf:"01-05-2021",
    largo:"1mts",
    ancho:"2mts",
    altura:"3mts",
    img:"https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg"
  }])
})

router.delete('/tanque',(req,res)=>{
  console.log(req.body.idt)
  console.log("eliminando");
  res.json({msg:'eliminado'})
}) */