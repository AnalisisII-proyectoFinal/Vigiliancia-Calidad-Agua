export function EditarMantenimiento() {
  const $editarmantenimiento = document.createElement('div');
  $editarmantenimiento.classList.add('editar-mantenimiento');
  $editarmantenimiento.innerHTML=`
  <h2>Editar Mantenimiento</h2>
  <hr>
  <form action="" class="form-mantenimiento">
  <div class="container-img">
    <div class="card">
      <img id="prev-img-m" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
        <div class="card-footer">
          <progress id="prog-img-m" max="100" value="0" class="progreso-muestra"></progress>
          <input type="file" id="subir-img-m">
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
      <p><label for="" class="input-label">Titulo:</label>
        <input type="text" class="input-dato" name="titulo" id="m-titulo" placeholder="titulo" required=""/></p>
      <p><label for="" class="input-label">Descripcion:</label>
        <input type="text" class="input-dato" name="descripcion" id="m-descripcion" placeholder="descripcion" required=""/></p>
      <p><label for="" class="input-label">Fecha:</label>
        <input type="date" class="input-dato" name="fecha" id="m-fecha" placeholder="" required=""/></p>
      <p>
        <label class="input-label" for="">Tanque</label>
          <div class="select">
          <select name="format" id="opt-t-m"></select>
        </div>
      </p>
    </div>
  </form>
  <br>
    <div class="botones-institucion">
      <p><button id="btn-v-e" class="tercer-btn">Guardar</button></p>
    </div>
  </div>
  `;
  return $editarmantenimiento;
}