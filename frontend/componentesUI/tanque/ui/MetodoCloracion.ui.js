import ServicioTanque from "../servicio/Tanque.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {EditarMetodoCloracion} from "../paginas/EditarMetodoCloracion.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
const servNoti = new ServicioNotificacion();
const servTanq= new ServicioTanque();

class UiMetodoCloracion{
    obtenerMetodosCloracion(){
        servTanq.hacerPeticion('/',{},'GET').then(datos=>{
            this.listarMetodosCloracion(datos)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    obtenerMetodoCloracion(){
        servTanq.hacerPeticion('/',{},'GET').then(dato=>{
            this.editarMetodoCloracion(dato)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    listarMetodosCloracion(metodos){
        
        
    }
    editarMetodoCloracion(metodo){
        console.log(metodo)
        ventanModal(EditarMetodoCloracion())
    }
    actualizarMetodoCloracion(){
        servTanq.hacerPeticion('/',{},'PUT').then(r=>{
            console.log(r);
            servNoti.notificarToast("success","actualizado");
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    eliminarMetodoCloracion(idmt){
        servTanq.hacerPeticion('/',{idmt:idmt},'DELETE').then(r=>{
            console.log(r)
            servNoti.notificarToast("success","eliminado")
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","Al cargar datos")
        })
    }
}
export default UiMetodoCloracion;