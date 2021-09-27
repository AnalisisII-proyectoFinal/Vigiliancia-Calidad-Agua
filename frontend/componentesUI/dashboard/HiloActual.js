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
        <h3>Muestra Del: 21/05/2021 Al: 28/05/2021</h3>
        <hr>
        <div class="contenedor-grafica-dash">
          <div class="card-tanque-dash">
          <div class="card-progreso-d">
            <h3>tanque no. 1</h3>
            <div class="porcentaje">
              <p>75%</p>
            </div>
            <br>
              <progress max="100" value="75" class="progreso-muestra"></progress>
          </div>
          <div class="contentenido-tanque">
            <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar1</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="card-tanque-dash">
          <div class="card-progreso-d">
            <h3>tanque no. 1</h3>
            <div class="porcentaje">
              <p>50%</p>
            </div>
            <br>
              <progress max="100" value="55" class="progreso-muestra"></progress>
          </div>
          <div class="contentenido-tanque">
            <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar1</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="card-tanque-dash-e">
          <div class="card-progreso-d">
            <h3>tanque no. 1</h3>
            <div class="porcentaje-e">
              <p>35%</p>
            </div>
            <br>
              <progress max="100" value="35" class="progreso-muestra"></progress>
          </div>
          <div class="contentenido-tanque">
            <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar1</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="card-tanque-dash">
          <div class="card-progreso-d">
            <h3>tanque no. 1</h3>
            <div class="porcentaje">
              <p>35%</p>
            </div>
            <br>
              <progress max="100" value="35" class="progreso-muestra"></progress>
          </div>
          <div class="contentenido-tanque">
            <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar1</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="card-tanque-dash-e">
          <div class="card-progreso-d">
            <h3>tanque no. 1</h3>
            <div class="porcentaje-e">
              <p>35%</p>
            </div>
            <br>
              <progress max="100" value="35" class="progreso-muestra"></progress>
          </div>
          <div class="contentenido-tanque">
            <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar1</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
          </div>
      </div>
      </div>
    </section>
    `;
        return $hiloactual;
}