import ServicioTanque from "../servicio/Tanque.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {EditarMantenimiento}from "../paginas/EditarMantenimiento.js";
const servTanque = new ServicioTanque();
const servNoti = new ServicioNotificacion();

class UiMantenimiento{
    obtnerMantenimiento(){
        servTanque.hacerPeticion('',{},'GET').then(datos=>{
            this.listarMantenimientos(datos)
        }).catch(err=>{
            console.log(err);
            servNoti.notificarToast('error',"al cargar los datos");
        })

    }

    obtenerTanques(){
        servTanque.hacerPeticion('/',{},'GET').then(datos=>{
            this.listarTanques(datos)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos");
        })
    }

    listarMantenimientos(mantenimientos){
        const $tablaTanques = document.getElementById('lista-mantenimientos');
        $tablaTanques.innerHTML='';
        if (tanques.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            mantenimientos.forEach(el=>{
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
                  <button _id="${el.idt}" class="editar">✏️</button>
                </td>
                <td>
                <button class="eliminar" _id="${el.idt}">🗑️</button>
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

    listarTanques(tanques){
        const $selectT = document.getElementById('opt-t-m');
        $selectT.innerHTML='';
            let $fragment= document.createDocumentFragment();
            tanques.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.tanq}`;
                $fragment.appendChild($fila)
            })
            $selectT.appendChild($fragment);  
    }



    nuevoMantenimiento(mantenimento){
        servTanque.hacerPeticion('/',mantenimento,'POST').then(r=>{
            servNoti.notificarToast("succes","se inserto el datos");
        }).catch(err=>{
            servNoti.notificarToast("error"," al insertar dato");
        })

    }

    editarMantenimiento(idm){
        servTanque.hacerPeticion('/',{idm:idm},'GET').then(datos=>{
            ventanModal(EditarMantenimiento())
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })

    }
    actualizarMantenimiento(mantenimito){
        servTanque.hacerPeticion('/',mantenimito,'PUT').then(datos=>{
            servNoti.notificarToast("success","actualizado");
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","error al cargar")
        })
    }
    eliminarMantenimiento(idm){
        servTanque.hacerPeticion('/',{idm:idm},'DELETE').then(r=>{
            servNoti.notificarToast("success","eliminado")
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos")
        })
    }
}

export default UiMantenimiento;