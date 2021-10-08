export function EditarPerfil() {
    const $editarperfil = document.createElement('div');
        $editarperfil.classList.add('perfil')
    $editarperfil.innerHTML=` 
    <div class="pcard-public">
      <div class="pimgpublic">
          <img src="./assets/img/avatar.svg" alt="">
          <h3>nombre del usuario</h3>
      </div>
      <div class="perfil-datos">
        <div>
          <h3>Cambio de Contraseña</h3>
          <form action="">
            <p><label for="" class="input-label">Usuario:</label>
              <input type="text" class="input-dato" id="" placeholder="usuario" required="" disabled/></p>
            <p><label for="" class="input-label">Nueva Contraseña:</label>
              <input type="text" class="input-dato" id="" placeholder="contraseña" required=""/></p>
            <p><label for="" class="input-label">Confirmar Contraseña:</label>
              <input type="text" class="input-dato" id="" placeholder="confirmar contraseña" required=""/></p>
              <p><button class="tercer-btn">Actualizar</button></p>
            </form>
        </div>
        <div>
          <h3>Cambio de pin y avatar</h3>
          <form action="">
              <p><label for="" class="input-label">Pin de acceso applicacion movil:</label>
                <input type="number" class="input-dato" id="" placeholder="*******" required=""/></p>
              <p><button class="tercer-btn">Actualizar PIN</button></p>
              <p><label for="" class="input-label">Avatar:</label>
              <input type="file"></p>
              <p><button class="tercer-btn">Actualizar Avatar</button></p>
          </form>
        </div>
       <div>
        <h3>Datos del usuario</h3>
          <form action="">
            <p><label for="" class="input-label">telefono:</label>
              <input type="text" class="input-dato" id="" placeholder="12346" required=""/></p>
            <p><label for="" class="input-label">Direccion:</label>
              <input type="text" class="input-dato" id="" placeholder="solos" required=""/></p>
            <p><label for="" class="input-label">Correo:</label>
              <input type="text" class="input-dato" id="" placeholder="@emil.com" required=""/></p>
              <p><button class="tercer-btn">Actualizar</button></p>
          </form>
       </div>
      </div>
            `;

    function iniEditarPerfil() {
     
    }
    setTimeout(()=>iniEditarPerfil(),100);
    return $editarperfil;
}