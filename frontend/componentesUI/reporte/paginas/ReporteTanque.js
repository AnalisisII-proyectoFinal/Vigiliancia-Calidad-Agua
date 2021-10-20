"use strict";
//@ts-check
import UiInformeTanque from "../ui/InformeTanque.ui.js";
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
        <h2>Tanques Activos</h2>
        <hr>
        <div class="tabla-lista">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Numero</th>
                        <th>Ubicacion</th>
                        <th>Inicio</th>
                        <th>largo</th>
                        <th>Ancho</th>
                        <th>Altura</th>
                        <th>Metodo Cloracion</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody id="lista-tanques-inf"> 
                </tbody>
                </table>
        </div>
        </section>`;

        function initInforTanque() {
            const uiInf = new UiInformeTanque();
            uiInf.obtenerTanques();



            const lt = document.getElementById('lista-tanques-inf');
            lt.addEventListener('click',(e)=>{
                if (e.target.classList.contains('inf')) {
                    const idt=e.target.getAttribute('_id');
                    console.log(idt)
                    uiInf.obtenerTanque(idt)
                    
                }
            })
        }
        setTimeout(()=>initInforTanque(),100)
        return $ReporteTanque;
}