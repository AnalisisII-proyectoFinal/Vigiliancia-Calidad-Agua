const app =require('./app.js');
const config = require('../config.js');
require('dotenv').config();

app.listen(config.api.port,()=>{
    console.log('api escuchando en el puerto',config.api.port)
})