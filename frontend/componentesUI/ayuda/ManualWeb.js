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
        <section class="contenedor-Ayuda">
        <section class="contenedor-Ayuda">
        <h3>Manual del Sistema/Usuario</h3>
        <hr>
        <div>
          <form action="" class="tutoriales-buscador">
          <input type="text" class="input-buscador" id=""placeholder="Manual" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
          <section class="pag-ayuda-tutoriales">
          <div>
          <section class="color-video"><form action="">
          <p><label for="" class="input-label"></label>
          <center><object class="pdfview" type="application/pdf" data="https://cidta.usal.es/cursos/etap/modulos/libros/consumo.pdf"></object></center>
          </form>
              </div>
                </tr>       
    </section>
        
        <h3>Servicio Web Municipalidad Sololá-Oficina de agua</h3>
        <hr>
        <section class="pag-ayuda-tutoriales">
        <p><label for="" class="input-label">Preguntas, terminos y Usos de privacidad:</label>
        <p><label for="" class="input-label">Sitio Web:</label>
        <section class="pag-web">
        <center><h3><a href="https://www.aguascalientes.gob.mx/"> Ir a la pagina / Sitio web Municipalidad</a></h3></center>
        </div>
        `;
        return $manualweb;
}