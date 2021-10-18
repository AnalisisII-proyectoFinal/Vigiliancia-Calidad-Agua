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
 * Contenedor del modulo 
 * @returns {void} - componentes del modulo
 */
export function Contenedor(){
    const $contenedor = document.createElement('div');
        $contenedor.classList.add('contenedor');
        $contenedor.setAttribute('id','contenedor-modulo');
    return $contenedor;
}