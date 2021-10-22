import ServicioInicio from '../servicio/Inicio.ser.js';
const serInicio = new ServicioInicio();

class UiInicio{
    obtenerHiloActual(){
        serInicio.hacerPeticion('/hiloactual',{},'GET').then(datos=>{
            console.log(datos.body[0])
            const ha =document.getElementById('hilo-actual-i');
            let fechai =this.formatearFecha(datos.body[0].fecha1);
            let fechaf =this.formatearFecha(datos.body[0].fecha2);
            ha.innerHTML=`Del: ${fechai} 
            Al: ${fechaf} [${datos.body[0].porcentaje} %] <progress max="100" value="${datos.body[0].porcentaje}" class="progreso-muestra">`;
        }).catch(err=>{
            console.log(err)
        })
    }
    formatearFecha(fecha){
        const f = new Date(fecha);
        const mes = f.getMonth() + 1; 
        const dia = f.getDate();
        return `${(dia < 10 ? '0' : '').concat(dia)}-${(mes < 10 ? '0' : '').concat(mes)}-${f.getFullYear()}`;
    }

    obtnerDatosProgresoMuestras(){
        serInicio.hacerPeticion('/progresoactual',{},'GET').then(datos=>{
            this.crearTargetas(datos.body)
        }).catch(error=>{
            console.log(error)
        })
    }

    crearTargetas(muestras){
        const grafica = document.getElementById('contenedor-progreso-ini');
        grafica.innerHTML='';
        const $fragment = document.createDocumentFragment();
        muestras.forEach(el=>{
            let $contenedorT = document.createElement('div');
            $contenedorT.classList.add('contenedor-tanque-card')
            let $targeta = document.createElement('div');
            $targeta.classList.add('tanque-card');
            $targeta.innerHTML=`
            <div class="frente-card">
              <p>${el.tanq}</p>
              <hr>
              <div>
                <p style="width:35%" data-value="${el.m1.por}">${el.m1.tipo}</p>
                <progress max="100" value="${el.m1.por}" class="progreso-muestra">
                <span style="width: 35%"> ${el.m1.por}%</span>
              </div>
              <div>
                <p style="width:35%" data-value="${el.m2.por}">${el.m2.tipo}</p>
                <progress max="100" value="${el.m2.por}" class="progreso-muestra">
                <span style="width: 35%"> ${el.m2.por}%</span>
              </div>
              <div>
                <p style="width:35%" data-value="${el.m3.por}">${el.m3.tipo}</p>
                <progress max="100" value="${el.m3.por}" class="progreso-muestra">
                <span style="width: 35%"> ${el.m3.por}%</span>
              </div>
            </div>
            <div class="detras-card">
                <img src="${el.img}" alt="img">    
                <p>Nombre:${el.tanq}</p>
                <p>Ubicacion:${el.ubicacion}</p> 
            </div>
            `;
            $contenedorT.appendChild($targeta);
            $fragment.appendChild($contenedorT)
        })
        grafica.appendChild($fragment)
    }

    obtenerPublicaciones(){
        serInicio.hacerPeticion('/publicaciones',{},'GET').then(datos=>{
            this.crarTargetasPublicacion(datos.body)
            console.log(datos.body);
        }).catch(error=>{
            console.log(error)
        })
    }

    crarTargetasPublicacion(publicaciones){
        const $pub = document.getElementById('publicaciones-i');
        console.log(publicaciones);
        $pub.innerHTML='';
            let $fragment= document.createDocumentFragment();
            publicaciones.forEach(el=>{
              let $card = document.createElement('div');
                $card.classList.add('contenendor-publicacion')
              $card.innerHTML=`
                <div class="card-public">
                    <div class="imgpublic">
                        <img src="${el.img}" alt="">
                    </div>
                    <div class="descripcion-public">
                        <h2>${el.titulo}</h2>
                        <p>${el.descripcion}</p>
                        <p>${el.fecha}</p>
                    </div>
                </div>`;
              $fragment.appendChild($card)
        })
        $pub.appendChild($fragment)
    }


    obtnerMisionVision(){
        serInicio.hacerPeticion('/misionvision',{},'GET').then(datos=>{
            this.mostrarvisionmision(datos.body[0])
            console.log(datos.body);
        }).catch(error=>{
            console.log(error)
        })
    }

    mostrarvisionmision(datos){
       const $mv = document.getElementById('mision-vision');
       $mv.innerHTML='';
       let $content = document.createElement('div');
       $content.innerHTML=`
        <div class="vision">
            <div>
                <h2>Vision</h2>
                <p>${datos.vision}</p>
            </div>
            <div>
                <img src="${datos.imgv}" alt="img">
            </div>  
        </div>
        <div class="mision">
            <div>
            <h2>Mision</h2>
            <p>${datos.mision}</p>
            </div>
            <div>
            <img src="${datos.imgm}" alt="img">
            </div>
        </div>
       `;
       $mv.appendChild($content)
    }
}
export default UiInicio;