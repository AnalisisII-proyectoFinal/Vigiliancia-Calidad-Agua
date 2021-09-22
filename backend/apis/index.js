const express = require('express');
const cors = require('cors');
const config = require('../config.js');
const morgan = require('morgan');
const usuario = require('./usuario/usuario.js');
const inicio = require('./inicio/paginaInicio.js');
const tanque = require('./tanque/tanque.js');
const muestra = require('./muestra/muestra.js');
const dashboard = require('./dashboard/dashboard.js');
const reporte = require('./reporte/reporte.js');
const panel = require('./panel/panel.js');
const ayuda = require('./ayuda/ayuda.js');
const pkg=require('../package.json');
const auth = require('./auth/index.js');
const {verificacarToken}=require('./auth/autenticacion.js')
require('dotenv').config();


const app = express();
app.set('pkg',pkg);

//configuraciones
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*
app.get('/',(req,res)=>{
    res.json({
        name:app.get('pkg').name,
        author: app.get('pkg').author,
        description:app.get('pkg').description,
        vesion:app.get('pkg').version
    })
});*/
app.use('/api/v1/auth',auth)
app.use('/api/v1/inicio',inicio);
app.use('/api/v1/tanque',tanque);
app.use('/api/v1/muestra',muestra);
app.use('/api/v1/dashboard',dashboard);
app.use('/api/v1/reporte',reporte);
app.use('/api/v1/usuario',usuario);
app.use('/api/v1/panel',panel);
app.use('/api/v1/ayuda',ayuda);


app.listen(config.api.port,()=>{
    console.log('api escuchando en el puerto',config.api.port)
})