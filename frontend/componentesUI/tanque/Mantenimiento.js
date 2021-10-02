"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
import{ventanModal}from '../utilidades/VentanaModal.js';
import { EditarMantenimiento } from './EditarMantenimiento.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Mantenimiento(){
    const $mantenimiento = document.createElement('div');
        $mantenimiento.classList.add("pagina");
        $mantenimiento.setAttribute('id',"pg3");
        $mantenimiento.setAttribute('style',"display:none;")
        $mantenimiento.innerHTML=`
        <section class="contenedor-tanques">
    <div>
      <h2>Mantenimiento y mejoras de tanques</h2>
    <hr>
    <form action="" class="form-mantenimiento">
      <p><label for="" class="input-label">Titulo:</label>
        <input type="text" class="input-dato" name="titulo" id="ntitulo" placeholder="titulo" required=""/></p>
      <p><label for="" class="input-label">Descripcion:</label>
        <input type="text" class="input-dato" name="descripcion" id="n-mant" placeholder="descripcion" required=""/></p>
      <p><label for="" class="input-label">Fecha:</label>
        <input type="date" class="input-dato" name="fecha" id="n-fecha" placeholder="" required=""/></p>
      <p>
        <label for="" class="input-label">Fotografia:</label>
        <label class="input-archivo">
            <input type="file" id="file" aria-label="archivo">
            <span class="input-archivo-personalizado"></span>
          </label>
      </p>
      <p>
        <label class="input-label" for="">Tanque</label>
        <select class="input-opciones" id="">
          <option value="Opcion 1">tanque 1</option>
          <option value="Opcion 2">tanque 2</option>
          <option value="Opcion 3">Opcion 3</option>
          <option value="Opcion 4">Opcion 4</option>
          <option value="Opcion 5">Opcion 5</option>
        </select>
      </p>
    </form>
    <br>
    <button class="primer-btn">Guardar</button>
    </div>
<div>
    <h2>Historial de mantenimientos</h2>
    <hr>
    <table id="tabla-mantenimiento">
      <thead>
        <tr>
          <th>No.</th>
          <th>Tanque</th>
          <th>Titulo</th>
          <th>Descripción</th>
          <th>Fecaha</th>
          <th>Opciones</th>
          <th>detalles</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>1</td>
            <td>tanque 1</td>
            <td>mantenimineto</td>
            <td>reparación de tanque</td>
            <td>21/08/2021</td>
              <td>
              <button class="editar">✏️</button>
              <button class="eliminar">🗑️</button>
              </td>
            <td>
              <button class="primer-btn">ver</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>tanque 2</td>
            <td>reparación</td>
            <td>Mantenimiento</td>
            <td>21/08/2021</td>
            <td>
            <button class="editar">✏️</button>
            <button class="eliminar">🗑️</button>
            </td>
            <td>
              <button class="primer-btn">ver</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>tanque 3</td>
            <td>reparación</td>
            <td>Mantenimiento</td>
            <td>27/08/2021</td>
            <td>
            <button class="editar">✏️</button>
            <button class="eliminar">🗑️</button>
            </td>
            <td>
              <button class="primer-btn">ver</button>
            </td>
          </tr>
            </tbody>
        </table>          
  </div>
</section>
        `;
        function initEditarMantenimiento(){
          document.getElementById('tabla-mantenimiento').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarMantenimiento());
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');
            }
          })
          const form = document.querySelector ('.form-mantenimiento');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarMantenimiento(),100);
        return $mantenimiento;
}