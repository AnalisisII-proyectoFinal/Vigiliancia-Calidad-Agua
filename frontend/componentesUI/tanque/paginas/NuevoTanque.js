"use strict";
//@ts-check

//import{validarInput}from '../../utilidades/ValidarFormulario.js'
//import{EditarNuevo}from './EditarNuevo.js'; 
//import{ventanModal}from '../../utilidades/VentanaModal.js';
import UiTanque from "../ui/NuevoTanque.ui.js";
import {subirImagen} from "../../utilidades/SubirImagen.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import {DatosUsuario} from "../../utilidades/DatosUsuario.js";
const uiTanq = new UiTanque();
const servNoti = new ServicioNotificacion();

/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Nuevo(){
    const $nuevo = document.createElement('div');
        $nuevo.classList.add("pagina");
        $nuevo.setAttribute('id',"pg1");
        $nuevo.setAttribute('style',"display:block;")
        $nuevo.innerHTML=`
        <section class="contenedor-tanques">
          <h2>Nuevo Tanque</h2>
            <hr>
            <form>
            <div class="container-img">
                <div class="card">
                <img id="prev-img-t" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                  <div class="card-footer">
                    <progress id="prog-img-t" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-t">
                  </div>
                </div>
              </div>
              <div>
              <p><label for="" class="input-label">Nombre:</label>
                <input type="text" class="input-dato" id="t-nom" placeholder="nombre" required=""/></p>
              <p><label for="" class="input-label">Numero:</label>
                <input type="number" class="input-dato" id="t-num" placeholder="numero" required=""/></p>
              <p><label for="" class="input-label">Ubicacion:</label>
                <input type="text" class="input-dato" id="t-ubic" placeholder="ubicacion" required=""/></p>
              <p><label for="" class="input-label">Fecha en funcionamiento:</label>
                <input type="date" class="input-dato" id="t-ffun" placeholder="" required=""/></p>
              </div>
              <div>
              <p><label for="" class="input-label">Largo(mts):</label>
                <input type="number" class="input-dato" id="t-largo" placeholder="largo mts" required=""/></p>
              <p><label for="" class="input-label">Ancho(mts):</label>
                <input type="number" class="input-dato" id="t-ancho" placeholder="ancho mts" required=""/></p>
              <p><label for="" class="input-label">Altura(mts):</label>
                <input type="number" class="input-dato" id="t-altura" placeholder="altura mts" required=""/></p>
              <div>
              <label for="" class="input-label">Método Cloracion:</label>
              <div class="select">
                <select name="format" id="list-metodo"></select>
              </div>
              </div>
              </div>
            </form>
            <div class="botones-institucion">
              <p><button id="btn-v-e" class="tercer-btn">Nuevo</button></p>
              <p><button id="btn-t-n" class="primer-btn">Guardar</button></p>
            </div>
            <br>
            <h2>Tanques Registrados</h2>
            <hr>
            <div class="tabla-lista">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Ubicacion</th>
                    <th>Inicio</th>
                    <th>largo</th>
                    <th>Ancho</th>
                    <th>Altura</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th colspan='10'>tanques registrados</th>
                  </tr>
                </tfoot>
                <tbody id="lista-tanques"> 
                </tbody>
              </table>
            </div>        
          </section>`;
        function initNuevo(){
          const subirImgT=document.getElementById('subir-img-t');
          subirImgT.addEventListener('change', async (e)=>{
            const imgPrev = document.getElementById('prev-img-t');
            const progImg = document.getElementById('prog-img-t').id;
            const file = e.target.files[0];
            const urlImg = await subirImagen(progImg,file);
            imgPrev.src=urlImg;
          })

          const btnNuevoTanque=document.getElementById('btn-t-n');
          btnNuevoTanque.addEventListener('click',(e)=>{
            e.preventDefault();
            const imgT=document.getElementById('prev-img-t').src;
            const nom = document.getElementById('t-nom').value;
            const num = document.getElementById('t-num').value;
            const ubic = document.getElementById('t-ubic').value;
            const fecha = document.getElementById('t-ffun').value;
            const lar = document.getElementById('t-largo').value;
            const ancho = document.getElementById('t-ancho').value;
            const altura = document.getElementById('t-altura').value;
            const metodo = document.getElementById('list-metodo').value;

            if (nom ===''||num ===''||ubic ===''||fecha ===''||lar ===''||ancho ===''||altura ===''||metodo ==='') {
                servNoti.notificarToast("error","complete todo los campos")
            }else{
              const $dU=DatosUsuario();
              let tanqueD={
                nombre:nom,
                numero:num,
                ubicacion:ubic,
                fechaf:fecha,
                largo:lar,
                ancho:ancho,
                altura:altura,
                img:imgT,
                mcl:metodo,
                idu:$dU.id
              }
              uiTanq.nuevoTanque(tanqueD);
            }
          })

          const listaT=document.getElementById('lista-tanques');
          listaT.addEventListener('click',(e)=>{
            
            if (e.target.classList.contains("eliminar")) {
              let idte = e.target.getAttribute('_id');
              uiTanq.eliminarTanque(idte)
            }else if(e.target.classList.contains('editar')){
              let idt = e.target.getAttribute('_id');
              console.log(idt)
              uiTanq.obtenerTanque(idt)
            }
          })
        }
        setTimeout(()=>initNuevo(),100);
        return $nuevo;
}

