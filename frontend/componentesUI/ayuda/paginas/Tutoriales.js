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
        <section class="contenedor-ayuda">
            <h2>Tutoriales para manejo de aplicacion</h2>
            <hr>
            <div class="contendedor-video">
            <div>
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="tabla-lista">
              <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Tutorial</th>
                        <th>descripcion</th>
                        <th>ver</th>
                    </tr>
                </thead>
                <tfoot>
                <tr>
                    <th colspan='3'>Tutoriales manejo de aplicacion</th>
                </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>intro</td>
                    <td>recorrido por la aplicacion</td>
                    <td>
                      <button class="play"> ▶️ </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>intro</td>
                    <td>recorrido por la aplicacion</td>
                    <td>
                      <button class="play"> ▶️ </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>intro</td>
                    <td>recorrido por la aplicacion</td>
                    <td>
                      <button class="play"> ▶️ </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </section>`;
        return $tutoriales;
}

/**
 <script>
        ver video = document.querySelectorAll("video")
        video.play.forEach(play => {
            
        });
        if(play.paused){
            play.play();
        }else{
            play.paused();
            play.currentime = 0;
        }
    }))
 */