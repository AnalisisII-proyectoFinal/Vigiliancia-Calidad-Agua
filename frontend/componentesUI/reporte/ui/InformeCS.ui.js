import ServicioReporte from "../servicios/Reporte.serv.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {InformeCS}from "../paginas/InformeCS.js";
import {ventanModal}from "../../utilidades/VentanaModal.js";
const servReporte = new ServicioReporte();
const servNoti = new ServicioNotificacion();
class UiInformeCS{
    obtnerMuestrasxHilo(idh){
        servReporte.hacerPeticion(`/centrosaludxhilo/${idh}`,{},'GET').then(datos=>{
            this.previuInforme(datos.body)
            console.log(datos)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos")
        })
    }
    previuInforme(muestras){
        ventanModal(InformeCS(muestras))
    }
    
    
}
export default UiInformeCS;