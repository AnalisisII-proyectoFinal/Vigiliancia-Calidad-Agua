import ServicioInicio from '../servicio/Inicio.ser.js';
import {Tarjeta} from './Tarjeta.js';
const serInicio = new ServicioInicio();

class UiInicio{


    obtenerHiloActual(){
        serInicio.hacerPeticion('/hiloactual',{},'GET').then(datos=>{
            console.log(datos.body[0])
            const ha =document.getElementById('hilo-actual-i');
            let fechai =this.formatearFecha(datos.body[0].fecha1);
            let fechaf =this.formatearFecha(datos.body[0].fecha2);
            ha.innerHTML=`Del: ${fechai} 
            Al: ${fechaf} [${datos.body[0].porcentaje} %]`;
        }).catch(err=>{
            console.log(err)
        })
    }
    formatearFecha(fecha){
        const f = new Date(fecha);
        const mes = f.getMonth() + 1; // Ya que los meses los cuenta desde el 0
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
        const $fragment = document.createDocumentFragment();
        for (let i = 0; i < muestras.length; i=i+3) {
            let dm1 = muestras[i];
            let dm2 = muestras[i+1];
            let dm3 = muestras[i+2];
            const tarjeta = Tarjeta(dm1,dm2,dm3);
           $fragment.appendChild(tarjeta);
        }
        
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
                        <img src="http://localhost:4000${el.img}" alt="">
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
            this.mostratvisionmision(datos.body[0])
            console.log(datos.body);
        }).catch(error=>{
            console.log(error)
        })
    }

    mostratvisionmision(datos){
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
                <img src="http://localhost:4000${datos.imgv}" alt="img">
            </div>  
        </div>
        <div class="mision">
            <div>
            <h2>Mision</h2>
            <p>${datos.mision}</p>
            </div>
            <div>
            <img src="http://localhost:4000${datos.imgm}" alt="img">
            </div>
        </div>
       `;
       $mv.appendChild($content)
    }
}
export default UiInicio;