"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
 import { EditarUsuarios } from './EditarUsuarios.js';
 import { VerDetalles } from './VerDetalles.js';
 import { ventanModal } from '../../utilidades/VentanaModal.js';
 import UiListarUsuario from '../ui/ListarUsuarios.ui.js';

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
        <button id="prueba" >obtnerusuario</button>
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
                  <th>Nombre Empleado</th>
                  <th>DPI</th>
                  <th>Dirección</th>
                  <th>Cargo</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
              </tfoot>
              <tbody id="lista-usuarios">
              </tbody>
          </table>
          </div>          
        </div>
    </section>   
        `;
        function initListaUsuarios() {

          const btn = document.getElementById('prueba');
          btn.addEventListener('click',()=>{
              const d = new UiListarUsuario();
              d.obtenerDatosUsuarios();
          })
          /*
          document.getElementById('tabla-usuarios').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar'))
              ventanModal(EditarUsuarios())
              if (e.target.classList.contains('ver'))
              ventanModal(VerDetalles())
                else if(e.target.classList.contains('eliminar')){
              console.log('elimando registro')
            }
          })*/
          
        }
        setTimeout(()=>initListaUsuarios(),100)
        return $listausuarios;
}