export function EditarIngresoMuestra(mta) {
    const $editaringresomuestra = document.createElement('div');
    $editaringresomuestra.classList.add('edit-muestra')
    $editaringresomuestra.innerHTML=`
          <h3>Editar Muestra</h3>
          <hr>
          <form action="" class="form-ingreso-muestra">
          <div><label for="" class="input-label">Tanque:</label>
            <input type="text" class="input-dato" placeholder="Hogar,tanque.." required="" disabled value="${mta.t}"/></div>
            </div>
          <div><label for="" class="input-label">Tipo:</label>
          <input type="text" class="input-dato" placeholder="Hogar,tanque.." required="" disabled value="${mta.t}"/></div>
            </div>
          <div>
          <label for="" class="input-label">Punto de muestra:</label>
            <input type="text" class="input-dato" placeholder="Hogar,tanque.." required=""value="${mta.p}"/></div>
          <div><label for="" class="input-label">PH:</label>
            <input type="number" class="input-dato"  placeholder="ph" required=""value="${mta.ph}"/></div>
          <div><label for="" class="input-label">Cloro recidual:</label>
            <input type="number" class="input-dato"  placeholder="cloro" required=""value="${mta.cl}"/></div>
          <div><label for="" class="input-label">Presion de agua:</label>
            <input type="number" class="input-dato" placeholder="presion agua" required=""value="${mta.pa}"/></div>
          </form>
          <br>
          <div class="btn-ingreso-muestra">
          <button class="tercer-btn">Actualizar</button>
          </div>
    `;
    return $editaringresomuestra;
}