import ServicioDashboard from "../servicio/dashboard.ser.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import { TargetaDash } from "../paginas/TargetaDash.js";
const serDashboar = new ServicioDashboard();
class UiHiloActual{
    obtnerMuestras(){
        serDashboar.hacerPeticion('/progresoactual',{},'GET').then(datos=>{
            this.crearTargetas(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }

    crearTargetas(muestras){
        const $contenedor = document.getElementById('g-t-p-d');
        $contenedor.innerHTML='';
        const $fragment = document.createDocumentFragment();
        for (let i = 0; i < muestras.length; i=i+3) {
            let dm1 = muestras[i];
            let dm2 = muestras[i+1];
            let dm3 = muestras[i+2];
            const tarjeta = TargetaDash(dm1,dm2,dm3);
            $fragment.appendChild(tarjeta);
        }
        $contenedor.appendChild($fragment)
    }

    notificar(){
        //const noti = new ServicioNotificacion();
        //noti.mostrarNotificacion()
    }

}

export default UiHiloActual;