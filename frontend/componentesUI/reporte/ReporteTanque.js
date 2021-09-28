"use strict";
//@ts-check
/**
 * div con los componentes del modulo
 * @returns {HTMLDivElement}
 */

export function ReporteTanque() {
    const $ReporteTanque = document.createElement('div');
    $ReporteTanque.classList.add("pagina");
    $ReporteTanque.setAttribute('id',"pg1");
    $ReporteTanque.setAttribute('style',"display:none;");
    $ReporteTanque.innerHTML=`
    <section class="contenedor-reporte">
        <div>
            <h2 id="Titulo">Reporte Detalle Tanque</h2>
            <hr>
            <form class="form-reporte-detalle-tanque">
            <p>
                <label class="input-label" for="">Numero de tanque</label>
                <select class="input-opciones" id="">
                    <option value="Opcion 1">todos</option>
                    <option value="Opcion 1">tanque 1</option>
                    <option value="Opcion 2">tanque 2</option>
                    <option value="Opcion 3">tanque 3</option>
                    <option value="Opcion 4">tanque 4</option>
                    <option value="Opcion 5">tanque 5</option>
                </select>
            </p>
            <button class="primer-btn">Buscar</button>
            </form>
            <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nombre</th>
                      <th>Ubicacion</th>
                      <th>Largo</th>
                      <th>Ancho</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>tanque 1</td>
                      <td>Caserio</td>
                      <td>10</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Tanque 2</td>
                      <td>Caserio</td>
                      <td>20</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Tanque 3</td>
                      <td>San jose</td>
                      <td>10</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tanque 4</td>
                      <td>cabecera</td>
                      <td>15</td>
                      <td>30</td>
                    </tr>
                  </tbody>
              </table>          
        </div>
      <div>
          <section class="datoshistorial">
            <div>
            </div>
        </section>
      </div>
         </tbody>
        </table>
    </div>
    <div>
        <h3>Generar reporte</h3>
        <button class="primer-btn">Visaulizar</button>
        <button class="primer-btn">PDF</button>
    </div>
    <div>
    <h2 id="Titulo">Mantenimiento de Tanque</h2>
    <hr>
    <form class="form-reporte-mantenimiento-tanque">
            <p>
                <label class="input-label" for="">Numero de tanque</label>
                <select class="input-opciones" id="">
                    <option value="Opcion 1">todos</option>
                    <option value="Opcion 1">tanque 1</option>
                    <option value="Opcion 2">tanque 2</option>
                    <option value="Opcion 3">tanque 3</option>
                    <option value="Opcion 4">tanque 4</option>
                    <option value="Opcion 5">tanque 5</option>
                </select>
              </p>
              <button class="primer-btn">Buscar</button>
              </form>
              <table>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha Mantenimiento</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>tanque 1</td>
                        <td>cambio de cloro</td>
                        <td>10/02/21</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Tanque 2</td>
                        <td>verificacion</td>
                        <td>20/03/21</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Tanque 3</td>
                        <td>supervision desfa</td>
                        <td>10/08/21</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Tanque 4</td>
                        <td>cafsefw</td>
                        <td>15/04/21</td>
                      </tr>
                    </tbody>
                </table>
              </section>                
          </div>
            <div>
              <h3>Generar reporte</h3>
              <button class="visualizar">Visualizar</button>
              <button class="pdf">PDF</button>
          </div>
        `;




        return $ReporteTanque;
}