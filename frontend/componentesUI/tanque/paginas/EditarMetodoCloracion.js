export function EditarMetodoCloracion() {
    const $editarmetodocloracion = document.createElement('div');
    $editarmetodocloracion.classList.add('editar-metodoclora');
    $editarmetodocloracion.innerHTML=`
        <h2>Metodo de cloracion</h2>
          <hr>
          <form action="" class="form-cloracion">
            <p><label for="" class="input-label">Tratamiento:</label>
            <input type="text" class="input-dato" id="m-metodo" placeholder="metodo" required=""/></p>
            <p><label for="" class="input-label">Descripcion:</label>
            <input type="text" class="input-dato" id="m-desc" placeholder="descripcion" required=""/></p>
            <p><label for="" class="input-label"></label>
            <button class="primer-btn" id="btn-mt-g">Guardar</button></P>
          </form>
    `;
    function initMetodoCloracion(){

    }
    setTimeout(()=>initMetodoCloracion(),100);
    return $editarmetodocloracion;
}