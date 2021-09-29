"use strict";
//@ts-check
/**
 * Modulo Muestra - encargado de ingresar las muestras y creacion de hilos
 * @module Constantes
 * @author nombre del 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * Importacion de componentes para el modulo
 * @requires componente:Opciones - opciones del modulo
 */
import { OpcMuestra } from './OpcMuestra.js';
import { Hilos } from './paginas/Hilos.js';
import { NuevoHilo } from './paginas/NuevoHilo.js';
import { IngresoMuestra } from './paginas/IngresoMuestra.js';
import { TipoMuestra } from './paginas/TipoMuestra.js';



/**
 * Unificacion de todos los componentes del modulo
 * @returns {HTMLDivElement}
 */
export function Muestra() {
    var f = new Date();
    let fecha = f.getFullYear() + "/" + (f.getMonth() +1) + "/" + f.getDay();
    
   // let datef = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
    console.log(fecha)
    const $muestra=document.createElement('section');
    $muestra.classList.add('contenedor-modulo');
    $muestra.appendChild(OpcMuestra());
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    $paginas.appendChild(Hilos());
    $paginas.appendChild(NuevoHilo(fecha));
    $paginas.appendChild(IngresoMuestra());
    $paginas.appendChild(TipoMuestra());
    $muestra.appendChild($paginas);
    return $muestra;
}