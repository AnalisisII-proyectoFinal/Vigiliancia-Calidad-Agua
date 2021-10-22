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
    obtenerDatosUsuario(idu,edit){
        servUsuario.hacerPeticion(`/usuario/${idu}`,{},'GET').then(dato=>{
            if (edit < 1) {
                this.verDetallesUsuario(dato.body[0])
            }else{
                this.editarUsuario(dato.body[0])
            }
            
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
            const $fila = document.createElement('tr');
            $fila.innerHTML=`
            <td>${$no}</td>
            <td>${el.nombre}</td>
            <td>${el.dpi}</td>
            <td>${el.direccion}</td>
            <td>${el.cargo}</td>
            <td>
            <button class="detalle" _id="${el.id}">📇​</button>
            </td>
            <td class="opciones-tbl">
            <button class="editar" _id="${el.id}">✏️</button>
            <button class="eliminar" _id="${el.id}">🗑️</button>
            </td>
            `;
            $fragment.appendChild($fila)
            $no++;
        });
        $lista.appendChild($fragment)
    }
    editarUsuario(empleado){
        ventanModal(EditarUsuario(empleado))
    }
    eliminarUsuario(idu){
       servUsuario.hacerPeticion(`/usuario/${idu}`,{},'DELETE').then(r=>{
           console.log(r);
           this.obtenerDatosUsuarios();
            servNoti.notificarToast("success",r.body.msg)
       }).catch(err=>{
           console.log(err)
           servNoti.notificarToast("error","al cargar datos");
       }) 

    }
    verDetallesUsuario(empleado){
        ventanModal(VerDetalles(empleado))   
    }
    actualizarEmpleado(empleado){
        console.log(empleado)
        servUsuario.hacerPeticion('/usuario',empleado,'PUT').then(r=>{
            this.obtenerDatosUsuarios();
            servNoti.notificarToast('success',r.body.msg)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast('error','no se puedo actuaizar')
        })
    }

}
export default UiListarUsuario;