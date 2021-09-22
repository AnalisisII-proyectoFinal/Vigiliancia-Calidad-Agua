"use strict";
//@ts-check
/**
 * importacion del general
 * @requires modulo: App  todos los componentes de la aplicacion
 */
import {App,Init} from './App.js';
/**-- escuchadores al documento --- */
document.addEventListener('DOMContentLoaded',Init);
window.addEventListener('hashchange',App);