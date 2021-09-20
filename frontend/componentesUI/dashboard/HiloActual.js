"use strict";
//@ts-check
/**
 * div con los componentes del modulo
 * @returns {HTMLDivElement}
 */

import{DetalleTanque} from './DetalleTanque.js';
import{ventanModal} from '../utilidades/VentanaModal.js';
export function HiloActual(){
    const $hiloactual = document.createElement('div');
        $hiloactual.classList.add("pagina");
        $hiloactual.setAttribute('id',"pg1");
        $hiloactual.setAttribute('style',"display:block;")
        $hiloactual.innerHTML=`
        <section class="contenedor-dashboard">
        <h3>Hilo actual de muestras</h3>
        <h3>Del: 21/05/2021 Al: 28/05/2021</h3>
        <hr>
        <section class="contenedor-grafica-dash">
            <div class="card-progreso-dash">
                <h3>tanque no. 1</h3>
                <p class="progreso-dash"><progress min="0" max="100" value="50"></progress></p>
                <h3>porcentaje 50%</h3>
            </div>
            <div class="card-progreso-dash">
                <h3>tanque no. 1</h3>
                <p class="progreso-dash"><progress min="0" max="100" value="50"></progress></p>
                <h3>porcentaje 50%</h3>
            </div>
            <div class="card-progreso-dash">
                <h3>tanque no. 1</h3>
                <p class="progreso-dash"><progress min="0" max="100" value="50"></progress></p>
                <h3>porcentaje 50%</h3>
            </div>
        </section>
    </section>
    
        `;
        function iniHiloActual() {
            document.querySelector('.contenedor-grafica-dash').addEventListener('click',(e)=>{
                if(e.target.tagName ==='DIV'||e.target.tagName ==='H3'||e.target.tagName ==='P'){
                    ventanModal(DetalleTanque());
                }else  if (e.target.tagName ==='BUTTON') {
                    console.log('hola')
                }
            })   
            
        }
        setTimeout(()=>iniHiloActual(),100);
        return $hiloactual;
}