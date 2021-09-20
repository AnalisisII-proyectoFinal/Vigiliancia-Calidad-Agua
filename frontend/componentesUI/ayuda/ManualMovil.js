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
        <section class="contenedor-Ayuda">
        <section class="contenedor-Ayuda">
        <h3>Manual de App Móvil/Usuario</h3>
        <hr>
        <div>
          <form action="" class="tutoriales-buscador">
          <input type="text" class="input-buscador" id=""placeholder="Ayuda" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
          <section class="pag-ayuda-tutoriales">
          <div>
          <section class="color-video"><form action="">
          <p><label for="" class="input-label"></label>
          <center><object class="pdfview" type="application/pdf" data="https://secretariademovilidad.quito.gob.ec/images/MOVILIDAD/MovilizateUIO/Manual-AppMovil.pdf"></object></center>
          </form>
              </div>
                </tr>       
    </section>
        
        <h3>App Móvil Municipalidad Sololá, Oficina de agua</h3>
        <hr>
        <section class="pag-ayuda-tutoriales">
        <p><label for="" class="input-label">Establecimiento, terminos y Usos de privacidad:</label>
        <p><label for="" class="input-label">Visita nuestro sitio de descarga :</label>
        <section class="pag-web">
        <center><h3><a href="https://play.google.com/store/apps/details?id=com.ayd.sadm&hl=es&gl=US"> Descargar App Móvil / Municipalidad San José Chacayá, Sololá</a></h3></center>
        </div>
        `;
        return $manualmovil;
}