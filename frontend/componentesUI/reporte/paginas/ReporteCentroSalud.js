"use strict";
//@ts-check
import UiInformeCS from "../ui/InformeCS.ui.js";
export function ReporteCentroSalud() {
    const $ReporteCentroSalud = document.createElement('div');
    $ReporteCentroSalud.classList.add("pagina");
    $ReporteCentroSalud.setAttribute('id',"pg2");
    $ReporteCentroSalud.setAttribute('style',"display:none;");
    $ReporteCentroSalud.innerHTML=`
    <section class="contenedor-reporte">
        <h3>Hilos  de muestra</h3>
        <hr>
          <div class="filtro-hilo">
            <div class="select">
              <select name="format" id="r-h-mes">
                <option selected disabled>mes</option>
                <option value="1">enero</option>
                <option value="2">febrero</option>
                <option value="3">marzo</option>
                <option value="4">abril</option>
                <option value="5">mayo</option>
                <option value="6">junio</option>
                <option value="7">julio</option>
                <option value="8">agosto</option>
                <option value="9">septiembre</option>
                <option value="10">octubre</option>
                <option value="11">noviembre</option>
                <option value="12">diciembre</option>
              </select>
            </div>
            <div>
              <input class="input-buscar" id="r-h-ano" type="number" placeholder="año" requerid>
              <input class="input-buscardor-btn" id="r-b-hilo" type="submit" value="Buscar">
            </div>
          </div>
          <br>
          <div class="tabla-lista">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Hilo</th>
                  <th>Inicio</th>
                  <th>Hasta</th>
                  <th>Etiqueta</th>
                  <th>porcentaje</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody id="lista-ultimos-h">
              </tbody>
            </table>
          </div>
        </section>`;
        function initReporteCS() {
          const reporteCS=new UiInformeCS();
          reporteCS.obtenerUltimosHilos();
          // reporteCS.obtnerMuestrasxHilo(8);
          

          const listaHilos = document.getElementById('lista-ultimos-h');
          listaHilos.addEventListener('click',(e)=>{
            if (e.target.classList.contains('informe')) {
              const idh = e.target.getAttribute('_id');
              reporteCS.obtnerMuestrasxHilo(idh);
            }
          })

          const buscarHiloxF=document.getElementById('r-b-hilo');
          buscarHiloxF.addEventListener('click',(e)=>{
            e.preventDefault();
            const m=document.getElementById('r-h-mes').value;
            const y=document.getElementById('r-h-ano').value;
            reporteCS.obtenerHilosxFecha(m,y);
          })


        }
        setTimeout(()=>initReporteCS(),100)
        return $ReporteCentroSalud;
}