"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function MetodoCloracion(){
    const $metodocloracion = document.createElement('div');
        $metodocloracion.classList.add("pagina");
        $metodocloracion.setAttribute('id',"pg4");
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
        <table>
        <thead>
          <tr>
            <th>Tratamiento</th>
            <th>Descripcion</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>separacion de agua y aceite</td>
              <td>mantenimiento de tanque</td>
                <td>
                  <a class='button' href='#'>Editar</a>
                </td>
            </tr>
            <tr>
              <td>coagulacion y floculacion</td>
              <td>limpieza de agua</td>
              <td>
                <a class='button' href='#'>Editar</a>
              </td>
            </tr>
            <tr>
              <td>filtracion de agua</td>
              <td>mantenimiento</td>
              <td>
                <a class='button' href='#'>Editar</a>
              </td>
            </tr>
              </tbody>
          </table> 
      </div>
    </section>
        `;
        function iniMetodoCloracion(){
          const form = document.querySelector ('.form-cloracion');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>iniMetodoCloracion(),100);
        return $metodocloracion;
}