import ServicioTanque from "../servicio/Tanque.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {EditarMetodoCloracion} from "../paginas/EditarMetodoCloracion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
const servNoti = new ServicioNotificacion();
const servTanq= new ServicioTanque();

class UiMetodoCloracion{
    obtenerMetodosCloracion(){
        servTanq.hacerPeticion('/metodocl',{},'GET').then(datos=>{
            this.listarMetodosCloracion(datos.body)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    obtenerMetodoCloracion(idmc){
        servTanq.hacerPeticion(`/metodocl/${idmc}`,{},'GET').then(dato=>{
            this.editarMetodoCloracion(dato.body)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    listarMetodosCloracion(metodos){
        const $tblmetdoscl = document.getElementById('lista-metodos');
        $tblmetdoscl.innerHTML='';
        console.log(metodos.length)
        if (metodos.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            metodos.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.tratamiento}</td>
                <td>${el.descripcion}</td>
                <td class="opciones-tbl">
                <button _id="${el.id}" class="editar">✏️</button>
                <button _id="${el.id}" class="eliminar">🗑️</button>
                </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tblmetdoscl.appendChild($fragment);
        }else{
            const $filaN = document.createElement('tr');
            $filaN.innerHTML=`<td>
            No se se contraron datos
            </td>`;
            $tblmetdoscl.appendChild($filaN)
        }
    }
    editarMetodoCloracion(metodo){
        console.log(metodo)
        ventanModal(EditarMetodoCloracion(metodo))
    }

    nuevoMetodoCloracion(metodo){
        console.log(metodo)
        servTanq.hacerPeticion('/metodocl',metodo,'POST').then(r=>{
            this.obtenerMetodosCloracion();
            servNoti.notificarToast('success',r.body.msg);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast('error','Al insertar datos')
        })
    }

    actualizarMetodoCloracion(metodo){
        servTanq.hacerPeticion('/metodocl',metodo,'PUT').then(r=>{
            console.log(r);
            this.obtenerMetodosCloracion();
            servNoti.notificarToast("success","actualizado");
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    eliminarMetodoCloracion(idmc){
        servTanq.hacerPeticion(`/metodocl/${idmc}`,{},'DELETE').then(r=>{
            console.log(r)
            this.obtenerMetodosCloracion();
            servNoti.notificarToast("success",r.body.msg)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","Al cargar datos")
        })
    }
}
export default UiMetodoCloracion;