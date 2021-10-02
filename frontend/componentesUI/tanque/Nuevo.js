"use strict";
//@ts-check

import{validarInput}from '../utilidades/ValidarFormulario.js'
import{EditarNuevo}from './EditarNuevo.js'; 
import{ventanModal}from '../utilidades/VentanaModal.js';

/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Nuevo(){
    const $nuevo = document.createElement('div');
        $nuevo.classList.add("pagina");
        $nuevo.setAttribute('id',"pg2");
        $nuevo.setAttribute('style',"display:none;")
        $nuevo.innerHTML=`
        <section class="contenedor-tanques">
    <h2>Crear nuevo tanque</h2>
<hr>
<form action="" class="nuevo-tanque">
  <p><label for="" class="input-label">Nombre:</label>
    <input type="text" class="input-dato" name="nombre" id="n-nom" placeholder="nombre" required=""/></p>
  <p><label for="" class="input-label">Numero:</label>
    <input type="text" class="input-dato" name="numero"id="n-numero" placeholder="numero" required=""/></p>
  <p><label for="" class="input-label">Ubicacion:</label>
    <input type="text" class="input-dato" name="descripcion" id="n-ubicacion" placeholder="ubicacion" required=""/></p>
  <p><label for="" class="input-label">Fecha en funcionamiento:</label>
    <input type="date" class="input-dato" name="fecha" id="n-funcion" placeholder="" required=""/></p>
  <p><label for="" class="input-label">Largo:</label>
    <input type="text" class="input-dato" name="numero" id="n-largo" placeholder="largo mts" required=""/></p>
  <p><label for="" class="input-label">Ancho:</label>
    <input type="text" class="input-dato" name="numero" id="n-ancho" placeholder="ancho mts" required=""/></p>
  <p><label for="" class="input-label">Altura:</label>
    <input type="text" class="input-dato" name="numero" id="n-altura" placeholder="altura mts" required=""/></p>
  <p>
    <label for="" class="input-label">Imagen</label>
    <label class="input-archivo">
        <input type="file" id="file" aria-label="archivo">
        <span class="input-archivo-personalizado"></span>
      </label>
  </p>
  <button class="primer-btn">Guardar</button>
</form>
<br>
</div>
<div>
<h2>Historial de mantenimientos</h2>
<hr>
<table id="tabla-nuevo">
  <thead>
    <tr>
      <th>No.</th>
      <th>Nombre</th>
      <th>numero</th>
      <th>ubicacion</th>
      <th>Fecaha en funcionamiento</th>
      <th>largo</th>
      <th>ancho</th>
      <th>altura</th>
      <th>estado</th>
      <th>opciones</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>1</td>
        <td>Juan Carlos</td>
        <td>45821455</td>
        <td>Solola</td>
        <td>21/08/2021</td>
        <td>8</td>
        <th>7</th>
        <th>9</th>
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
        <td>Carlos Saloj</td>
        <td>45821455</td>
        <td>Solola</td>
        <td>21/08/2021</td>
        <td>8</td>
        <th>7</th>
        <th>9</th>
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
        <td>Roxana Julajuj</td>
        <td>45821455</td>
        <td>Solola</td>
        <td>21/08/2021</td>
        <td>8</td>
        <th>7</th>
        <th>9</th>
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
        function initEditarNuevo(){
          document.getElementById('tabla-nuevo').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarNuevo());
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');
            }
          })
          const form = document.querySelector ('.nuevo-tanque');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarNuevo(),100);
        return $nuevo;
}