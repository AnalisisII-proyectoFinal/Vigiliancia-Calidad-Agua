"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
 
 import UiListarUsuario from '../ui/ListarUsuarios.ui.js';

export function ListaUsuarios(){
    const $listausuarios = document.createElement('div');
        $listausuarios.classList.add("pagina");
        $listausuarios.setAttribute('id',"pg1");
        $listausuarios.setAttribute('style',"display:block;")
        $listausuarios.innerHTML=`
        <section class="contenedor-usuario">
          <h2>usuarios registrados</h2>
          <hr>
          <div>
            <input class="input-buscar" id="h-ano" type="text" placeholder="apellido" requerid/>
            <input class="input-buscardor-btn" id="buscar-empleado" type="submit" value="Buscar"/>
          </div>
          <br>
          <div class="tabla-lista">
          <table>
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
                <tbody id="lista-usuarios">
                </tbody>
          </table>          
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