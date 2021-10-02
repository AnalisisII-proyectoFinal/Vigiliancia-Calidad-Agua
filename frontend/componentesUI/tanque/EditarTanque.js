export function EditarTanque() {
    const $editartanque = document.createElement('div');
    $editartanque.classList.add('editar-tanque');
    $editartanque.innerHTML=`
    <h2>Editar nuevo</h2>
<hr>
<form action="" class="nuevo-tanque">
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
    <p><label for="" class="input-label">Tratamiento:</label>
    <input type="text" class="input-dato" name="nombre" id="n-tratamiento" placeholder="nombre de metodo" required=""/></p>
<p>
    <label class="input-label" for="">Tanque</label>
    <select class="input-opciones" id="">
    <option value="Opcion 1">tanque 1</option>
    <option value="Opcion 2">tanque 2</option>
    <option value="Opcion 3">Opcion 3</option>
    <option value="Opcion 4">Opcion 4</option>
    <option value="Opcion 5">Opcion 5</option>
    </select>
</p>
</form>
<br>
      <button class="primer-btn">Actualizar</button>
      </div>
<br>
</div>
    `;
    return $editartanque;
}