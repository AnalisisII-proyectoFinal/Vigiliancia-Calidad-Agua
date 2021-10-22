import ServicioTanque from "../servicio/Tanque.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {EditarMantenimiento}from "../paginas/EditarMantenimiento.js";
const servTanque = new ServicioTanque();
const servNoti = new ServicioNotificacion();

class UiMantenimiento{
    obtnerMantenimientos(){
        servTanque.hacerPeticion('/mantenimiento',{},'GET').then(datos=>{
            this.listarMantenimientos(datos.body)
        }).catch(err=>{
            console.log(err);
            servNoti.notificarToast('error',"al cargar los datos");
        })

    }
    
    obtenerTanques(){
        servTanque.hacerPeticion('/manttanques',{},'GET').then(datos=>{
            this.listarTanques(datos.body)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos");
        })
    }

    listarMantenimientos(mantenimientos){
        const $tblMant = document.getElementById('lista-mantenimientos');
        $tblMant.innerHTML='';
        if (mantenimientos.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            mantenimientos.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.titulo}</td>
                <td>${el.descripcion}</td>
                <td>${el.fecha}</td>
                <td>${el.tanque}</td>
                <td>
                  <button _id="${el.idm}" class="editar">✏️</button>
                </td>
                <td>
                <button class="eliminar" _id="${el.idm}">🗑️</button>
                </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tblMant.appendChild($fragment);   
        }else{
            let $filaf = document.createElement('tr');
            $filaf.innerHTML=`No hay datos encontrados`;
            $tblMant.appendChild($filaf)
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
                  ${el.nombre}`;
                $fragment.appendChild($fila)
            })
            $selectT.appendChild($fragment);  
    }



    nuevoMantenimiento(mantenimento){
        servTanque.hacerPeticion('/mantenimiento',mantenimento,'POST').then(r=>{
            this.obtnerMantenimientos();
            servNoti.notificarToast("success",r.body.msg);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error"," al insertar dato");
        })

    }

    editarMantenimiento(idm){
        servTanque.hacerPeticion(`/mantenimiento/${idm}`,{},'GET').then(dato=>{
            ventanModal(EditarMantenimiento(dato.body[0]))
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })

    }
    actualizarMantenimiento(mantenimito){
        servTanque.hacerPeticion('/mantenimiento',mantenimito,'PUT').then(datos=>{
            this.obtnerMantenimientos();
            servNoti.notificarToast("success","actualizado");
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","error al cargar")
        })
    }
    eliminarMantenimiento(idm){
        servTanque.hacerPeticion(`/mantenimiento/${idm}`,{},'DELETE').then(r=>{
            this.obtnerMantenimientos();
            servNoti.notificarToast("success",r.body.msg)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos")
        })
    }
}

export default UiMantenimiento;