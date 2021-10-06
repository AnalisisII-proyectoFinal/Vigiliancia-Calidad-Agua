//import PeticionPanel from './ControladorPanel.js
import {validarInput} from '../../utilidades/ValidarFormulario.js';
import UiInstitucion from '../ui/Institucion.ui.js'; 
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
              <p><label for="" class="input-label">Entidad:</label>
              <input type="text"  class="input-datoi"  id="i-nombre" placeholder="Nombre institución" required/></p>
              <p><label for="" class="input-label">Dependencia:</label>
              <input type="text"  class="input-datoi" id="i-depend" placeholder="Dependencia" required /></p>
              <p class="contenedor-archivo">
              <label  for="">logotipo de institucion:</label>
              <input id="i-log" type="file"></p>
              <p><label for="" class="input-label">Nombre de la aplicación:</label>
              <input type="text"  class="input-datoi"  id="i-app" placeholder="Nombre del sistema" required/></p>
           </form>
            <div class="botones-institucion">
                <p><button id="btn-i-e" class="tercer-btn">Editar</button></p>
                <p><button id="btn-i-a" class="primer-btn">Actualizar</button></p>
            </div>
              <h3>Mision</h3>
              <hr>
            <form>
                <p><label for="" class="input-label">Mision:</label>
                  <textarea  class="input-datoi" id="i-mision" rows="4" cols="37" maxlength="100" minlength="3" placeholder="Escriba la mision ....." disabled></textarea></p>
                <p class="contenedor-archivo">
                    <label for="">Imagen mision:</label>
                    <input id="i-log-m" type="file"></p>
            </form>
            <div class="botones-institucion">
              <p><button id="btn-mision-e" class="tercer-btn">Editar</button></p>
              <p><button id="f-mision" class="primer-btn">Actualizar</button></p>
            </div>
                <h3>Vision</h3>
                <hr>
            <form>
                  <p>
                    <label for="" class="input-label">Vision:</label>
                    <textarea  class="input-datoi" id="i-vision" rows="4" cols="37" maxlength="100" minlength="3" placeholder="Escriba la vision ....." disabled></textarea>
                  </p>
                  <p class="contenedor-archivo">
                      <label for="">Imagen vision:</label>
                      <input id="i-log-v" type="file">
                  </p>
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
              <form  class="datos-centro-salud">
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
              </form>
              <div class="botones-institucion">
                <p><button id="btn-s-e" class="tercer-btn">Editar</button></p>
                <p><button id="btn-s-g" class="primer-btn">Actulizar</button></p> 
              </div>
              <h3>Logotipos</h3>
              <hr>
              <form>
                <p><img id="btn-v-sal" src="" alt="logo" height="50px" width="50px"></p>
                <p class="contenedor-archivo">
                <label for="">logotipo Ministerio de Salud:</label>
                <input id="i-log-sal" type="file"></p>
                <p></p>
                <p><button id="btn-a-sal" class="primer-btn">Actualizar</button></p> 
              </form>
              <hr>
              <form>
              <p><img id="btn-v-siv" src="" alt="logo" height="50px" width="50px"></p>
              <p class="contenedor-archivo">
              <label for="">logotipo SIVIAGUA:</label>
              <input id="i-log-siv" type="file"></p>
              <p></p>
              <p><button id="btn-a-siv" class="primer-btn">Actualizar</button></p> 
              </form>
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

          const $actDatosInst = document.getElementById('btn-i-a');
          $actDatosInst.addEventListener('click',(e)=>{
              e.preventDefault();
              const $inpInsNombre = document.getElementById('i-nombre');
              const $inpInsDepen = document.getElementById('i-depend');
              const $inpInsApp = document.getElementById('i-app');
              const $inpInsLog = document.getElementById('i-log');
                const formData = new FormData();
                formData.append('entidad',$inpInsNombre.value)
                formData.append('dependencia',$inpInsDepen.value)
                formData.append('aplicacion',$inpInsApp.value)
                formData.append('imagen',$inpInsLog.files[0])
              eventoInst.actualizarDatosInstitucion(formData);
          })

          const $btnEditM = document.getElementById('btn-mision-e');
          $btnEditM.addEventListener('click',(e)=>{
              e.preventDefault();
              eventoInst.editarMision();
          })

          const $btnActMision = document.getElementById('f-mision');
          $btnActMision.addEventListener('click',(e)=>{
            e.preventDefault();
            const $inpInsMision = document.getElementById('i-mision');
            const $inpInsMImg = document.getElementById('i-log-m');
            const datosMision = new FormData();
            datosMision.append('mision',$inpInsMision.value)
            datosMision.append('imagen',$inpInsMImg.files[0])
            eventoInst.actulizarMision(datosMision);
          })
          
          const $btnEditV = document.getElementById('btn-v-e');
          $btnEditV.addEventListener('click',(e)=>{
            e.preventDefault();
            eventoInst.editarVision();
          })

          const $btnActVision = document.getElementById('f-vision');
          $btnActVision.addEventListener('click',(e)=>{
            e.preventDefault();
            const $inpInsVision = document.getElementById('i-vision');
            const $inpInsVImg = document.getElementById('i-log-v');
            const datosVision = new FormData();
              datosVision.append('vision',$inpInsVision.value)
              datosVision.append('imagen',$inpInsVImg.files[0])
              eventoInst.actulizarVision(datosVision);
          });

          const $btnEditS = document.getElementById('btn-s-e');
          $btnEditS.addEventListener('click',(e)=>{
            e.preventDefault();
            eventoInst.editarDatosSalud();
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

            let datosSalud ={
              departamento:$inpSalDep.value,
              municipio:$inpSalMun.value,
              areasal:$inpSalArea.value,
              sersal:$inpSalSer.value,
              dissal:$inpSalDis.value,
              dirsal:$inpSalDir.value,
            }
            eventoInst.actulizarDatosSalud(datosSalud);
          })

          const $btnActlogoSal = document.getElementById('btn-a-sal');
          $btnActlogoSal.addEventListener('click', async function(e){
            e.preventDefault();
           const $inpSalLog = document.getElementById('i-log-sal');
           const logsal = new FormData()
            logsal.append('imagen',$inpSalLog.files[0])
            eventoInst.actualizarLogoSalud(logsal);
          })
          const $btnActlogoSiv = document.getElementById('btn-a-siv')
          $btnActlogoSiv.addEventListener('click',function(e) {
            const $inpSalSiv = document.getElementById('i-log-siv');
            const logsiv = new FormData();
            logsiv.append('imagen',$inpSalSiv.files[0])
            eventoInst.actualizarLogoSiv(logsiv);
          })
          
        }
        setTimeout(()=>iniInstitucion(),100);
        return $institucion;
}
