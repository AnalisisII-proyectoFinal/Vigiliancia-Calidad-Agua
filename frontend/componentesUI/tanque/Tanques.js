"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
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
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nombre</th>
                  <th>Numero</th>
                  <th>Ubicación</th>
                  <th>Fecha en funcionamiento</th>
                  <th>Largo</th>
                  <th>Ancho</th>
                  <th>Altura</th>
                  <th>Titulo</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>tanque</th>
                  <th>Tratamiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Juan Carlos</td>
                  <td>40588264</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>mantenimiento</td>
                  <td>reparacion de tanque</td>
                  <td>28/08/2021</td>
                  <td>tanque 1</td>
                  <td>cloracion de agua</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Juan Carlos</td>
                  <td>40588264</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>mantenimiento</td>
                  <td>reparacion de tanque</td>
                  <td>28/08/2021</td>
                  <td>tanque 1</td>
                  <td>cloracion de agua</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Juan Carlos</td>
                  <td>40588264</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>mantenimiento</td>
                  <td>reparacion de tanque</td>
                  <td>28/08/2021</td>
                  <td>tanque 1</td>
                  <td>cloracion de agua</td>
                <tr>
                  <td>1</td>
                  <td>Juan Carlos</td>
                  <td>40588264</td>
                  <td>Sanjose Chacaya</td>
                  <td>28/05/2021</td>
                  <td>18</td>
                  <td>14</td>
                  <td>8</td>
                  <td>mantenimiento</td>
                  <td>reparacion de tanque</td>
                  <td>28/08/2021</td>
                  <td>tanque 1</td>
                  <td>cloracion de agua</td>
                </tr>
              </tbody>
          </table>          
        </div>
    </section>
        `;
        function iniTanques(){
          const form = document.querySelector ('.tanque-buscador');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })



        }
        setTimeout(()=>iniTanques(),100);
        return $tanques;
}