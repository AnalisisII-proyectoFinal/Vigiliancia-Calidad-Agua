"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
export function Tutoriales(){
    const $tutoriales = document.createElement('div');
        $tutoriales.classList.add("pagina");
        $tutoriales.setAttribute('id',"pg1");
        $tutoriales.setAttribute('style',"display:block;")
        $tutoriales.innerHTML=`
        <section class="contenedor-Ayuda">
        <h3>Tutoriales</h3>
        <hr>
        <div>
          <form action="" class="tutoriales-buscador">
          <input type="text" class="input-buscador" id="" placeholder="videos" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
          <section class="pag-ayuda-tutoriales">
          <div>
          <section class="color-video"><form action="">
          <p><label for="" class="input-label"></label>
          <iframe width="200" height="230" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="200" height="230" src="https://www.youtube.com/embed/YiSpsKE2eIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="200" height="230" src="https://www.youtube.com/embed/nnAzOIxfy9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </form>
              </div>
                </tr>       
        </div>
    </section>
        `;
        return $tutoriales;
}