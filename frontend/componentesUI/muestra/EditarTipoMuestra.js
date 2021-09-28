export function EditarTipoMuestra() {
    const $editartipomuestra = document.createElement('div');
    $editartipomuestra.classList.add('editar-tipo-muestra');
    $editartipomuestra.innerHTML=`
    <h2>Editar tipo de muestra</h2>
          <hr>
          <form action="" class="form-nuevo-tipo-muestra">
            <p><label for="" class="input-label">Nombre:</label>
              <input type="text" class="input-dato" name="nombre" id="n-nombre" placeholder="Full name" required=""/></p>
            <p><label for="" class="input-label">Descripcion:</label>
              <input type="text" class="input-dato" name="descripcion" id="n-descripcion" placeholder="Full name" required=""/></p>
              <p>
              <p><label for="" class="input-label"></label>
              <button class="primer-btn">Actualizar</button></p>
          </form>
        </div>
    `;
    return $editartipomuestra;
}