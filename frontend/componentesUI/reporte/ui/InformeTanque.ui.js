import ServicioReportes from "../servicios/Reporte.serv.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {InformeTanque}from "../paginas/InformeTanque.js";
const servRep = new ServicioReportes();
const servNoti = new ServicioNotificacion();

class UiInformeTanque{
    obtenerTanques(){
        servRep.hacerPeticion('/tanques',{},'GET').then(datos=>{
            this.mostrarTanques(datos.body)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }
    obtenerTanque(idt){
        servRep.hacerPeticion(`/tanque/${idt}`,{},'GET').then(dato=>{
            this.informeTanque(dato.body[0])
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }
    mostrarTanques(tanques){
        const $tablaTanques = document.getElementById('lista-tanques-inf');
        $tablaTanques.innerHTML='';
        if (tanques.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            tanques.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.tanq}</td>
                <td>${el.num}</td>
                <td>${el.ubic}</td>
                <td>${el.ffuncion}</td>
                <td>${el.largo}</td>
                <td>${el.ancho}</td>
                <td>${el.altura}</td>
                <td>${el.tpcloro}</td>
                <td>
                  <button _id="${el.idt}" class="inf">📇 informe</button>
                </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablaTanques.appendChild($fragment);   
        }else{
            let $filaf = document.createElement('tr');
            $filaf.innerHTML=`No hay datos encontrados`;
            $tablaTanques.appendChild($filaf)
        }

    }
    informeTanque(tanque){
        const mante=tanque.mants;
        console.log(tanque)
        console.log(mante)
       ventanModal(InformeTanque(tanque,mante))
    }
}
export default UiInformeTanque;