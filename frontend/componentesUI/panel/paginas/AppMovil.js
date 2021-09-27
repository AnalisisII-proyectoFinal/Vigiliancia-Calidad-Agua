"use strict";



import UiAppMovil from '../ui/AppMovil.ui.js';

/**
 * Componente inicial de modulo panel
 */
/**
 * @function AppMovil/constructor genera  la pagina de app movil
*/
export function AppMovil(){
    const $appmovil = document.createElement('div');
        $appmovil.classList.add("pagina");
        $appmovil.setAttribute('id',"pg2");
        $appmovil.setAttribute('style',"display:none;")
        $appmovil.innerHTML=`
        <section class="contenedor-panel">
          <div class="form-habilitar-app">
            <h3>Habilitar y buscar Usuarios</h3>
            <hr>
            <form action="">
              <p>
              <input class="input-buscar" id="ap-us" type="text" placeholder="usuario ...">
              <input class="input-buscardor-btn" id="btn-hab-us" type="button" value="Habilitar">
              </p>
            </form>      
      </div>
      <div>
          <h3>Usuarios de la aplicacion</h3>
          <hr>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Usuario</th>
                  <th>Empleado</th>
                  <th>Cargo</th>
                  <th>Fecha Habilitacion</th>
                  <th>Acceso</th>
                  <th>Opcion</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan='7'>Usuario habilitados</th>
                </tr>
              </tfoot>
              <tbody id="lista-app-us"> 
              </tbody>
          </table>
      </div>
  </section>
        `;
        function iniAppMovil() {
          const $tablaUsuarios = document.getElementById('lista-app-us');
          const $usuario=document.getElementById('ap-us');
          const $btnHabilitar=document.getElementById('btn-hab-us');
    
          $tablaUsuarios.addEventListener('click',e=>{
            if (e.target.classList.contains("eliminar")) {
              let idUs= e.target.getAttribute('_id');
              console.log(idUs);
              const $elimUsario = new UiAppMovil();
              $elimUsario.eliminarUsuarioApp(idUs);
            }else if(e.target.classList.contains('estado')){
              let idU = e.target.getAttribute('_id');
              let acc = e.target.getAttribute('checked');
              const $cambEstado= new UiAppMovil();
              $cambEstado.cambiarEstadoAcceso(idU,acc);
            }
          })
          
          $btnHabilitar.addEventListener('click',()=>{
            let $us=$usuario.value;
            const $agregUsuario = new UiAppMovil();
            $agregUsuario.agregarUsuario($us);            
          })
        }
        setTimeout(()=>iniAppMovil(),100);
        return $appmovil;
}
