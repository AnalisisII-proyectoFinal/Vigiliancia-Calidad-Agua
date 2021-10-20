"use strict";
//@ts-check
export function ReporteUsuario() {
    const $ReporteUsuario = document.createElement('div');
    $ReporteUsuario.classList.add("pagina");
    $ReporteUsuario.setAttribute('id',"pg3");
    $ReporteUsuario.setAttribute('style',"display:none;");
    $ReporteUsuario.innerHTML=`
    <section class="contenedor-reporte">
    </section>
        `;
        return $ReporteUsuario;
}