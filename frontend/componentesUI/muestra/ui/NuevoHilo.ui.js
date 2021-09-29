import ServicioMuestra from '../servicio/Muestra.ser.js';
import Notificacion from '../../utilidades/Notificacion.js';
const serNuevoHilo = new ServicioMuestra();
const serNotificacionNH= new Notificacion();

class UiNuevoHilo{
    nuevoHilo(datosnhilo){
        serNuevoHilo.hacerPeticion('/nuevohilo',datosnhilo,'POST').then(r=>{
            this.asignarTanquesOpc();
            serNotificacionNH.agregarNotificacion('exito',r.body.msg);   
        }).catch(err=>{
            console.log(err)
            serNotificacionNH.agregarNotificacion('error','ocurrio un error')
        })
    }

    asignarTanquesOpc(){
        serNuevoHilo.hacerPeticion('/tanquesopc',{},'GET').then(datos=>{
            this.mostrarTanques(datos.body)
            this.dibujarTanques(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }
    mostrarTanques(tanques){
        const $selectT =document.getElementById('nh-opc-t')
        $selectT.innerHTML='';
            let $fragment= document.createDocumentFragment();
           // let $opc1=`<option selected disabled> tanques </option>`;
            let $opc2=`<option value="0"> todos </option>`;
            //$fragment.;
            //$fragment.appendChild($opc2);
            tanques.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.nombre}`;
                $fragment.appendChild($fila)
            })
              
            $selectT.appendChild($fragment);
            $selectT.innerHTML += $opc2;
    }

    asignarTanque(idt){
        serNuevoHilo.hacerPeticion('/agregartanque',{idtanque:idt},'POST').then(r=>{
            this.activarTanque(idt)
            serNotificacionNH.agregarNotificacion('exito',r.body.msg)
        }).catch(err=>{
            console.log(err)
        })
    }
    asignarTanques(){
        serNuevoHilo.hacerPeticion('/agregartanques',{},'POST').then(r=>{
            this.activarTanques()
            serNotificacionNH.agregarNotificacion('exito',r.body.msg)
        }).catch(err=>{
            console.log(err)
        })
    }

    dibujarTanques(tanques){
        const $proAsign = document.getElementById('progreso-asignacion');
        let $fragment= document.createDocumentFragment();
        $proAsign.innerHTML='';
        tanques.forEach(el=>{
            let $fila = document.createElement('li');
            $fila.setAttribute('id','t'+el.id)
              $fila.innerHTML=`
                ${el.nombre}`;
              $fragment.appendChild($fila)
          })      
        $proAsign.appendChild($fragment);
    }

    activarTanque(idt){
        const d =document.getElementById(`t${idt}`).classList.add('listo');
        serNotificacionNH.agregarNotificacion('exito','se agregaron tanques al hilo')
    }
    activarTanques(){
        document.querySelectorAll('li').forEach(el=>{
            el.classList.add('listo');
        })
    }
}
export default UiNuevoHilo;