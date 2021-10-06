"use strict";
//@ts-check
/**
 * div con los componentes del modulo
 * @returns {HTMLDivElement}
 */

export function HiloActual(){
    const $hiloactual = document.createElement('div');
        $hiloactual.classList.add("pagina");
        $hiloactual.setAttribute('id',"pg1");
        $hiloactual.setAttribute('style',"display:block;")
        $hiloactual.innerHTML=`
        <section class="contenedor-dashboard">
        <h3>Muestra Del: 21/05/2021 Al: 28/05/2021</h3>
        <hr>
        <div class="contenedor-grafica-dash" id="g-t-p-d">
        </div>
    </section>
    `;
        return $hiloactual;
}