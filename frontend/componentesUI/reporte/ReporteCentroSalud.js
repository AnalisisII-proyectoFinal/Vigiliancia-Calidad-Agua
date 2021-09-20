"use strict";
//@ts-check
export function ReporteCentroSalud() {
    const $ReporteCentroSalud = document.createElement('div');
    $ReporteCentroSalud.classList.add("pagina");
    $ReporteCentroSalud.setAttribute('id',"pg2");
    $ReporteCentroSalud.setAttribute('style',"display:none;");
    $ReporteCentroSalud.innerHTML=`
    <h2>Reporte centro de salud</h2>
        `;
        return $ReporteCentroSalud;
}