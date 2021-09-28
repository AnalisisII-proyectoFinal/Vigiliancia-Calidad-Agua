"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcUsuario} from './OpcUsuario.js';
import { ListaUsuarios } from './ListaUsuarios.js';
import { CreaUsuarios } from './CreaUsuarios.js';


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Usuario() {
    /**panel contenedor del modulo */
    const $usuario=document.createElement('section');
    $usuario.classList.add('contenedor-modulo');
    $usuario.appendChild(OpcUsuario());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    $paginas.appendChild(ListaUsuarios());
    $paginas.appendChild(CreaUsuarios());
    $usuario.appendChild($paginas);
    return $usuario;
}