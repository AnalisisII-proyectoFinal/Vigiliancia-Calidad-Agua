import ServicioTanque from "../servicio/Tanque.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion";
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

    listarMantenimientos(mantenimientos){

    }
    nuevoMantenimiento(mantenimento){
        servTanque.hacerPeticion('/',mantenimento,'POST').then(r=>{
            servNoti.notificarToast("succes","se inserto el datos");
        }).catch(err=>{
            servNoti.notificarToast("error"," al insertar dato");
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