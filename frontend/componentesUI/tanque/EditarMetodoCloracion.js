export function EditarMetodoCloracion() {
    const $editarmetodocloracion = document.createElement('div');
    $editarmetodocloracion.classList.add('editar-metodoclora');
    $editarmetodocloracion.innerHTML=`
    <h2>Editar metodo cloración</h2>
      <hr>
    <form action="" class="form-cloracion">
    <p><label for="" class="input-label">Tratamiento:</label>
    <input type="text" class="input-dato" name="nombre" id="n-tratamiento" placeholder="nombre de metodo" required=""/></p>
  <p><label for="" class="input-label">Descripcion:</label>
    <input type="text" class="input-dato" name="descripcion" id="n-cloracion" placeholder="descripcion" required=""/></p>
  <p><label for="" class="input-label"></label>
        <button class="primer-btn">Actualizar</button></P>
    </form>
    </div>
  <div>
    `;
    return $editarmetodocloracion;
}