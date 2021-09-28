"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
export function ManualMovil(){
    const $manualmovil = document.createElement('div');
        $manualmovil.classList.add("pagina");
        $manualmovil.setAttribute('id',"pg3");
        $manualmovil.setAttribute('style',"display:none;")
        $manualmovil.innerHTML=`
        <div class="contenedor-ayuda">
        <h2><div class="heading">Manual de uso Sistema Móvil</div></h2>
        <hr>
            <div class="video-container">
                <div class="">
                    <h2>Manual de usuarios</h2>
                    <object class="pdfview" type="application/pdf" data="https://secretariademovilidad.quito.gob.ec/images/MOVILIDAD/MovilizateUIO/Manual-AppMovil.pdf"></object>
                </div>
                <div class="">
                    <h2>Manual App Móvil</h2>
                    <object class="pdfview" type="application/pdf" data="http://sistema-artext.com/doc/manual.pdf"></object>
                </div>
           
            </div>
        `;
        return $manualmovil;
}