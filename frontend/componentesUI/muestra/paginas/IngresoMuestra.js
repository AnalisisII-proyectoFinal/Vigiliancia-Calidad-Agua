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
            <h3 id="i-m-hilo"></h3>
            <progress id="p-hilo-i" max="100" value="" class="progreso-muestra"></progress>
            <hr>
          <form action="" class="form-ingreso-muestra">
          <p id="hilo-id" hidden></p>
          <div><label for="" class="input-label">Tanque:</label>
            <div class="select">    
                <select id="m-t-op">
                </select>
            </div>
            </div>
          <div><label for="" class="input-label">Tipo:</label>
            <div class="select">    
                <select id="m-tp-op">
                </select>
            </div>
            </div>
          <div>
          <label for="" class="input-label">Punto de muestra:</label>
            <input type="text"  id="m-punto" class="input-dato" placeholder="Hogar,tanque.." required=""/></div>
          <div><label for="" class="input-label">PH(ml):</label>
            <input type="number" id="m-ph" class="input-dato"  placeholder="ph" required=""/></div>
          <div><label for="" class="input-label">Cloro recidual(ml):</label>
            <input type="number" id="m-cl" class="input-dato"  placeholder="cloro" required=""/></div>
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
          <div class="tabla-lista">
          <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Tanque</th>
                  <th>Tipo</th>
                  <th>Punto</th>
                  <th>PH</th>
                  <th>Cloro</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Responsable</th>
                  <th>cliente<th>
                  <th>Opciones<th>
                </tr>
              </thead>
              <tbody id="lista-muestras">
              </tbody>
            </table>
            </div>
          </div>
        </section> 
        `;
        function initEditarIngresoMuestra(){

          const $mtanque = document.getElementById('m-t-op');
          const $mpunto = document.getElementById('m-punto');
         
          const $midh = document.getElementById('hilo-id');
          const $btng = document.getElementById('m-btn-g');
          const $btnn = document.getElementById('m-btn-n');
          //tanque,tipo,punto,ph,cl,idus,idh,cliente
          $mtanque.addEventListener('change',(e)=>{
            const obtenerMuestra=new UiIngMuestra();
            obtenerMuestra.obtenerMuestrasIncompletadTanque(e.target.value);
          })




          $btng.addEventListener('click',()=>{
            const $idMuestra=document.getElementById('m-tp-op');
            const $mph = document.getElementById('m-ph');
            const $mcl = document.getElementById('m-cl');
            let $idU=0;
            if (localStorage.getItem('dataUser')) {
              let dataU=localStorage.getItem('dataUser');
              let dataParse=JSON.parse(dataU);
              $idU=dataParse.id;
            }

            let datosMuestra={
              idm:$idMuestra.value,
              punto:$mpunto.value,
              ph:$mph.value + 'ml',
              cl:$mcl.value + 'ml',
              idu: $idU,
              idh:$midh.innerHTML
            }
            const $nuevaMuestra = new UiIngMuestra();
            $nuevaMuestra.nuevaMuestra(datosMuestra);
          })


          document.getElementById('lista-muestras').addEventListener('click',(e)=>{
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