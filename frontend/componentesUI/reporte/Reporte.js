"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import { OpcReporte } from './OpcReporte.js';
import { ReporteTanque } from './ReporteTanque.js'; 
import { ReporteCentroSalud } from './ReporteCentroSalud.js';
import { ReporteUsuario } from './ReporteUsuario.js';

/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Reporte() {
    /**panel contenedor del modulo */
    const $reporte=document.createElement('section');
    $reporte.classList.add('contenedor-modulo');
    $reporte.appendChild(OpcReporte());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    $paginas.appendChild(ReporteTanque());
    $paginas.appendChild(ReporteCentroSalud());
    $paginas.appendChild(ReporteUsuario());
    $reporte.appendChild($paginas);
    return $reporte;
}