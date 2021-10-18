"use strict";
//@ts-check
/**
 * Contenedor del modulo
 * @module ventana-moddal
 * @author krick07
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * @import contenedor 
 */
import{Contenedor}from './Contenedor.js';
/**
 * main del documento 
 * @returns {void} - componentes del modulo
 */
export function Cuerpo(){
    const $cuerpo = document.createElement('main');
    $cuerpo.appendChild(Contenedor());
    return $cuerpo;
}