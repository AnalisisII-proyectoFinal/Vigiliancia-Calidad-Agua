"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js';
import UiHilo from '../ui/Hilo.ui.js'
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Hilos(){
    const $hilos = document.createElement('div');
        $hilos.classList.add("pagina");
        $hilos.setAttribute('id',"pg1");
        $hilos.setAttribute('style',"display:block;")
        $hilos.innerHTML=`
        <section class="contenedor-muestras">
        <h3>Hilos de toma de muestra</h3>
        <hr>
        <form action="" class="form-filtro-hilos">
          <div class="select">
          <select name="format" id="format">
          <option selected disabled>mes</option>
          <option value="opcion1">enero</option>
          <option value="opcion2">febrero</option>
          <option value="opcion3">marzo</option>
          <option value="opcion4">abril</option>
          </select>
          </div>
          <div>
          <input class="input-buscar" type="text" placeholder="año">
          <input class="input-buscardor-btn" type="submit" value="Buscar">
          </div>
          </form>
          <br>
          <br>
        <div class="hilos-muestras">
        <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Inicio</th>
                  <th>Hasta</th>
                  <th>Etiqueta</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                  <th>Suspender</th>
                </tr>
              </thead>
              <tbody id="lista-hilos">
        </tbody>
    </table>
    </div>
  </section>
        `;
        function iniHilo(){
          document.getElementById('lista-hilos').addEventListener('click',(e)=>{
            if(e.target.classList.contains('detalle')){
              console.log(e.target.getAttribute('_id'))
            }else if(e.target.classList.contains('estado')){
              console.log(e.target.getAttribute('_id'))
            }
          })
        }
        setTimeout(()=>iniHilo(),100);
        return $hilos;
}

/**
 <tr>
                  <td>1</td>
                  <td>2021/01/10</td>
                  <td>2021/01/17</td>
                  <td>prueba</td>
                  <td>80%</td>
                  <td><button class="detalle">📇</button></td>
                  <td><input type="checkbox"/></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2021/01/10</td>
                  <td>2021/01/17</td>
                  <td>prueba</td>
                  <td>100%</td>
                  <td><button class="detalle">📇</button></td>
                  <td><input type="checkbox"/></td>
                </tr> 
 */