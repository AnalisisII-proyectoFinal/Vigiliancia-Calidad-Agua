import ServicioAplicacion from "../servicio/Aplicacion.ser.js"
import ServicioNotificacion from '../../utilidades/Notificacion.js';
import {ventanModal} from '../../utilidades/VentanaModal.js';
import ServicioAuth from "../servicio/Auth.ser.js";
import { EditarPerfil } from "../paginas/Perfil.js";
const servAplicacion = new ServicioAplicacion();
const serNoti = new ServicioNotificacion();
const servAuth = new ServicioAuth();

class UiAplicacion{
    obtenerDatosEncabezado(){
        const $log = document.getElementById('logo-inst');
        const $tituloEl = document.createElement('h1');
        servAplicacion.hacerPeticion('/datosinstitucion',{},'GET').then(datos =>{
            console.log(datos.body)
            $tituloEl.innerHTML=`${datos.body[0].entidad}<br>${datos.body[0].dependencia}<br>${datos.body[0].app}`;
            $log.src=datos.body[0].logo;
        }).then(()=>{
            const content = document.getElementById('encabezado-datos');
            content.innerHTML='';
            content.appendChild($tituloEl);
        })
    }

    autenticarUsuario(datosUsuario){
        servAuth.hacerPeticion('/autenticarusuario',datosUsuario,'POST').then(res=>{
            if (res.body.t === 0) {
               serNoti.notificarToast('error',res.body.msg)
            }else{
              this.ingresarSistema(res.body)
              serNoti.notificarToast('success',"Bienvenido");
            }              
          }).catch(err=>{
            console.log(err)
            serNoti.notificarToast('warning',"Al cargar los datos");
          })
    }

    ingresarSistema(datosUs){
        const $avatar = document.getElementById('avatar-us');
        const idu=datosUs.id;
        localStorage.setItem('dataUser',JSON.stringify(datosUs));
        location.href= '#/app/dashboard';
        this.obtenerDatosUsuario(idu)
        $avatar.style.visibility = 'visible';  
    }

    obtenerDatosUsuario(idu){
        servAplicacion.hacerPeticion(`/infousuario/${idu}`,{},'GET').then( datos=>{
            localStorage.setItem('nombre',datos.body[0].nombre);
            localStorage.setItem('avatar',datos.body[0].avatar);
            serNoti.notificarToast("success","Se cargaron datos")
         }).catch(err=>{
           console.log(err)
           serNoti.notificarToast('warning',"Al cargar los datos")
         })
         this.actualizarPerfil();
    }
    
    editarPerfil(idu){
        servAplicacion.hacerPeticion(`/obtenerdatosusuario/${idu}`,{},'GET').then(datos=>{
            console.log(datos.body)
            ventanModal(EditarPerfil(datos.body))
        }).catch(err=>{
            console.log(err)
            serNoti.notificarToast("error","No se pudo cargar los datos")
        })

    }
    actualizarPerfil(){
        document.getElementById('avatar-us').src=localStorage.getItem('avatar');
        document.getElementById('nombre-u').innerHTML=localStorage.getItem('nombre');
    }

    mostrarPerfil(){
        document.getElementById('perfil-usuario').style.visibility="visible";
        document.getElementById('btn-irlogin').style.visibility="hidden";    
    }
    ocultarPerfil(){
        document.getElementById('perfil-usuario').style.visibility="hidden";
        document.getElementById('btn-irlogin').style.visibility="visible";
    }
    
    cambiarContrasena(password){
        console.log(password)
    }
    cambiarPin(pin){
        console.log(pin)
    }
    actualizarDatosUsuario(datos){
        console.log(datos)
    }
}
export default UiAplicacion;