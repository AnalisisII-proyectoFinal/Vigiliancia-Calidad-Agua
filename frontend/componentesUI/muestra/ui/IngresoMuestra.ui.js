import ServicioMuestra from '../servicio/Muestra.ser.js';
import Notificacion from '../../utilidades/Notificacion.js';
import {EditarIngresoMuestra} from '../paginas/EditarIngresoMuestra.js';
import {ventanModal} from '../../utilidades/VentanaModal.js';
const serIngMuestra = new ServicioMuestra();
const serNotificacion = new Notificacion();

class UiIngMuestra{

    obtenerMuestras(){
        serIngMuestra.hacerPeticion('/muestrashilo',{},'GET').then(datos=>{
            this.listarMuestras(datos.body)
        }).catch(errr=>{
            console.log(errr)
        })
    }

    listarMuestras(muestras){
        const $tablamuestras = document.getElementById('lista-muestras');
        $tablamuestras.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            muestras.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                  <td>${$n}</td>
                  <td>${el.t}</td>
                  <td>${el.tm}</td>
                  <td>${el.pm}</td>
                  <td>${el.ph}</td>
                  <td>${el.cl}</td>
                  <td>${el.pa}</td>
                  <td>${el.f}</td>
                  <td>
                  <button _id="${el.id}" class="editar">✏️</button>
                  <button _id="${el.id}" class="eliminar">🗑️</button>
                  </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablamuestras.appendChild($fragment);
    }

    nuevaMuestra(muestra){
        serIngMuestra.hacerPeticion('/muestra',muestra,'POST').then(r=>{
            serNotificacion.agregarNotificacion('exito',r.body.msg);
        }).catch(err=>{
            console.log(err)
            serNotificacion.agregarNotificacion('error','ocurrio un erro')
        })
    }











    editarMuestra(){
        serIngMuestra.hacerPeticion('/editmuestra',{},'GET').then(datos=>{
            ventanModal(EditarIngresoMuestra(datos.body))
        })
    }

    
}
export default UiIngMuestra;