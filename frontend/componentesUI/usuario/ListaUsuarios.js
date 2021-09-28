"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
 import { EditarUsuarios } from './EditarUsuarios.js';
 import { ventanModal } from '../utilidades/VentanaModal.js';
export function ListaUsuarios(){
    const $listausuarios = document.createElement('div');
        $listausuarios.classList.add("pagina");
        $listausuarios.setAttribute('id',"pg1");
        $listausuarios.setAttribute('style',"display:block;")
        $listausuarios.innerHTML=`
        <section class="contenedor-usuario">
        <center><h2> Usuarios registrados</h2></center>
        <hr>
        <div>
        <form action="">
        <input class="input-buscar" type="text" placeholder="buscar.. usuario">
        <input class="input-buscardor-btn" type="submit" value="Buscar">
      </form>
          <br>
          <div>
            <table id="tabla-usuarios">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre completo de empleado</th>
                  <th>DPI</th>
                  <th>Fech. Nacimiento</th>
                  <th>Sexo</th>
                  <th>Dirección</th>
                  <th>Cargo</th>
                  <th>Tel/celular</th>
                  <th>Correo Electrónico</th>
                  <th>Fecha Creación</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gálvez Rámirez Luis Omar</td>
                  <td>2911975050704</td>
                  <td>15/03/1993</td>
                  <td>Másculino</td>
                  <td>Sololá</td>
                  <td>Director de Agua</td>
                  <td>44637872</td>
                  <td>e-mail@test-email.com</td>
                  <td>12/03/2021</td>
                  <td>Activo</td>
                  <td>
                  <button class="editar">✏️</button>
                  <button class="eliminar">🗑️</button>
                  </td>
                </tr>
                <tr>
                <td>2</td>
                <td>Lucía Esmeralda López Rámirez</td>
                <td>2911975050704</td>
                <td>15/03/1993</td>
                <td>Fémenino</td>
                <td>Sololá</td>
                <td>Secretaria</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>12/03/2021</td>
                <td>Bloquedo</td>
                <td>
                <button class="editar">✏️</button>
                <button class="eliminar">🗑️</button>
                  </td>
                </tr>
                <tr>
                <td>3</td>
                <td>Jordan Omar Fuentes Sazo</td>
                <td>2911975050704</td>
                <td>15/03/1993</td>
                <td>Másculino</td>
                <td>Sololá</td>
                <td>Director de Agua</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>12/03/2021</td>
                <td>Inactivo</td>
                <td>
                <button class="editar">✏️</button>
                <button class="eliminar">🗑️</button>
                </tr>
                <tr>
                <td>4</td>
                <td>Luisa Mariela Chávez Gonzáles</td>
                <td>2911975050704</td>
                <td>15/03/1993</td>
                <td>Fémenino</td>
                <td>Sololá</td>
                <td>Director de Agua</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>12/03/2021</td>
                <td>Activo</td>
                <td>
                <button class="editar">✏️</button>
                <button class="eliminar">🗑️</button>
                </tr>
              </tbody>
          </table>
          </div>          
        </div>
    </section>   
        `;
        function initListaUsuarios() {
          document.getElementById('tabla-usuarios').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              ventanModal(EditarUsuarios());
            }else if(e.target.classList.contains('eliminar')){
              console.log('elimando registro')
            }
          })
          
        }
        setTimeout(()=>initListaUsuarios(),100)
        return $listausuarios;
}