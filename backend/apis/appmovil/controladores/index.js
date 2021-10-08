const autenticacion = require('./auth.ctrl.js');
const tanque = require('./tanques.ctrl.js');
const tipomuestra = require('./tipomuestra.ctrl.js');
const hilo = require('./hilo.ctrl.js');
const muestra = require('./muestra.ctrl.js');

module.exports={
    autenticacion,
    tanque,
    tipomuestra,
    hilo,
    muestra
}