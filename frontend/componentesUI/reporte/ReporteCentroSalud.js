"use strict";
//@ts-check
export function ReporteCentroSalud() {
    const $ReporteCentroSalud = document.createElement('div');
    $ReporteCentroSalud.classList.add("pagina");
    $ReporteCentroSalud.setAttribute('id',"pg2");
    $ReporteCentroSalud.setAttribute('style',"display:none;");
    $ReporteCentroSalud.innerHTML=`
    <section class="contenedor-reporte">
    <div>
      <h2 id="Titulo">Ultimos hilos generados</h2>
      <hr>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Tipo reporte</th>
                  <th>Fecha generada</th>
                  <th>Descargar PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>centro salud</td>
                  <td>23/08/21</td>
                  <td>
                  <a class='button' href='#'>Visualizar</a>
                  <a class='button' href='#'>PDF</a>
                  </td>
                </tr>
                <tr>
                <td>2</td>
                <td>centro salud</td>
                <td>23/04/21</td>
                <td>
                <a class='button' href='#'>Visualizar</a>
                <a class='button' href='#'>PDF</a>
                </td>
                </tr>
                <tr>
                <td>3</td>
                <td>centro de salud</td>
                <td>20/07/21</td>
                <td>
                <a class='button' href='#'>Visualizar</a>
                <a class='button' href='#'>PDF</a>
                </td>
                </tr>
                <tr>
                <td>4</td>
                <td>centro de salud</td>
                <td>15/05/21</td>
                <td>
                <a class='button' href='#'>Visualizar</a>
                <a class='button' href='#'>PDF</a>
                </td>
                </tr>
              </tbody>
          </table>
        </div>          

<div>
<h3 id="Titulo">Filtrar hilo</h3>
      <hr>
      <form class="form-reporte-detalle-centrosalud"> 
      <p>
         <label class="input-label" for="">Fecha inicio</label>
            <select class="input-opciones" id="">
                    <option value="Opcion 1">todos</option>
                    <option value="Opcion 1">23/05/21</option>
                    <option value="Opcion 2">15/05/21</option>
                    <option value="Opcion 3">24/08/21</option>
                    <option value="Opcion 4">08/07/21</option>
           </select>
                
        <label class="input-label" for="">Fecha finalizacion</label>
            <select class="input-opciones" id="">
                <option value="Opcion 1">todos</option>
                <option value="Opcion 1">23/05/21</option>
                <option value="Opcion 2">15/05/21</option>
                <option value="Opcion 3">24/08/21</option>
                <option value="Opcion 4">08/07/21</option>
            </select>
        </p>
        </form>
            <button class="primer-btn">Buscar</button>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Estado</th>
                  <th>Fecha generada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>en progreso</td>
                  <td>23/08/21</td>
                </tr>
                <tr>
                <td>2</td>
                <td>en progreso</td>
                <td>23/04/21</td>
                </tr>
                <tr>
                <td>3</td>
                <td>finalizado</td>
                <td>20/07/21</td>
                </tr>
                <tr>
                <td>4</td>
                <td>en progreso</td>
                <td>15/05/21</td>
                </tr>
              </tbody>
          </table>

</div>
</section>
        `;
        return $ReporteCentroSalud;
}