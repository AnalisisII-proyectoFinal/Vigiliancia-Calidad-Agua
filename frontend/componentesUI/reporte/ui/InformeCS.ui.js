import ServicioReporte from "../servicios/Reporte.serv.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {InformeCS}from "../paginas/InformeCS.js";
import {ventanModal}from "../../utilidades/VentanaModal.js";
const servReporte = new ServicioReporte();
const servNoti = new ServicioNotificacion();
class UiInformeCS{
    obtnerMuestrasxHilo(idh){
        servReporte.hacerPeticion(`/centrosaludxhilo/${idh}`,{},'GET').then(datos=>{
            this.previuInforme(datos.body.m,datos.body.d)
            console.log(datos)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }
    previuInforme(muestras,datos){
        ventanModal(InformeCS(muestras,datos))
    }
    
    obtenerHilosxFecha(m,y){
        servReporte.hacerPeticion(`/obtenerhilo/${m}/${y}`,{},'GET').then(datos=>{
            this.mostrarHilos(datos.body)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }

    obtenerUltimosHilos(){
        servReporte.hacerPeticion('/ultimoshilos',{},'GET').then(datos=>{
            this.mostrarHilos(datos.body);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }
    mostrarHilos(hilos){
        const $tablahilos = document.getElementById('lista-ultimos-h');
        $tablahilos.innerHTML='';
        console.log(hilos.length)
        if (hilos.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            hilos.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.id}</td>
                <td>${el.fecha1}</td>
                <td>${el.fecha2}</td>
                <td>${el.descripcion}</td>
                <td>${el.por} %</td>
                <td>
                <button class="informe" _id="${el.id}">📝 informe</button>
                </td>`;
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
}
export default UiInformeCS;