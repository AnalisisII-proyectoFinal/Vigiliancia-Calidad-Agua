"use strict";
//@ts-check
import{validarInput}from '../../utilidades/ValidarFormulario.js'
import {subirImagen}from "../../utilidades/SubirImagen.js";
import UiMantenimiento from '../ui/Mantenimiento.ui.js';
import ServicioNotificacion from '../../utilidades/Notificacion.js';
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Mantenimiento(){
    const $mantenimiento = document.createElement('div');
        $mantenimiento.classList.add("pagina");
        $mantenimiento.setAttribute('id',"pg2");
        $mantenimiento.setAttribute('style',"display:none;")
        $mantenimiento.innerHTML=`
        <section class="contenedor-tanques">
            <h2>Mantenimiento y mejoras de tanques</h2>
            <hr>
            <form action="" class="form-mantenimiento">
            <div class="container-img">
              <div class="card">
                <img id="prev-img-m" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                  <div class="card-footer">
                    <progress id="prog-img-m" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-m">
                  </div>
                </div>
              </div>
              <div>
              </div>
              <div>
                <p><label for="" class="input-label">Titulo:</label>
                  <input type="text" class="input-dato"  id="m-titulo" placeholder="titulo" required=""/></p>
                <p><label for="" class="input-label">Descripcion:</label>
                  <input type="text" class="input-dato"  id="m-descripcion" placeholder="descripcion" required=""/></p>
                <p><label for="" class="input-label">Fecha:</label>
                  <input type="date" class="input-dato"  id="m-fecha" placeholder="" required=""/></p>
                <p>
                  <label class="input-label" for="">Tanque</label>
                    <div class="select">
                    <select  id="opt-t-m"></select>
                  </div>
                </p>
              </div>
            </form>
            <br>
              <div class="botones-institucion">
                <p><button id="btn-m-g" class="tercer-btn">Guardar</button></p>
              </div>
            </div>
            <h2>Mantenimientos</h2>
            <hr>
            <div class="tabla-lista">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Tanque</th>
                    <th>Titulo</th>
                    <th>Descripción</th>
                    <th>Fecaha</th>
                    <th>Opciones</th>
                    <th>detalles</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th colspan='7'>tanques registrados</th>
                  </tr>
                </tfoot>
                <tbody id="lista-mantenimientos"> 
                </tbody>
              </table>
            </div>        
</section>
        `;
        function initMantenimiento(){
            const uiMant = new UiMantenimiento();
            const servNoti = new ServicioNotificacion();
            uiMant.obtnerMantenimientos();
            uiMant.obtenerTanques();

          const subirImg=document.getElementById('subir-img-m');
          subirImg.addEventListener('change', async (e)=>{
            const prevImg = document.getElementById('prev-img-m');
            const progImg = document.getElementById('prog-img-m').id;
            const file = e.target.files[0];
            const urlImg = await subirImagen(progImg,file);
            prevImg.src=urlImg;
          })

          document.getElementById('lista-mantenimientos').addEventListener('click',(e)=>{
            if (e.target.classList.contains('editar')) {
              const idm = e.target.getAttribute('_id');
              uiMant.editarMantenimiento(idm)
            }else if (e.target.classList.contains('eliminar')){
              const idmt = e.target.getAttribute('_id');
             console.log(idmt)
               uiMant.eliminarMantenimiento(idmt);
            }
          })

          const btnGuardar = document.getElementById('btn-m-g');
          
          btnGuardar.addEventListener('click',(e)=>{
            const titulo=document.getElementById('m-titulo').value;
            const desc = document.getElementById('m-descripcion').value;
            const fecha = document.getElementById('m-fecha').value;
            const img = document.getElementById('prev-img-m').src;
            const tanq = document.getElementById('opt-t-m').value;
            if (titulo!==''||desc!==''||fecha!==''||img!==''||tanq!=='') {
              let datosMant={
                titulo:titulo,
                descripcion:desc,
                fecha:fecha,
                idtanq:tanq,
                img:img,
                idu:4
              }
              console.log(datosMant);
              uiMant.nuevoMantenimiento(datosMant);
            }else{
              servNoti.notificarToast('error',"llene todos los campos")
            }
          })
          
          
          /*
          const form = document.querySelector ('.form-mantenimiento');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })*/
        }
        setTimeout(()=>initMantenimiento(),100);
        return $mantenimiento;
}