"use strict";
import{validarInput}from '../utilidades/ValidarFormulario.js'
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function TipoMuestra(){
    const $tipomuestra = document.createElement('div');
        $tipomuestra.classList.add("pagina");
        $tipomuestra.setAttribute('id',"pg4");
        $tipomuestra.setAttribute('style',"display:none;")
        $tipomuestra.innerHTML=`
        <section class="contenedor-muestras">
        <div>
          <h2>Nuevo tipo de muestra</h2>
          <hr>
          <form action="" class="form-nuevo-tipo-muestra">
          <p><label for="" class="input-label">Nombre:</label>
          <input type="text" class="input-dato" name="nombre" id="n-nombre" placeholder="Full name" required=""/></p>
        <p><label for="" class="input-label">Descripcion:</label>
          <input type="text" class="input-dato" name="descripcion" id="n-descripcion" placeholder="Full name" required=""/></p>
              <p>
              <p><label for="" class="input-label"></label>
              <button class="primer-btn">Guardar</button></p>
          </form>
        </div>
        <div>
          <h2>Tipos de muestras</h2>
          <hr>
          <table>
          <thead>
            <tr>
              <th>nombre</th>
              <th>correo</th>
              <th>Opciones</th>
            </tr>
          <tbody>
            <tr>
              <td>Juan Carlos</td>
              <td>limpieza de tanque</td>
              <td>
                <a class='button' href='#'>Editar</a>
              </td>
            </tr>
            <tr>
            <td>Gabriel Julajuj</td>
            <td>limpieza de tanque 2</td>
            <td>
              <a class='button' href='#'>Editar</a>
            </td>
          </tr>
        </tbody>
    </table>
      </div>
    </section>
        `;
        function iniTipoMuestra(){
          const form = document.querySelector ('.form-nuevo-tipo-muestra');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })



        }
        setTimeout(()=>iniTipoMuestra(),100);
        return $tipomuestra;
}