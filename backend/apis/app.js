const express = require('express');
const cors = require('cors');
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
const auth = require('./auth/autenticacion.js');
const appmovil = require('./appmovil/appmovil.js');

//const multer = require('multer');
const path = require('path');


const app = express();

//app.set('pkg',pkg);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/* const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/imgcargados'),
    filename(req,file,cb){
        cb(null,new Date().getTime() + path.extname(file.originalname));
    }
}) */
//app.use(multer({storage}).single('imagen'));



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
app.use('/api/v1/appmovil',appmovil);


app.use(express.static(path.join(__dirname, '../public')));

module.exports=app;