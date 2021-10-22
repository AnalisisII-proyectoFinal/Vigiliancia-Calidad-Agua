"use strict";
//@ts-check

/**
 * Modulo Muestra - encargado de ingresar las muestras y creacion de hilos
 * @module router - enrutador de componentes
 * @author autor
 * @copyright - 
 * @version 1.0
 */

/**
 * Importacion de modulos 
 * @requires modulo:inicio  -pagina inicial de la aplicacion
 * @requires componente:menupagina  -opciones iniciales del modulo inicial
 * @requires componente:menuapp -opciones  de navegacion en los modulos princiapales
 * @requires modulo:tanque -funcionalidades e interfaz del modulo
 * @requires modulo:muestra -funcionalidades e interfaz del modulo
 * @requires modulo:dashboard -funcionalidades e interfaz del modulo
 * @requires modulo:reporte -funcionalidades e interfaz del modulo
 * @requires modulo:usuario -funcionalidades e interfaz del modulo
 * @requires modulo:panel -funcionalidades e interfaz del modulo
 * @requires modulo:ayuda -funcionalidades e interfaz del modulo 
 */
import {Inicio} from './inicio/Inicio.js';
import{MenuPagina} from './aplicacion/paginas/MenuPagina.js';
import{MenuApp} from './aplicacion/paginas/MenuApp.js';
import{Login} from './aplicacion/paginas/Login.js';
import {Tanque} from './tanque/Tanque.js';
import {Muestra} from './muestra/Muestra.js';
import {Dashboard} from './dashboard/Dashboard.js';
import {Reporte} from './reporte/Reporte.js';
import {Usuario} from './usuario/Usuario.js';
import {Panel} from './panel/Panel.js';
import {Ayuda} from './ayuda/Ayuda.js';
import ServicioNotificacion from './utilidades/Notificacion.js';
import UiAplicacion from './aplicacion/ui/Aplicacion.ui.js';

const serNoti = new ServicioNotificacion();
const uIApp= new UiAplicacion();


/**
 * identificadores de los modulos
 * @type {string} -id de modulo
 */
const M_TANQUE='m-tanque';
const M_MUESTRA='m-muestra';
const M_DASHBOARD='m-dashboard';
const M_REPORTE='m-reporte';
const M_USUARIO='m-usuario';
const M_PANEL='m-panel';
const M_AYUDA='m-ayuda';  
/**
 * Enrutador de navegacion de modulos de aplicacion
 * @returns {void} - muestra el componente seleccionado
 */
export function Router(){
  const $contenedor = document.getElementById('contenedor-modulo');
  let $rol=0;
  if (localStorage.getItem('dataUser')) {
    let dataU=localStorage.getItem('dataUser');
    let dataParse=JSON.parse(dataU);
    $rol=dataParse.rol;
  }
    let {hash} = location;
    console.log(hash);
    $contenedor.innerHTML = null;
    switch (hash) {
      case '/':
      case '#/':
        $contenedor.appendChild(MenuPagina());
        $contenedor.appendChild(Inicio());
        uIApp.ocultarPerfil();
        break;
      case '#/app/login':
          $contenedor.appendChild(MenuPagina());
          $contenedor.appendChild(Login());
          uIApp.ocultarPerfil(); 
        break;
      case '#/app/tanque':
        if ($rol > 0) {
          $contenedor.appendChild(MenuApp(M_TANQUE));
          $contenedor.appendChild(Tanque());
          uIApp.mostrarPerfil();
        }else{
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }
        break;
      case '#/app/muestra':
        if ($rol > 0) {
          $contenedor.appendChild(MenuApp(M_MUESTRA));
          $contenedor.appendChild(Muestra());
          uIApp.mostrarPerfil();
        }else{
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }
        break;
      case '#/app/dashboard':
        if ($rol > 0) {
          $contenedor.appendChild(MenuApp(M_DASHBOARD));
          $contenedor.appendChild(Dashboard());
          uIApp.mostrarPerfil(); 
        }
        else{
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }
        break;
      case '#/app/reporte':
        if ($rol > 0) {
          $contenedor.appendChild(MenuApp(M_REPORTE));
          $contenedor.appendChild(Reporte());
          uIApp.mostrarPerfil();
        }
        else{
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }
        break;
      case '#/app/usuario':
        if ($rol === 0) {
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
          
        }else if ($rol > 0 && $rol != 3) {
          location.href='#/app/dashboard';
          serNoti.notificarToast("info","No tiene autorizacion")
        }else{
          $contenedor.appendChild(MenuApp(M_USUARIO));
          $contenedor.appendChild(Usuario());
          uIApp.mostrarPerfil();
        }

        break;
      case '#/app/panel':
        if ($rol === 0) {
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }else if ($rol > 0 && $rol != 3) {
          location.href='#/app/dashboard';
          serNoti.notificarToast("info","No tiene autorizacion")  
        }else{
          $contenedor.appendChild(MenuApp(M_PANEL));
          $contenedor.appendChild(Panel());
          uIApp.mostrarPerfil();
        }
        break;
      case '#/app/ayuda':
        if ($rol > 0) {
          $contenedor.appendChild(MenuApp(M_AYUDA));
          $contenedor.appendChild(Ayuda());
          uIApp.mostrarPerfil();
        }
        else{
          location.href='#/';
          serNoti.notificarToast("warning","Necesita Autenticacion")
        }
        break;
      default:
        $contenedor.appendChild(MenuPagina());
        $contenedor.appendChild(Inicio());
        uIApp.ocultarPerfil();
        break;
    }
}
