"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js';
import ServicioNotificacion from '../../utilidades/Notificacion.js';
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
          <div class="filtro-hilo">
          <div class="select">
            <select name="format" id="h-mes">
            <option selected disabled>mes</option>
            <option value="1">enero</option>
            <option value="2">febrero</option>
            <option value="3">marzo</option>
            <option value="4">abril</option>
            <option value="5">mayo</option>
            <option value="6">junio</option>
            <option value="7">julio</option>
            <option value="8">agosto</option>
            <option value="9">septiembre</option>
            <option value="10">octubre</option>
            <option value="11">noviembre</option>
            <option value="12">diciembre</option>
            </select>
          </div>
          <div>
            <input class="input-buscar" id="h-ano" type="number" placeholder="año" requerid>
            <input class="input-buscardor-btn" id="buscar-hilo" type="submit" value="Buscar">
          </div>
          </div>
          <br>
          <br>
        <div class="tabla-lista">
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
          const btnBuscar=document.getElementById('buscar-hilo');
          btnBuscar.addEventListener('click',(e)=>{
            e.preventDefault();
            const m=document.getElementById('h-mes').value;
            const y=document.getElementById('h-ano').value;
            if (m!='' && y!='') {
              console.log(y,m)
              const buscarHilo = new UiHilo();
              buscarHilo.obtnerHilosXFecha(y,m);
              
            }else{
              const llenarInput = new ServicioNotificacion();
              llenarInput.notificarToast('error','lleno todos datos')
            }
          })


          document.getElementById('lista-hilos').addEventListener('click',(e)=>{
            if(e.target.classList.contains('detalle')){
              const detalles = new UiHilo();
              detalles.obtenerMuestrasxhilo(e.target.getAttribute('_id'));
              //console.log(e.target.getAttribute('_id'))
              
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