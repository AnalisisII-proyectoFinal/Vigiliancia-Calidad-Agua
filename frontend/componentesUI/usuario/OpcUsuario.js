"use strict";
//@ts-check
/**
 * Opciones del modulo Usuario
 * @module OpcUsuario - opciones
 * @author autor 
 * @copyright - ksksue
 * @version 1.0
 */
/**
 * importacion de modulos
 * @requires componente:funciones - mostrar, ocultar y resaltar componentes.
 */
import {mostrarComponente} from '../utilidades/MostrarComponente.js'
/**
 * @type {string} - id de paginas
 */

const BTN_1 = 'btn-1';

/**
 * Construye el  componente de opciones del modulo de muestras
 * @returns {HTMLDivElement} 
 */
export function OpcUsuario(){
    const $opcusuario = document.createElement('div');
        $opcusuario.classList.add("menu-lateral");
        $opcusuario.innerHTML=`
                    <img src="./assets/img/usear.svg" alt="img">
                    <button id="btn-1" class="btn-modulo">Lista de Usuarios</button>
                    <button id="btn-2" class="btn-modulo">Crear Usuarios</button>
                    
        `;
        /**
         * inicio de funcionalidades
         */
    function iniUsuario(){
      const opcModulo = document.querySelector('.menu-lateral');
        opcModulo.addEventListener('click',(e)=>{
          if(e.target && e.target.tagName === 'BUTTON'){
            mostrarComponente(e.target.id);
          }
        })     
      mostrarComponente(BTN_1);
    }
    /**
    * Temporizador para inicio de funcionalidades
    */
    setTimeout(()=>iniUsuario(),100);
    return $opcusuario;
}