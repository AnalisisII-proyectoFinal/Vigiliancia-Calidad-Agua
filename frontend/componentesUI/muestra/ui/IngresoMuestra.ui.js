import ServicioMuestra from '../servicio/Muestra.ser.js';
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {EditarIngresoMuestra} from '../paginas/EditarIngresoMuestra.js';
import {ventanModal} from '../../utilidades/VentanaModal.js';
const serIngMuestra = new ServicioMuestra();
const servNoti = new ServicioNotificacion();

class UiIngMuestra{

    obtenerMuestras(){
        serIngMuestra.hacerPeticion('/muestra/0/0',{},'GET').then(datos=>{
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
        let fI=this.formatearFecha(hilo[0].fecha1);
        let fF = this.formatearFecha(hilo[0].fecha2);
        const $h = document.getElementById('i-m-hilo');
         $h.innerHTML= `Ingreso Muestras De: ${fI} AL: ${fF} [${hilo[0].porcentaje}%]`;
         document.getElementById('p-hilo-i').setAttribute('value',hilo[0].porcentaje);
         document.getElementById('hilo-id').innerHTML=hilo[0].id
     }

     formatearFecha(fecha){
        const f = new Date(fecha);
        const mes = f.getMonth() + 1; 
        const dia = f.getDate();
        return `${(dia < 10 ? '0' : '').concat(dia)}-${(mes < 10 ? '0' : '').concat(mes)}-${f.getFullYear()}`;
    }

    listarMuestras(muestras){
        const $tablamuestras = document.getElementById('lista-muestras');
        $tablamuestras.innerHTML='';
        if (muestras.length != 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            muestras.forEach(el=>{
                let client = (el.cliente === 1)?'🖥️':'📱';
                let ff= this.formatearFecha(el.fecha);
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                  <td>${$n}</td>
                  <td>${el.tanq}</td>
                  <td>${el.tmuestra}</td>
                  <td>${el.pmuestra}</td>
                  <td>${el.ph}</td>
                  <td>${el.cl}</td>
                  <td>${ff}</td>
                  <td>${el.hora}</td>
                  <td>${el.usuario}</td>
                  <td>${client}</td>
                  <td>
                  <button _id="${el.id}" class="editar">✏️</button>
                  </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablamuestras.appendChild($fragment);
            
        }else{
            let $filas = document.createElement('tr');
            $filas.innerHTML=`No hay resultados`
        }
            
    }

    obtnerTanquesOpc(){
        serIngMuestra.hacerPeticion('/tanquesopc',{},'GET').then(datos=>{
            this.llenarOpcTanques(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }


    llenarOpcTanques(tanques){
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
            this.obtenerMuestrasIncompletadTanque(tanques[0].id)
    }

    obtenerMuestrasIncompletadTanque(idt){
        serIngMuestra.hacerPeticion(`/muestrasincompletas/${idt}`,{},'GET').then(datos=>{
            this.llenarSelectMuestras(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }

    llenarSelectMuestras(muestrasIn){
        const $selectTM =document.getElementById('m-tp-op');
        $selectTM.innerHTML='';
        if (muestrasIn.length != 0) {
            let $fragment= document.createDocumentFragment();
            muestrasIn.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.idm}`;
                $fragment.appendChild($fila)
            })
            $selectTM.appendChild($fragment);
        }else{
            const $opt=document.createElement('option');
            $opt.setAttribute('selected',true);
            $opt.setAttribute('disabled',true);
            $opt.innerHTML=`completado`;
            $selectTM.appendChild($opt);
        }
        
           // let op=`<option selected disabled>muestra</option>`;
           // $selectTM.appendChild(op);
             
            /*
        if (muestrasIn.length > 0) {
            
        }else{
            let ops=`<option selected disabled>No hay muestras</option>`;
            $selectTM.appendChild(ops);
            $selectTM.appendChild($fragment);
        }    */
    }


    nuevaMuestra(muestra){
        console.log(muestra)
        serIngMuestra.hacerPeticion('/muestra',muestra,'POST').then(r=>{
            servNoti.notificarToast('success',r.body.msg);
            this.obtenerMuestras();
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast('error',"Al cargar los datos");
        })
    }


    editarMuestra(){
        serIngMuestra.hacerPeticion('/editmuestra',{},'GET').then(datos=>{
            ventanModal(EditarIngresoMuestra(datos.body))
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast('error',"Al cargar los datos");
        })
    }

    
}
export default UiIngMuestra;