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
        <div class="contenedor-ayuda">
        <h2><div class="heading">Galeria de Tutoriales</div></h2>
        <hr>
            <div class="video-container">
                <div class="">
                    <h2>Cómo crear nuevo tanque</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Métodos de cloración</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Cómo crear hilo de muestras</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Historial de muestras</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Cómo generar reportes</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Crear y editar Usuarios</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="">
                    <h2>Backup</h2>
                    <iframe width="200" height="140" src="https://www.youtube.com/embed/tbrhTvWyTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>`;
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