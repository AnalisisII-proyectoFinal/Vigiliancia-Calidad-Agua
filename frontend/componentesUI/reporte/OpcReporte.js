"use strict";
//@ts-check
/**
 * Opciones del modulo Reporte
 * @module OpcReporte - opciones
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
export function OpcReporte(){
    const $opcreporte = document.createElement('div');
        $opcreporte.classList.add("menu-lateral");
        $opcreporte.innerHTML=`
                    <div><img src="./assets/img/reporte.svg" alt="img"></div>
                    <button id="btn-1" class="btn-modulo">Tanques</button>
                    <button id="btn-2" class="btn-modulo">Centro Salud</button>
                    <button id="btn-3" class="btn-modulo">Usuario</button>
        `;
        /**
         * inicio de funcionalidades
         */
    function iniReporte(){
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
    setTimeout(()=>iniReporte(),100);
    return $opcreporte;
}