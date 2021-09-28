export function EditarIngresoMuestra() {
    const $editaringresomuestra = document.createElement('div');
    $editaringresomuestra.classList.add('editar-ingresomues');
    $editaringresomuestra.innerHTML=`
          <h3>Editar ingreso muestra</h3>
          <hr>
          <form action="" class="form-ingreso-muestra">
          <p>
            <label class="input-label" for="">Tipo de muestra</label>
            <select class="input-opciones" id="">
              <option value="Opcion 1">Tanque 1</option>
              <option value="Opcion 2">Tanque 2</option>
              <option value="Opcion 3">Tanque 3</option>
              <option value="Opcion 4">Tanque 4</option>
              <option value="Opcion 5">Tanque 5</option>
            </select>
          </p>
          <p><label for="" class="input-label">Punto de muestra:</label>
            <input type="text" class="input-dato" name="nombre" id="n-muestra" placeholder="Hogar,tanque.." required=""/></p>
          <p><label for="" class="input-label">PH:</label>
            <input type="text" class="input-dato" name="numero" id="n-ph" placeholder="ph" required=""/></p>
          <p><label for="" class="input-label">Cloro recidual:</label>
            <input type="text" class="input-dato" name="nombre" id="n-color" placeholder="Full name" required=""/></p>
          <p><label for="" class="input-label">Presion de agua:</label>
            <input type="text" class="input-dato" name="nombre" id="n-precsion" placeholder="Full name" required=""/></p>  
          </form>
          <div class="btn-ingreso-muestra">
          <button class="primer-btn">Actualizar</button>
          </div>
    `;
    return $editaringresomuestra;
}