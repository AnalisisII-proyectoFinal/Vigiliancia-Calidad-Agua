//import PeticionPanel from './ControladorPanel.js
import {validarInput} from '../../utilidades/ValidarFormulario.js';
import UiInstitucion from '../ui/Institucion.ui.js';
import { subirImagen } from '../../utilidades/SubirImagen.js'; 
export function Institucion(){
    const $institucion = document.createElement('div');
        $institucion.classList.add("pagina");
        $institucion.setAttribute('id',"pg1");
        $institucion.setAttribute('style',"display:block;")
        $institucion.innerHTML= `
        <section class="contenedor-panel">
        <div class="datos-institucion">
          <h3>Institución</h3>
          <span id="i-fe-d"></span>
          <hr>
          <form>
            <div>
              <p><label for="" class="input-label">Entidad:</label>
              <input type="text"  class="input-datoi"  id="i-nombre" placeholder="Nombre institución" required disabled/></p>
              <p><label for="" class="input-label">Dependencia:</label>
              <input type="text"  class="input-datoi" id="i-depend" placeholder="Dependencia" required disabled/></p>
              <p><label for="" class="input-label">Nombre de la aplicación:</label>
              <input type="text"  class="input-datoi"  id="i-app" placeholder="Nombre del sistema" required disabled/></p>
            </div>
            <div class="container-img">
              <div class="card">
                <img id="prev-logo-i" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                <div class="card-footer">
                  <progress id="prog-logo-i" max="100" value="0" class="progreso-muestra"></progress>
                  <input type="file" id="subir-logo-i">
                </div>
              </div>
            </div>  
           </form>
            <div class="botones-institucion">
                <p><button id="btn-i-e" class="tercer-btn">Editar</button></p>
                <p><button id="btn-i-a" class="primer-btn">Actualizar</button></p>
            </div>
              <h3>Mision</h3>
              <hr>
            <form>
            <div><label for="" class="input-label">Mision:</label>
            <textarea  class="input-datoi" id="i-mision" rows="10" cols="10" maxlength="50" minlength="3" placeholder="Escriba la mision ....." disabled></textarea></div>
            <div class="container-img">
            <div class="card">
            <img id="prev-img-m" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
              <div class="card-footer">
                <progress id="prog-img-m" max="100" value="0" class="progreso-muestra"></progress>
                <input type="file" id="subir-img-m">
              </div>
            </div>
            </div> 
            </form>
              <div class="botones-institucion">
                <p><button id="btn-mision-e" class="tercer-btn">Editar</button></p>
                <p><button id="f-mision" class="primer-btn">Actualizar</button></p>
              </div>
                <h3>Vision</h3>
                <hr>
            <form>
              <div><label for="" class="input-label">Mision:</label>
                <textarea  class="input-datoi" id="i-vision" rows="10" cols="10" maxlength="50" minlength="3" placeholder="Escriba la mision ....." disabled></textarea></div>
              <div class="container-img">
                <div class="card">
                <img id="prev-img-v" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                  <div class="card-footer">
                    <progress id="prog-img-v" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-v">
                  </div>
                </div>
              </div> 
            </form>
            <div class="botones-institucion">
              <p><button id="btn-v-e" class="tercer-btn">Editar</button></p>
              <p><button id="f-vision" class="primer-btn">Actualizar</button></p>
            </div>
          </div>
          <div class="datos-informe-salud">
              <h3>Datos para informe centro de salud</h3>
              <span id="i-fe-sal"></span>
              <hr>
              <form>
                <div>
                  <p><label for="" class="input-label">Departamento:</label>
                    <input type="text" class="input-dato" id="i-dep"  placeholder="Departamento" required="" disabled/></p>
                  <p><label for="" class="input-label">Municipio:</label>
                    <input type="text" class="input-dato" id="i-mun"  placeholder="Municipio" required="" disabled/></p>
                  <p><label for="" class="input-label">Area Saludo:</label>
                    <input type="text" class="input-dato" id="i-a-sal" placeholder="Area salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Servicio de salud:</label>
                    <input type="text" class="input-dato" id="i-s-sal" placeholder="Servicio de Salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Distrito Salud:</label>
                    <input type="text" class="input-dato" id="i-di-sal" placeholder="Distrito de salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Director de Salud:</label>
                    <input type="text" class="input-dato" id="i-d-sal" placeholder="Director de Salud" required="" disabled/></p>
                  <p></p>
                  <p></p>
                </div>
                  <div class="container-img">
                <div class="card">
                <img id="prev-img-s" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                  <div class="card-footer">
                    <progress id="prog-img-s" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-s">
                  </div>
                </div>
              </div>
              <p></p> 
              <div class="container-img">
                <div class="card">
                <img id="prev-img-siv" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                  <div class="card-footer">
                    <progress id="prog-img-siv" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-siv">
                  </div>
                </div>
              </div> 
              </form>
              <div class="botones-institucion">
                <p><button id="btn-s-e" class="tercer-btn">Editar</button></p>
                <p><button id="btn-s-g" class="primer-btn">Actulizar</button></p> 
              </div>
          </div> 
    </section>
        `;
        function iniInstitucion() {

          const eventoInst = new UiInstitucion();

          const $btnEditInst = document.getElementById('btn-i-e');
          $btnEditInst.addEventListener('click',(e)=>{
              e.preventDefault();
              eventoInst.editarDatosInst();
          })
          const inputLogo=document.getElementById('subir-logo-i');
          
          inputLogo.addEventListener('change',async(e)=>{
            const preLogo = document.getElementById('prev-logo-i');
            const barLogo = document.getElementById('prog-logo-i').id
            console.log(barLogo);
           const file = e.target.files[0];
            const pre = await subirImagen(barLogo,file);
            preLogo.src=pre;
          })

          const $actDatosInst = document.getElementById('btn-i-a');
          $actDatosInst.addEventListener('click',(e)=>{
              e.preventDefault();
              const $inpInsNombre = document.getElementById('i-nombre');
              const $inpInsDepen = document.getElementById('i-depend');
              const $inpInsApp = document.getElementById('i-app');
              const $imgp = document.getElementById('prev-logo-i').src;

              let datosInstitucion = {
                entidad:$inpInsNombre.value,
                dependencia:$inpInsDepen.value,
                aplicacion:$inpInsApp.value,
                logo:$imgp
              }
              eventoInst.actualizarDatosInstitucion(datosInstitucion);
          })

          const $btnEditM = document.getElementById('btn-mision-e');
          $btnEditM.addEventListener('click',(e)=>{
              e.preventDefault();
              eventoInst.editarMision();
          })

          const $subirImgM = document.getElementById('subir-img-m');
          $subirImgM.addEventListener('change',async (e)=>{
            const preImg = document.getElementById('prev-img-m');
            const bar = document.getElementById('prog-img-m').id
            const file = e.target.files[0];
            const imgUrl = await subirImagen(bar,file);
            preImg.src=imgUrl;
          })

          const $btnActMision = document.getElementById('f-mision');
          $btnActMision.addEventListener('click',(e)=>{
            e.preventDefault();
            const $inpInsMision = document.getElementById('i-mision');
            const $insMImg = document.getElementById('prev-img-m').src;
            let datosMision = {
              mision:$inpInsMision.value,
              imgm:$insMImg
            }
            eventoInst.actulizarMision(datosMision);
          })


          const $btnEditV = document.getElementById('btn-v-e');
          $btnEditV.addEventListener('click',(e)=>{
            e.preventDefault();
            eventoInst.editarVision();
          })

          const $subirImgVision=document.getElementById('subir-img-v');
          $subirImgVision.addEventListener('change',async (e)=>{
            const preImg = document.getElementById('prev-img-v');
            const bar = document.getElementById('prog-img-v').id
            const file = e.target.files[0];
            const pre = await subirImagen(bar,file);
            preImg.src=pre;
          })

          const $btnActVision = document.getElementById('f-vision');
          $btnActVision.addEventListener('click',(e)=>{
            e.preventDefault();
            const $inpInsVision = document.getElementById('i-vision');
            const $insVImg = document.getElementById('prev-img-v').src;
            let datosVision={
              vision:$inpInsVision.value,
              imgv:$insVImg
            }
              eventoInst.actulizarVision(datosVision);
          });

          const $btnEditS = document.getElementById('btn-s-e');
          $btnEditS.addEventListener('click',(e)=>{
            e.preventDefault();
            eventoInst.editarDatosSalud();
          });


          const $subirImagenSalud = document.getElementById('subir-img-s');
          $subirImagenSalud.addEventListener('change', async(e)=>{
            const prevImg = document.getElementById('prev-img-s');
            const progS = document.getElementById('prog-img-s').id;
            const file = e.target.files[0];
            const imgUrl = await subirImagen(progS,file);
            prevImg.src=imgUrl;
          })

          const $subirImagenSiv = document.getElementById('subir-img-siv');
          $subirImagenSiv.addEventListener('change',async (e)=>{
            e.preventDefault();
            const prevImg = document.getElementById('prev-img-siv');
            const progs = document.getElementById('prog-img-siv').id;
            const file = e.target.files[0];
            const imgUrl = await subirImagen(progs,file);
            prevImg.src= imgUrl;
          })

          const $btnActSalud = document.getElementById('btn-s-g');
          $btnActSalud.addEventListener('click',(e)=>{
            e.preventDefault();
            const $inpSalDep = document.getElementById('i-dep');
            const $inpSalMun = document.getElementById('i-mun');
            const $inpSalArea = document.getElementById('i-a-sal');
            const $inpSalSer = document.getElementById('i-s-sal');
            const $inpSalDis = document.getElementById('i-di-sal');
            const $inpSalDir = document.getElementById('i-d-sal');
            const $imgS = document.getElementById('prev-img-s');
            const $imgSiv = document.getElementById('prev-img-siv');
            let datosSalud ={
              departamento:$inpSalDep.value,
              municipio:$inpSalMun.value,
              areasal:$inpSalArea.value,
              sersal:$inpSalSer.value,
              dissal:$inpSalDis.value,
              dirsal:$inpSalDir.value,
              imgs:$imgS.src,
              imgsiv:$imgSiv.src
            }
            eventoInst.actulizarDatosSalud(datosSalud);
          })
          
        }
        setTimeout(()=>iniInstitucion(),100);
        return $institucion;
}


