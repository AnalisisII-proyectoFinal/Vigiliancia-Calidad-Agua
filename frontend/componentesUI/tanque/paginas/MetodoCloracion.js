"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js';
import{EditarMetodoCloracion}from './EditarMetodoCloracion.js'; 
import{ventanModal}from '../../utilidades/VentanaModal.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function MetodoCloracion(){
    const $metodocloracion = document.createElement('div');
        $metodocloracion.classList.add("pagina");
        $metodocloracion.setAttribute('id',"pg3");
        $metodocloracion.setAttribute('style',"display:none;")
        $metodocloracion.innerHTML=`
        <section class="contenedor-tanques">
    <div>
      <h2>Metodo de cloracion</h2>
      <hr>
    <form action="" class="form-cloracion">
        <p><label for="" class="input-label">Tratamiento:</label>
        <input type="text" class="input-dato" name="nombre" id="n-tratamiento" placeholder="nombre de metodo" required=""/></p>
        <p><label for="" class="input-label">Descripcion:</label>
        <input type="text" class="input-dato" name="descripcion" id="n-cloracion" placeholder="descripcion" required=""/></p>
        <p><label for="" class="input-label"></label>
        <button class="primer-btn">Guardar</button></P>
    </form>
    </div>
  <div>
  <h2>Metodos registrados</h2>
  <hr>
  <table id="tabla-metodo">
  <thead>
    <tr>
      <th>nombre</th>
      <th>Descripción</th>
      <th>Opciones</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>Iacob Geaorgescu</td>
        <td>e-mail@test-email.com</td>
          <td>
            <button class="editar">✏️</button>
            <button class="eliminar">🗑️</button>
          </td>
      </tr>
      <tr>
        <td>Julius Neumann</td>
        <td>e-mail@test-email.com</td>
        <td>
          <button class="editar">✏️</button>
          <button class="eliminar">🗑️</button>
        </td>
      </tr>
      <tr>
        <td>Julius Neumann</td>
        <td>e-mail@test-email.com</td>
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
        function initEditarMetodoCloracion(){
          document.getElementById('tabla-metodo').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarMetodoCloracion());
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');

            }
          })
          const form = document.querySelector ('.form-cloracion');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id; 
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarMetodoCloracion(),100);
        return $metodocloracion;
}