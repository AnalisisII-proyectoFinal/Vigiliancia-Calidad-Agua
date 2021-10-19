import ServicioUsuario from '../servicio/Usuario.ser.js';
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {VerDetalles} from "../paginas/VerDetalles.js";
import {EditarUsuario} from "../paginas/EditarUsuario.js";
const servUsuario = new ServicioUsuario();
const servNoti = new ServicioNotificacion();

class UiListarUsuario{
    obtenerDatosUsuarios(){
        servUsuario.hacerPeticion('/usuarios',{},'GET').then(datos=>{
            this.mostrarUsuarios(datos.body)
        }).catch(error=>{
            console.log(error)
        })
    }
    obtenerDatosUsuario(idu){
        servUsuario.hacerPeticion(`/usuario/${idu}`,{},'GET').then(dato=>{
            this.verDetallesUsuario(dato)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos")
        })
    }
    mostrarUsuarios(usuarios){
        const $lista = document.getElementById('lista-usuarios');
        $lista.innerHTML='';
        const $fragment = document.createDocumentFragment();
        let $no = 1;
        usuarios.forEach(el => {
            let check = (el.estado > 0)?'':'checked=""';
            const $fila = document.createElement('tr');
            $fila.innerHTML=`
            <td>${$no}</td>
            <td>${el.nombre}</td>
            <td>${el.dpi}</td>
            <td>${el.direccion}</td>
            <td>${el.cargo}</td>
            <td>
            <input type="checkbox" class="estado" _id="${el.id}" ${check}>
            </td>
            <td>
            <button class="editar" _id="${el.id}">✏️</button>
            <button class="eliminar" _id="${el.id}">🗑️</button>
            <button class="ver" _id="${el.id}">🔍​</button>
            </td>
            `;
            $fragment.appendChild($fila)
            $no++;
        });

        $lista.appendChild($fragment)
    }
    editarUsuario(){
        ventanModal(EditarUsuario())
    }
    eliminarUsuario(idu){
       servUsuario.hacerPeticion('/',{idu:idu},'DELETE').then(r=>{
           console.log(r);
            servNoti.notificarToast("success","eliminado")
       }).catch(err=>{
           console.log(err)
           servNoti.notificarToast("error","al cargar datos");
       }) 

    }
    verDetallesUsuario(){
        ventanModal(VerDetalles())   
    }

}
export default UiListarUsuario;