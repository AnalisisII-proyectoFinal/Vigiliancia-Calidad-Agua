"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
import{ventanModal}from '../utilidades/VentanaModal.js';
import { EditarTanque } from './EditarTanque.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Tanques(){
    const $tanques = document.createElement('div');
        $tanques.classList.add("pagina");
        $tanques.setAttribute('id',"pg1");
        $tanques.setAttribute('style',"display:block;")
        $tanques.innerHTML=`
        <section class="contenedor-tanques">
        <h3>Listado de tanques registrados</h3>
        <hr>
        <div>
          <form action="" class="tanque-buscador">
          <input type="text" class="input-buscador" name="nombre" id="n-tanque" placeholder="nombre del tanque" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
            <table id="tabla-tanque">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>tamque</th>
                  <th>Ubicación</th>
                  <th>Fecha en funcionamiento</th>
                  <th>Largo</th>
                  <th>Ancho</th>
                  <th>Altura</th>
                  <th>Tratamiento</th>
                  <th>estado</th>
                  <th>opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>tanque 1</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>cloracion de agua</td>
                  <td>
                    <br>
                    <input type="checkbox"/>
                  </td>
                  <td>
                    <button class="editar">✏️</button>
                    <button class="eliminar">🗑️</button>
                    </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>tanque 2</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>cloracion de agua</td>
                  <td>
                    <br>
                    <input type="checkbox"/>
                  </td>
                  <td>
                    <button class="editar">✏️</button>
                    <button class="eliminar">🗑️</button>
                    </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>tanque 3</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>cloracion de agua</td>
                  <td>
                    <br>
                    <input type="checkbox"/>
                  </td>
                  <td>
                    <button class="editar">✏️</button>
                    <button class="eliminar">🗑️</button>
                    </td>
                <tr>
                  <td>4</td>
                  <td>tanque 4</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>cloracion de agua</td>
                  <td>
                    <br>
                    <input type="checkbox"/>
                  </td>
                  <td>
                    <button class="editar">✏️</button>
                    <button class="eliminar">🗑️</button>
                    </td>
                </tr>
              </tbody>
          </table>          
        </div>
    </section>
        `;
        function initEditarTanque(){
          document.getElementById('tabla-tanque').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarTanque());
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');

            }
          })
          const form = document.querySelector ('.tanque-buscador');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarTanque(),100);
        return $tanques;
}