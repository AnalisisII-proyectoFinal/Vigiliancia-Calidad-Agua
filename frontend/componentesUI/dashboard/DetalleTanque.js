"use strict";
//@ts-check
/**
 * div con los componentes del modulo
 * @returns {HTMLDivElement}
 */
export function DetalleTanque() {
    const $detalletanque=document.createElement('div');
    $detalletanque.classList.add('card-detalle')
    $detalletanque.innerHTML=`
                    <h3>tanque no. 1</h3>
                    <h3>Ubicacion: Barrio Central San Jose chacaya</h3>
                    <div class="tabla-datos-progreso">
                        <table>
                            <thead>
                              <tr>
                                <th>Muestra</th>
                                <th>Punto de muestra</th>
                                <th>Ph</th>
                                <th>CloroResidual</th>
                                <th>Presion</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th colspan='7'>Detalles de muestra</th>
                              </tr>
                            </tfoot>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Tanque</td>
                                <td>18</td>
                                <td>0.5</td>
                                <td>5 p/s</td>
                                <td>17/02/2021</td>
                                <td>10:00 am</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Hogar 1</td>
                                <td>18</td>
                                <td>0.5</td>
                                <td>5 p/s</td>
                                <td>17/02/2021</td>
                                <td>10:00 am</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Hogar 2</td>
                                <td>18</td>
                                <td>0.5</td>
                                <td>5 p/s</td>
                                <td>17/02/2021</td>
                                <td>10:00 am</td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                    <button  class="segundo-btn">Regresar</button>
    `;
    return $detalletanque;
}