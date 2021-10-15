import ServicioMuestra from '../servicio/Muestra.ser.js';
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {VerMuestrasHilos} from "../paginas/VerMuestrasHilo.js";
const serHilo = new ServicioMuestra();
const servNoti = new ServicioNotificacion();

class UiHilo{

    obtnerHilosXFecha(y,m){
        serHilo.hacerPeticion(`/hiloxfecha/${y}/${m}`,{},'GET').then(datos=>{
            this.listarHilos(datos.body)
        }).catch(err=>{
            console.log(err);
            servNoti.notificarToast('error','No se pudo cargar los datos');
        })

    }
    obtnerHilos(){
        serHilo.hacerPeticion('/hilos',{},'GET').then(datos=>{
            this.listarHilos(datos.body);
        }).catch(err=>{
            console.log(err);
            servNoti.notificarToast('error','No se pudo cargar los datos');
        })
    }
    listarHilos(hilos){
        const $tablahilos = document.getElementById('lista-hilos');
        $tablahilos.innerHTML='';
        console.log(hilos.length)
        if (hilos.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            hilos.forEach(el=>{
              let check=(el.estado > 0)?'':'checked=""';
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.fecha1}</td>
                <td>${el.fecha2}</td>
                <td>${el.descripcion}</td>
                <td>${el.por} %</td>
                <td><button class="detalle" _id="${el.id}">📇</button></td>
                <td><input _id="${el.id}" class="estado" type="checkbox" ${check}/></td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablahilos.appendChild($fragment);
            
        }else{
            let $filaf = document.createElement('tr');
            $filaf.innerHTML=`No hay datos encontrados`;
            $tablahilos.appendChild($filaf)
        } 
    }

    obtenerMuestrasxhilo(idh){
        serHilo.hacerPeticion(`/muestrasxhilo/${idh}`,{},'GET').then(datos=>{
            this.detallesHilo(datos.body)
        }).catch(err=>{
            console.log(err);
            servNoti.notificarToast('error','No se pudo cargar los datos');
        })
    }

    detallesHilo(datos){
        ventanModal(VerMuestrasHilos(datos))
    }
}

export default UiHilo;