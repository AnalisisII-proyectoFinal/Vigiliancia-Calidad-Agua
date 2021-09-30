"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js';
import UiIngMuestra from '../ui/IngresoMuestra.ui.js';


/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function IngresoMuestra(){
    const $ingresomuestra = document.createElement('div');
        $ingresomuestra.classList.add("pagina");
        $ingresomuestra.setAttribute('id',"pg3");
        $ingresomuestra.setAttribute('style',"display:none;")
        $ingresomuestra.innerHTML=`
        <section class="contenedor-muestras">  
        <div>
          <h3>Ingreso de muestra ----  Hilo actual 123466 [Del: 05/10/2021 Al: 10/11/2021]</h3>
          <hr>
          <form action="" class="form-ingreso-muestra">
          <div><label for="" class="input-label">Tanque:</label>
            <div class="select">    
                <select id="m-tanque">
                    <option selected disabled>opcion</option>
                    <option value="opcion1">Opcion1</option>
                    <option value="opcion2">Opcion2</option>
                    <option value="opcion3">Opcion3</option>
                    <option value="opcion4">Opcion4</option>
                </select>
            </div>
            </div>
          <div><label for="" class="input-label">Tipo:</label>
            <div class="select">    
                <select id="m-tipo">
                    <option selected disabled>opcion</option>
                    <option value="opcion1">Opcion1</option>
                    <option value="opcion2">Opcion2</option>
                    <option value="opcion3">Opcion3</option>
                    <option value="opcion4">Opcion4</option>
                </select>
            </div>
            </div>
          <div>
          <label for="" class="input-label">Punto de muestra:</label>
            <input type="text"  id="m-punto" class="input-dato" placeholder="Hogar,tanque.." required=""/></div>
          <div><label for="" class="input-label">PH:</label>
            <input type="number" id="m-ph" class="input-dato"  placeholder="ph" required=""/></div>
          <div><label for="" class="input-label">Cloro recidual:</label>
            <input type="number" id="m-cl" class="input-dato"  placeholder="cloro" required=""/></div>
          <div><label for="" class="input-label">Presion de agua:</label>
            <input type="number" id="m-pa" class="input-dato" placeholder="presion agua" required=""/></div>
          </form>
          <br>
          <br>
          <div class="btn-ingreso-muestra">
            <button id="m-btn-g" class="primer-btn">Guardar</button>
            <button id="m-btn-n" class="segundo-btn">Nueva Muestra</button>
          </div>
          </div>
          <div>
          <h2>Historial de muestras</h2>
          <hr>
          <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Tanque</th>
                  <th>Tipo de muestra</th>
                  <th>Punto de muestra</th>
                  <th>PH</th>
                  <th>Cloro recidual</th>
                  <th>Presion de Agua</th>
                  <th>fecha</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody id="lista-muestras">
              </tbody>
    </table>
  </div>
  </section> 
        `;
        function initEditarIngresoMuestra(){

          const $mtanque = document.getElementById('m-tanque');
          const $mtipo = document.getElementById('m-tipo');
          const $mpunto = document.getElementById('m-punto');
          const $mph = document.getElementById('m-ph');
          const $mcl = document.getElementById('m-cl');
          const $mpa = document.getElementById('m-pa');
          const $btng = document.getElementById('m-btn-g');
          const $btnn = document.getElementById('m-btn-n');

          $btng.addEventListener('click',()=>{
            let datosMuestra={
              tanque:$mtanque.value,
              tipo:$mtipo.value,
              punto:$mpunto.value,
              ph:$mph.value,
              cl:$mcl.value,
              pa:$mpa.value
            }
            const $nuevaMuestra = new UiIngMuestra();
            $nuevaMuestra.nuevaMuestra(datosMuestra);
          })


          document.getElementById('tabla-ingreso-muestra').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              const editMuestra = new UiIngMuestra();
              editMuestra.editarMuestra();
            }else if (e.target.classList.contains('eliminar')){
              console.log('eliminando registro');
            }
          })




          const form = document.querySelector ('.form-ingreso-muestra');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>initEditarIngresoMuestra(),100);
        return $ingresomuestra;
}