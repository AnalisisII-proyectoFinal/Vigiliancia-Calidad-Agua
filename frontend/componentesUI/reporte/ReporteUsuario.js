"use strict";
//@ts-check
export function ReporteUsuario() {
    const $ReporteUsuario = document.createElement('div');
    $ReporteUsuario.classList.add("pagina");
    $ReporteUsuario.setAttribute('id',"pg3");
    $ReporteUsuario.setAttribute('style',"display:none;");
    $ReporteUsuario.innerHTML=`
    <section class="contenedor-reporte">
    <div>
      <h2 id="Titulo">Reporte Usuario</h2>
      <hr>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Apellido</th>
                  <th>Nombre</th>
                  <th>Cargo</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Galvez</td>
                  <td>Jacob</td>
                  <td>Director de agua</td>
                  <td>10202452</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Gonzalez</td>
                  <td>Maria</td>
                  <td>Tecnico</td>
                  <td>354536895</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>San jose</td>
                  <td>Casandra</td>
                  <td>directora</td>
                  <td>35123654</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mora</td>
                  <td>Luis</td>
                  <td>Tecnico</td>
                  <td>30789654</td>
                </tr>
              </tbody>
          </table>
        </div>          
      <div>
        <h3>Generar reporte</h3>
        <button class="primer-btn">Visualizar</button>
        <button class="primer-btn">PDF</button>
    </div>
<div>
<div>
  <h3 id="titulo">Datos Generales Empleado</h2>
  <hr>
  </div>
    <section class="parte_uno_historial">
  <form action="">
    <p>
        <label class="input-label" for="">Apellido Usuario</label>
        <select class="input-opciones" id="">
          <option value="Opcion 1">Galvez</option>
          <option value="Opcion 1">Gonzales</option>
          <option value="Opcion 2">Santia </option>
          <option value="Opcion 3">Mora</option>
          </select>
   </p>
  <button class="primer-btn">Buscar</button>
  </form>
            <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>DPI</th>
                <th>Residencia</th>
                <th>Cargo</th>
                <th>Telefono</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Galvez</td>
                <td>Jacob</td>
                <td>10426846555</td>
                <th>Solola</th>
                <th>Director de agua</th>
                <th>13345678</th>
                <th>email@gmail.com</th>
            </tbody>
          </table> 
</form>
</div>
</section>
        `;
        return $ReporteUsuario;
}