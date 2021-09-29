import ServicioMuestra from '../servicio/Muestra.ser.js';
import Notificacion from '../../utilidades/Notificacion.js';
const serTipoMuestra = new ServicioMuestra();
const serNotificacionTM=new Notificacion();

class UiTipoMuestra{
    obtnerTipoMuestra(){
        serTipoMuestra.hacerPeticion('/tipomuestra',{},'GET').then(datos=>{
            this.listarTipoMuestra(datos.body)
        }).catch(err=>{
            console.log(err)
            serNotificacionTM('error','erro al cargar')
        })
    }

    listarTipoMuestra(tipomuestra){
        const $tablatipom = document.getElementById('lista-tipo-muestra');
        $tablatipom.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            tipomuestra.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.tm}</td>
                  <td>${el.d}</td>
                  <td>
                  <button _id="${el.id}" class="eliminar">🗑️</button>
                  </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
        $tablatipom.appendChild($fragment);
    }

    nuevoTipoMuestra(tipomuestra){
        serTipoMuestra.hacerPeticion('/tipomuestra',tipomuestra,'POST').then(r=>{
            serNotificacionTM.agregarNotificacion('exito',r.body.msg);
        }).catch(err=>{
            console.log(err)
            serNotificacionTM.agregarNotificacion('error','ocurrio un error');
        })
    }

}
export default UiTipoMuestra;