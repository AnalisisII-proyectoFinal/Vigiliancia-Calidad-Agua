import ServicioMuestra from '../servicio/Muestra.ser.js';
import Notificacion from '../../utilidades/Notificacion.js';
import {EditarIngresoMuestra} from '../paginas/EditarIngresoMuestra.js';
import {ventanModal} from '../../utilidades/VentanaModal.js';
const serIngMuestra = new ServicioMuestra();
const serNotificacion = new Notificacion();

class UiIngMuestra{

    obtenerMuestras(){
        serIngMuestra.hacerPeticion('/muestra',{},'GET').then(datos=>{
            this.listarMuestras(datos.body)
        }).catch(errr=>{
            console.log(errr)
        })
    }

    obtnerHilo(){
        serIngMuestra.hacerPeticion('/hiloactual',{},'GET').then(datos=>{
            this.agregarHilo(datos.body);
        })
    }

    agregarHilo(hilo){
        console.log(hilo)
        const h = document.getElementById('i-m-hilo');
        let titulo = `Ingreso Muestras : Hilo De: ${hilo[0].inicio} AL: ${hilo[0].fin}`;
        h.innerHTML=titulo;
        document.getElementById('hilo-id').innerHTML=hilo[0].id;
     }

//--tanque,tipomuestra,punto,ph,cl,fecha,hora,responsable,cliente
    listarMuestras(muestras){
        const $tablamuestras = document.getElementById('lista-muestras');
        $tablamuestras.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            muestras.forEach(el=>{
                let client = (el.cliente === 1)?'🖥️':'📱';
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                  <td>${$n}</td>
                  <td>${el.tanq}</td>
                  <td>${el.tmuestra}</td>
                  <td>${el.pmuestra}</td>
                  <td>${el.ph}</td>
                  <td>${el.cl}</td>
                  <td>${el.fecha}</td>
                  <td>${el.hora}</td>
                  <td>${el.usuario}</td>
                  <td>${client}</td>
                  <td>
                  <button _id="${el.id}" class="editar">✏️</button>
                  <button _id="${el.id}" class="eliminar">🗑️</button>
                  </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablamuestras.appendChild($fragment);
    }

    obtnerTanquesOpc(){
        serIngMuestra.hacerPeticion('/tanquesopc',{},'GET').then(datos=>{
            this.llenarOpcTanques(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }


    llenarOpcTanques(tanques){
        console.log(tanques);
        const $selectT =document.getElementById('m-t-op')
        $selectT.innerHTML='';
            let $fragment= document.createDocumentFragment();
            tanques.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.nombre}`;
                $fragment.appendChild($fila)
            })
              
            $selectT.appendChild($fragment);
    }

    obtnerTipoMuestra(){
        serIngMuestra.hacerPeticion('/tipomuestra',{},'GET').then(datos=>{
            this.llenarOpcTipoMuestra(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }

    llenarOpcTipoMuestra(tipomuestra){
        console.log(tipomuestra);
        const $selectTM =document.getElementById('m-tp-op')
        $selectTM.innerHTML='';
            let $fragment= document.createDocumentFragment();
            tipomuestra.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.tipo}`;
                $fragment.appendChild($fila)
            })
              
            $selectTM.appendChild($fragment);

    }


    nuevaMuestra(muestra){
        serIngMuestra.hacerPeticion('/muestra',muestra,'POST').then(r=>{
            serNotificacion.agregarNotificacion('exito',r.body.msg);
            this.obtenerMuestras();
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