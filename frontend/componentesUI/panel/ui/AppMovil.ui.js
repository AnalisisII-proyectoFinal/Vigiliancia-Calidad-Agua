import ServicioPanel from '../servicio/Panel.ser.js';
import ServicioNotificacion from '../../utilidades/Notificacion.js';
import {ventanModal} from '../../utilidades/VentanaModal.js';
const serAppMovil = new ServicioPanel();
const servNoti = new ServicioNotificacion();

class UiAppMovil{

    obtnerUsuariosApp(){
            serAppMovil.hacerPeticion('/appmovil',{},'GET').then(datos=>{
              console.log(datos.body);
              this.listarUsuarios(datos.body)
            }).catch(err=>{
              console.log(err)
            })
    }

    listarUsuarios(usuarios){
        const $tablaUsuarios = document.getElementById('lista-app-us');
        $tablaUsuarios.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            usuarios.forEach(el=>{
              let check=(el.acceso > 0)?'':'checked=""';
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.usuario}</td>
                <td>${el.empleado}</td>
                <td>${el.cargo}</td>
                <td>${el.fecha}</td>
                <td>
                <input type="checkbox" class="estado" _id="${el.idu}" ${check}>
                </td>
                <td>
                <button class="eliminar" _id="${el.idu}">🗑️</button>
                </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablaUsuarios.appendChild($fragment);
    }

    agregarUsuario(us){
      serAppMovil.hacerPeticion('/appmovilnuevo',{usuario:us},'POST').then(r=>{
        this.obtnerUsuariosApp();
        servNoti.notificarToast('success',r.body.msg);
        }).catch(err=>{
              console.log(err)
              servNoti.notificarToast('error','No se agregor el usuario');
        })
    }

    cambiarEstadoAcceso(idUsario,estado){
        let accesoU 
        if (estado) {
            accesoU=0;
        }else{
            accesoU=1
        } 
        serAppMovil.hacerPeticion('/appmovilestado',{id:idUsario,acceso:accesoU},'PUT').then(r=>{
            servNoti.notificarToast('success',r.body.msg);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast('error','Transaccion Fallida');
        })
    }

    eliminarUsuarioApp(idUs){
        let res = confirm("Quieres eliminar el registro .?")
        if (res) {
            serAppMovil.hacerPeticion('/eliminarusuario',{id:idUs},'PUT').then(r=>{
                this.obtnerUsuariosApp();
                servNoti.notificarToast('success',r.body.msg);
            }).catch(err=>{
                console.log(err)
                servNoti.notificarToast('error','Transaccion Fallida');
            })
        }else{
            servNoti.notificarToast('info','Eliminacion, cancelado');
        }
    }


   

}
export default UiAppMovil;