export function EditarMantenimiento() {
  const $editarmantenimiento = document.createElement('div');
  $editarmantenimiento.classList.add('editar-mantenimiento');
  $editarmantenimiento.innerHTML=`
  <h2>Editar mantenimiento</h2>
      <hr>
      <form action="" class="form-mantenimiento">
        <p><label for="" class="input-label">Titulo:</label>
          <input type="text" class="input-dato" name="titulo" id="ntitulo" placeholder="titulo" required=""/></p>
        <p><label for="" class="input-label">Descripcion:</label>
          <input type="text" class="input-dato" name="descripcion" id="n-mant" placeholder="descripcion" required=""/></p>
        <p><label for="" class="input-label">Fecha:</label>
          <input type="date" class="input-dato" name="fecha" id="n-fecha" placeholder="" required=""/></p>
        <p>
          <label for="" class="input-label">Fotografia:</label>
          <label class="input-archivo">
              <input type="file" id="file" aria-label="archivo">
              <span class="input-archivo-personalizado"></span>
            </label>
        </p>
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
  `;
  return $editarmantenimiento;
}