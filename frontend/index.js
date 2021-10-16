"use strict";
//@ts-check
/**
 * importacion del general
 * @requires modulo: App  todos los componentes de la aplicacion
 */
import {App,Init} from './App.js';
window.addEventListener('load',()=>{
    const preloader=document.querySelector('.contenedor-carga');
    setTimeout(()=>{
        preloader.style.opacity=0;
        preloader.style.visibility="hidden";
    },2000) 
})
document.addEventListener('DOMContentLoaded',Init);
window.addEventListener('hashchange',App);