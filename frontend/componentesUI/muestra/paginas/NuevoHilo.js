"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js'
import { EditarNuevoHilo } from './EditarNuevoHilo.js';
import{ventanModal}from '../../utilidades/VentanaModal.js';
import UiNuevoHilo from '../ui/NuevoHilo.ui.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function NuevoHilo(date){
    const $nuevohilo = document.createElement('div');
        $nuevohilo.classList.add("pagina");
        $nuevohilo.setAttribute('id',"pg2");
        $nuevohilo.setAttribute('style',"display:none;")
        $nuevohilo.innerHTML=`
        <section class="contenedor-muestras">
            <h2>Crear nuevo hilo de muestras</h2>
            <hr> 
            <form action="" class="form-nuevo-hilo">
                <p><label for="" class="input-label">Fecha de inicio:</label>
                    <input type="text" class="input-dato" placeholder="" required="" value="${date}" disabled/></p>
                <p><label for="" class="input-label">Fecha de finalizacón:</label>
                    <input type="date" class="input-dato" id="nh-f-fin" placeholder="" required=""/></p>
                <p><label for="" class="input-label">etiqueta:</label>
                    <input type="text" class="input-dato" placeholder="etiquet" id="nh-des" required=""/></p>
                <p><button class="primer-btn" id="nh-n-h">Crear</button></p>
            </form>
        </div>
        <div>
            <h2>Agregar tanques al hilo</h2>
            <hr>
            <div class="contenedor-asignar-tanque">
              <div>
                <form action="">
                  <div class="select">
                    <select id="nh-opc-t"></select>
                  </div>
                  <button id="nh-ag-t" class="primer-btn">Agregar</button>
                </form>
              </div>
              <div class="contenedor-asignacion">
                <ul class="tanque-asignados" id="progreso-asignacion"></ul>
              </div>
            </div>
        </div>
    </section>
</section> 
        `;
        function initNuevoHilo(){
          document.getElementById('nh-n-h').addEventListener('click',()=>{
            const fechaF=document.getElementById('nh-f-fin').value;
            const descrip= document.getElementById('nh-des').value;
            let datosNhilo={
              fechafin:fechaF,
              descripcion:descrip,
              idusuario:1
            }
            const nuevoHilo = new UiNuevoHilo();
            nuevoHilo.nuevoHilo(datosNhilo)
          })


          document.getElementById('nh-ag-t').addEventListener('click',()=>{
            const d =document.getElementById('nh-opc-t');
            if (d.value < 1) {
              const agregarTs=new UiNuevoHilo();
              agregarTs.asignarTanques();
            }else{
              const agregarT=new UiNuevoHilo();
              agregarT.asignarTanque(d.value);
            }
            
          })

         // const tanqopc= new UiNuevoHilo();
         // tanqopc.asignarTanquesOpc();
        }
        setTimeout(()=>initNuevoHilo(),100);
        return $nuevohilo;       
}
