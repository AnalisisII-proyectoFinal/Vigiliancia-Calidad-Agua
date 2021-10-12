const autenticacion = require('./auth.ctrl.js');
const tanque = require('./tanques.ctrl.js');
const hilo = require('./hilo.ctrl.js');
const muestra = require('./muestra.ctrl.js');

module.exports={
    autenticacion,
    tanque,
    hilo,
    muestra
}