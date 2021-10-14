"use strict";
//@ts-check
/**
 * Opciones del modulo Muestra
 * @module OpcMuestras - opciones
 * @author autor 
 * @copyright - ksksue
 * @version 1.0
 */
/**
 * importacion de modulos
 * @requires componente:funciones - mostrar, ocultar y resaltar componentes.
 */
import {mostrarComponente} from '../utilidades/MostrarComponente.js';
import UiHilo from './ui/Hilo.ui.js'
import UiIngMuestra from './ui/IngresoMuestra.ui.js';
import UiTipoMuestra from './ui/TipoMuestra.ui.js'; 
/**
 * @type {string} - id de paginas
 */

const BTN_1 = 'btn-1';

/**
 * Construye el  componente de opciones del modulo de muestras
 * @returns {HTMLDivElement} 
 */
export function OpcMuestra(){
  const $opcmuestra = document.createElement('div');
    $opcmuestra.classList.add("menu-lateral");
    $opcmuestra.innerHTML=`
      <div><img src="./assets/img/muestra.svg" alt="img"></div>
      <button id="btn-1" class="btn-modulo">Hilos Muestra</button>
      <button id="btn-2" class="btn-modulo">Nuevo Hilo</button>
      <button id="btn-3" class="btn-modulo">Ingreso Muestra</button>
      <button id="btn-4" class="btn-modulo">Tipo Muestra</button>
      `;
    /**
     * inicio de funcionalidades
     * @returns {void}
     */
  function iniMuestra(){
    const opcModulo = document.querySelector('.menu-lateral');
      opcModulo.addEventListener('click',(e)=>{
        if(e.target && e.target.tagName === 'BUTTON'){
          let idpag = e.target.id;
          mostrarComponente(idpag);
          if (idpag === 'btn-1') {
            const listarH = new UiHilo();
            listarH.obtnerHilos(); 
          }else if(idpag === 'btn-3'){
            const iniIngMuestra = new UiIngMuestra();
            iniIngMuestra.obtnerHilo();
            iniIngMuestra.obtenerMuestras();
            iniIngMuestra.obtnerTanquesOpc();
          }else if(idpag=== 'btn-4'){
            const initTipoMuestra = new UiTipoMuestra();
            initTipoMuestra.obtnerTipoMuestra();
          }
        }
      })     
      mostrarComponente(BTN_1);
      const listarHi = new UiHilo();
            listarHi.obtnerHilos(); 
  }
  setTimeout(()=>iniMuestra(),100);
  return $opcmuestra;
}