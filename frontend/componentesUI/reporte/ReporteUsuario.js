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
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Cargo</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pedro</td>
                  <td>Lopez</td>
                  <td>Tecnico</td>
                  <td>10202452</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Maria</td>
                  <td>Gonzalez</td>
                  <td>Tecnico</td>
                  <td>354536895</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Casandra</td>
                  <td>San jose</td>
                  <td>directora</td>
                  <td>35123654</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Luis</td>
                  <td>Mora</td>
                  <td>Tecnico</td>
                  <td>30789654</td>
                </tr>
              </tbody>
          </table>
        </div>          

<div>
<div>
  <h3 id="titulo">Datos Generales Empleado</h2>
  <hr>
  </div>
    <section class="parte_uno_historial">
  <form action="">
    <input type="text" placeholder="Buscar" required>
    <button class="primer-btn">Buscar</button>
    <div>
    <h3>Generar reporte</h3>
    <button class="primer-btn">PDF</button>
</div>
</form>
</div>
</section>
        `;
        return $ReporteUsuario;
}