"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
import { EditarNuevoHilo } from './EditarNuevoHilo.js';
import{ventanModal}from '../utilidades/VentanaModal.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function NuevoHilo(){
    const $nuevohilo = document.createElement('div');
        $nuevohilo.classList.add("pagina");
        $nuevohilo.setAttribute('id',"pg2");
        $nuevohilo.setAttribute('style',"display:none;")
        $nuevohilo.innerHTML=`
        <section class="contenedor-muestras">
        <div class="color-hilo">
            <h2 id="titulo">Crear nuevo hilo de muestras</h2>
            <hr> 
            <form action="" class="form-hilo">
                <p><label for="" class="input-label">Fecha de inicio:</label>
                    <input type="date" class="input-dato" name="fecha" id="n-inico" placeholder="" required=""/></p>
                <p><label for="" class="input-label">Fecha de finalizacón:</label>
                    <input type="date" class="input-dato" name="fecha" id="n-final" placeholder="" required=""/></p>
                <p>
                    <label class="input-label" for="">Responsables</label>
                    <select class="input-opciones" id="">
                            <option value="Opcion 1">Opcion 1</option>
                            <option value="Opcion 2">Opcion 2</option>
                            <option value="Opcion 3">Opcion 3</option>
                            <option value="Opcion 4">Opcion 4</option>
                            <option value="Opcion 5">Opcion 5</option>
                    </select>
                </p>
                <button class="primer-btn">Crear</button>
            </form>
        </div>
        <div>
            <h2>Agregar tanques al hilo</h2>
            <hr>
            <div class="agregar-tanque">
            <form action="">
                    <div>
                    <label class="input-label" for="">Tanques: </label>
                    <select class="input-opciones" id="">
                            <option value="Opcion 1">Tanque 1</option>
                            <option value="Opcion 2">Tanque 2</option>
                            <option value="Opcion 3">Tanque 3</option>
                            <option value="Opcion 4">Tanque 4</option>
                            <option value="Opcion 5">Tanque 5</option>
                    </select>
                    </div>
                <button class="primer-btn">Agregar</button>
            </form>
            <table id="tabla-nuevohilo">
                <thead>
                    <tr>
                      <th>No.</th>
                      <th>Responsables</th>
                      <th>Fecha de inicio</th>
                      <th>Fecha de finalizacón</th>
                      <th>Tanques</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>tanque 1</td>
                      <td>21/08/2021</td>
                      <td>24/08/2021</td>
                      <td>1</td>
                      <td>
                      <button class="editar">✏️</button>
                      <button class="eliminar">🗑️</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Tanque 2</td>
                      <td>20/07/2021</td>
                      <td>22/07/2021</td>
                      <td>2</td>
                      <td>
                      <button class="editar">✏️</button>
                      <button class="eliminar">🗑️</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Tanque 3</td>
                      <td>19/08/2021</td>
                      <td>21/08/2021</td>
                      <td>3</td>
                      <td>
                      <button class="editar">✏️</button>
                      <button class="eliminar">🗑️</button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tanque 4</td>
                      <td>25/08/2021</td>
                      <td>26/08/2021</td>
                      <td>4</td>
                      <td>
                      <button class="editar">✏️</button>
                      <button class="eliminar">🗑️</button>
                      </td>
                    </tr>
            </table>
            </div>
        </div>
    </section>
</section> 
        `;
        function initEditarNuevoHilo(){
          document.getElementById('tabla-nuevohilo').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarNuevoHilo());
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');
            }
          })
          const form = document.querySelector ('.form-hilo');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarNuevoHilo(),100);
        return $nuevohilo;       
}