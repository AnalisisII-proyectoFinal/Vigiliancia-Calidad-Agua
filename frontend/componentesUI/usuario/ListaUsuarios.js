"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
export function ListaUsuarios(){
    const $listausuarios = document.createElement('div');
        $listausuarios.classList.add("pagina");
        $listausuarios.setAttribute('id',"pg1");
        $listausuarios.setAttribute('style',"display:block;")
        $listausuarios.innerHTML=`
        <section class="contenedor-Usuarios">
        <center><h2>Lista de Usuarios registrados</h2></center>
        <hr>
        <div>
          <form action="" class="Buscar usuario">
          <input type="text" class="input-buscador" id="" placeholder="Id, Apellido, DPI, Cargo" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Apellido</th>
                  <th>nombre</th>
                  <th>DPI</th>
                  <th>Residencia</th>
                  <th>Cargo</th>
                  <th>Tel/celular</th>
                  <th>correo</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan='2'>lista de todos los usuarios</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>15</td>
                  <td>Gálvez</td>
                  <td>Iacob Geaorges</td>
                  <td>2911975050704</td>
                  <td>Sololá</td>
                  <td>Director de Agua</td>
                  <td>44637872</td>
                  <td>e-mail@test-email.com</td>
                  <td>Activo</td>
                  <td>
                    <a class='button' href='#'>Activo</a>
                    <a class='button' href='#'>Inactivo</a>
                  </td>
                </tr>
                <tr>
                <td>15</td>
                <td>Gálvez</td>
                <td>Iacob Geaorges</td>
                <td>2911975050704</td>
                <td>Sololá</td>
                <td>Director de Agua</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>Activo</td>
                <td>
                  <a class='button' href='#'>Activo</a>
                  <a class='button' href='#'>Inactivo</a>
                  </td>
                </tr>
                <tr>
                <td>15</td>
                <td>Gálvez</td>
                <td>Iacob Geaorges</td>
                <td>2911975050704</td>
                <td>Sololá</td>
                <td>Director de Agua</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>Activo</td>
                <td>
                  <a class='button' href='#'>Activo</a>
                  <a class='button' href='#'>Inactivo</a>
                </tr>
                <tr>
                <td>15</td>
                <td>Gálvez</td>
                <td>Iacob Geaorges</td>
                <td>2911975050704</td>
                <td>Sololá</td>
                <td>Director de Agua</td>
                <td>44637872</td>
                <td>e-mail@test-email.com</td>
                <td>Activo</td>
                <td>
                  <a class='button' href='#'>Activo</a>
                  <a class='button' href='#'>Inactivo</a>
                </tr>
              </tbody>
          </table>          
          
        </div>
    </section> 
        `;
        return $listausuarios;
}