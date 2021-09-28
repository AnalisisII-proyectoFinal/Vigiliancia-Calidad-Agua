"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
export function ManualWeb(){
    const $manualweb = document.createElement('div');
        $manualweb.classList.add("pagina");
        $manualweb.setAttribute('id',"pg2");
        $manualweb.setAttribute('style',"display:none;")
        $manualweb.innerHTML=`
        <div class="contenedor-ayuda">
        <h2><div class="heading">Manual de uso Sistema Web</div></h2>
        <hr>
            <div class="video-container">
                <div class="">
                    <h2>Manual de usuarios</h2>
                    <object class="pdfview" type="application/pdf" data="https://sede.aemps.gob.es/usoHum/regMed/docs/Manual-Aplicacion-Gestion-Usuarios-exp-electro.pdf"></object>
                </div>
                <div class="">
                    <h2>Manual de uso del Sistema</h2>
                    <object class="pdfview" type="application/pdf" data="http://sistema-artext.com/doc/manual.pdf"></object>
                </div>
            </div>
        `;
        return $manualweb;
}