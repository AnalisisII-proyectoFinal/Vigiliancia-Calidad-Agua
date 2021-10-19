export function EditarUsuario() {
    const $editarUsuario = document.createElement('div');
    $editarUsuario.classList.add('ver-detalles');
    $editarUsuario.innerHTML=` 
    <section class="contenedor-usuario">
            <div class="img-nuevo-usuario">
              <img id="u-ava" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1634070657/avatar_mryjhz.svg" alt="">
              <h3>Nuevo Usuario</h3>
              </div>
            <form action="" class="f-datos-usuario">
              <div><label for="" class="input-label">Primer Nombre:</label>
                <input type="text" class="input-dato"  id="u-pn" placeholder="Escribir Segundo apellido" required=""/></div>
              <div><label for="" class="input-label">Segundo Nombre:</label>
                <input type="text" class="input-dato" id="u-sn" placeholder="Escribir Segundo apellido" required=""/></div>
              <div><label for="" class="input-label">Primer Apellido:</label>
                <input type="text" class="input-dato"  id="u-pa" placeholder="Escribir Primer Nombre" required=""/></div>
              <div><label for="" class="input-label">Segundo Apellido:</label>
                <input type="text" class="input-dato" id="u-sa" placeholder="Escribir Segundo Nombre" required=""/></div>
              <div><label for="" class="input-label">Fecha de Nacimiento:</label>
                <input type="date" class="input-dato" name "fecha" id="u-fn" placeholder="Full name" required=""/></div>
              <div><label for="" class="input-label">DPI:</label>
                <input type="text" class="input-dato"  id="u-dpi" placeholder="Digite 13 números" required=""/></div>
              <div><label for="" class="input-label">Género:</label>
                <div class="select">
                  <select name="format" id="u-g">
                    <option selected disabled>Genero</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                  </select>
                </div></div>
              <div><label for="" class="input-label">Tel/Celular:</label>
                <input type="text" class="input-dato"  id="u-t" placeholder="Digite 8 números" required=""/></div>
              <div><label for="" class="input-label">Correo Electrónico:</label>
                <input type="text" class="input-dato" id="u-c" placeholder="Ejemplo@gmail.com" required=""/></div>
              <div><label for="" class="input-label">Dirección/Residencia:</label>
                <input type="text" class="input-dato"  id="u-d" placeholder="solola...." required=""/></div>
              <div><label for="" class="input-label">Puesto:</label>
                <input type="text" class="input-dato"  id="u-car" placeholder="cargo..." required=""/></div>
              <div><label for="" class="input-label">Tipo de Usuario:</label>
              <div class="select">
                <select name="format" id="u-per">
                  <option selected disabled>Permiso de usuario</option>
                  <option value="1">invitado</option>
                  <option value="2">moderador</option>
                  <option value="3">administrador</option>
                </select>
              </div></div>
              <div><label for="" class="input-label">Usuario:</label>
                <input type="text" class="input-dato"  id="u-user" placeholder="..."  disabled/></div>
              <div><label for="" class="input-label">Contraseña:</label>
                <input type="text" class="input-dato"  id="u-pass" placeholder="..." disabled/></div>  
            </form>
            <br>
            <br>
            <div class="botones-institucion">
                <p><button id="btn-u-g" class="tercer-btn">Actualiar</button></p>
            </div>
          </div> 
        </section>`;
    
    return $editarUsuario;
}