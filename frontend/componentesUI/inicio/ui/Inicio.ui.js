import ServicioInicio from '../servicio/Inicio.ser.js';
import {Tarjeta} from './Tarjeta.js';
const serInicio = new ServicioInicio();

class UiInicio{

    obtnerDatosProgresoMuestras(){
        serInicio.hacerPeticion('/progresoactual',{},'GET').then(datos=>{
            this.crearTargetas(datos.body)
        }).catch(error=>{
            console.log(error)
        })
    }

    crearTargetas(muestras){
        const grafica = document.getElementById('contenedor-progreso-ini');
        const $fragment = document.createDocumentFragment();
        console.log(muestras[0])    
        for (let i = 0; i < muestras.length; i=i+3) {
            let dm1 = muestras[i];
            let dm2 = muestras[i+1];
            let dm3 = muestras[i+2];
            const tarjeta = Tarjeta(dm1,dm2,dm3);
            $fragment.appendChild(tarjeta);
        }
        
        grafica.appendChild($fragment)
    }
}
export default UiInicio;