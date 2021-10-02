export function EditarNuevo() {
    const $editarnuevo = document.createElement('div');
    $editarnuevo.classList.add('editar-nuevo');
    $editarnuevo.innerHTML=`
    <h2>Editar nuevo</h2>
<hr>
<form action="" class="nuevo-tanque">
  <p><label for="" class="input-label">Nombre:</label>
    <input type="text" class="input-dato" name="nombre" id="n-nom" placeholder="nombre" required=""/></p>
  <p><label for="" class="input-label">Numero:</label>
    <input type="text" class="input-dato" name="numero"id="n-numero" placeholder="numero" required=""/></p>
  <p><label for="" class="input-label">Ubicacion:</label>
    <input type="text" class="input-dato" name="descripcion" id="n-ubicacion" placeholder="ubicacion" required=""/></p>
  <p><label for="" class="input-label">Fecha en funcionamiento:</label>
    <input type="date" class="input-dato" name="fecha" id="n-funcion" placeholder="" required=""/></p>
  <p><label for="" class="input-label">Largo:</label>
    <input type="text" class="input-dato" name="numero" id="n-largo" placeholder="largo mts" required=""/></p>
  <p><label for="" class="input-label">Ancho:</label>
    <input type="text" class="input-dato" name="numero" id="n-ancho" placeholder="ancho mts" required=""/></p>
  <p><label for="" class="input-label">Altura:</label>
    <input type="text" class="input-dato" name="numero" id="n-altura" placeholder="altura mts" required=""/></p>
</form>
<br>
      <button class="primer-btn">Actualizar</button>
      </div>
<br>
</div>
    `;
    return $editarnuevo;
}