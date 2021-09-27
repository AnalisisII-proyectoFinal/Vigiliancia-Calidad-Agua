//import PeticionPanel from './ControladorPanel.js
import {validarInput} from '../../utilidades/ValidarFormulario.js';
import UiInstitucion from '../ui/Institucion.ui.js';
export function Institucion(){
    const $institucion = document.createElement('div');
        $institucion.classList.add("pagina");
        $institucion.setAttribute('id',"pg1");
        $institucion.setAttribute('style',"display:block;")
        $institucion.innerHTML=`
        <section class="contenedor-panel">
          <div class="datos-institucion">
            <h3>Institución</h3>
            <span id="i-fe-d"></span>
            <hr>
            <form action="" class="form-datos-institucion">
                <p><label for="" class="input-label">Entidad:</label>
                    <input type="text" class="input-datoi" id="i-nombre" placeholder="Nombre institución" required="" disabled/></p>
                <p><label for="" class="input-label">Dependencia:</label>
                    <input type="text" class="input-datoi"  id="i-depend" placeholder="Dependencia" required="" disabled/></p>
                <p class="contenedor-archivo">
                    <label for="">logotipo de institucion:</label>
                    <input id="i-log" type="file">
                </p>
                <p><label for="" class="input-label">Nombre de la aplicación:</label>
                    <input type="text" class="input-datoi" name="texto" id="i-app" placeholder="Nombre del sistema" required="" disabled/></p>
                <p><label for="" class="input-label">Mision:</label>
                    <textarea  class="input-datoi" id="i-mision" rows="4" cols="37" maxlength="100" minlength="3" placeholder="Escriba la mision ....." disabled></textarea>
                <p class="contenedor-archivo">
                    <label for="">Imagen mision:</label>
                    <input id="i-log-m"type="file">
                </p>
                <p><label for="" class="input-label">Vision:</label>
                    <textarea  class="input-datoi" id="i-vision" rows="4" cols="37" maxlength="100" minlength="3" placeholder="Escriba la vision ....." disabled></textarea>
                <p class="contenedor-archivo">
                    <label for="">Imagen vision:</label>
                    <input id="i-log-v" type="file">
                  </p>
              </form>
              <div class="botones-institucion">
                    <p><button id="btn-i-e" class="tercer-btn">Editar</button></p>
                    <p><button id="btn-i-g" class="primer-btn">Guardar</button></p> 
              </div>
          </div>
          <div class="datos-informe-salud">
              <h3>Datos para informe centro de salud</h3>
              <span id="i-fe-sal"></span>
              <hr>
              <form action="" class="datos-centro-salud" >
                  <p><label for="" class="input-label">Departamento:</label>
                    <input type="text" class="input-dato" id="i-dep" placeholder="Departamento" required="" disabled/></p>
                  <p><label for="" class="input-label">Municipio:</label>
                    <input type="text" class="input-dato" id="i-mun" placeholder="Municipio" required="" disabled/></p>
                  <p><label for="" class="input-label">Area Saludo:</label>
                    <input type="text" class="input-dato" id="i-a-sal" placeholder="Area salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Servicio de salud:</label>
                    <input type="text" class="input-dato" id="i-s-sal" placeholder="Servicio de Salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Distrito Salud:</label>
                    <input type="text" class="input-dato" id="i-di-sal" placeholder="Distrito de salud" required="" disabled/></p>
                  <p><label for="" class="input-label">Director de Salud:</label>
                    <input type="text" class="input-dato" name="texto" id="i-d-sal" placeholder="Director de Salud" required="" disabled/></p>
                  <p></P>
                  <p></p>
                  <p class="contenedor-archivo">
                    <label for="">logotipo Ministerio de Salud:</label>
                    <input id="i-log-sal" type="file"></p>
                  <p></p>
                  <p class="contenedor-archivo">
                    <label for="">logotipo SIVIAGUA:</label>
                    <input id="i-log-siv" type="file"></p>
              </form>
              <br>
              <br>
              <div class="botones-institucion">
                <p><button id="btn-s-e" class="tercer-btn">Editar</button></p>
                <p><button id="btn-s-g" class="primer-btn">Guardar</button></p> 
              </div>
          </div> 
      </section>
        `;
        function iniInstitucion() {
          //elementos datos institucion
          const $inpInsNombre = document.getElementById('i-nombre');
          const $inpInsDepen = document.getElementById('i-depend');
          const $inpInsApp = document.getElementById('i-app');
          const $inpInsLog = document.getElementById('i-log');
          const $inpInsMision = document.getElementById('i-mision');
          const $inpInsMImg = document.getElementById('i-log-m');
          const $inpInsVision = document.getElementById('i-vision');
          const $inpInsVImg = document.getElementById('i-log-v');
          //botones datos institucion
          const $btnInsE= document.getElementById('btn-i-e');
          const $btnInsG = document.getElementById('btn-i-g');
          //elemntos del centro salud
          
          const $inpSalDep = document.getElementById('i-dep');
          const $inpSalMun = document.getElementById('i-mun');
          const $inpSalArea = document.getElementById('i-a-sal');
          const $inpSalSer = document.getElementById('i-s-sal');
          const $inpSalDis = document.getElementById('i-di-sal');
          const $inpSalDir = document.getElementById('i-d-sal');
          const $inpSalLog = document.getElementById('i-log-sal');
          const $inpSalSiv = document.getElementById('i-log-siv');

          //botones de datos centro de salud
          const $btnSalE= document.getElementById('btn-s-e');
          const $btnSalG = document.getElementById('btn-s-g');
          //habilitar inputs y obtner datos
          $btnSalE.addEventListener('click',()=>{
            const $editSal = new UiInstitucion();
            $editSal.obtnerDatosSalud();
          })
          
          
          $btnSalG.addEventListener('click',()=>{
            const datosSalud = new FormData();
            datosSalud.append('departamento',$inpSalDep.value)
            datosSalud.append('municipio',$inpSalMun.value)
            datosSalud.append('areasal',$inpSalArea.value)
            datosSalud.append('sersal',$inpSalSer.value)
            datosSalud.append('dissal',$inpSalDis.value)
            datosSalud.append('dirsal',$inpSalDir.value)
            datosSalud.append('logsal','img-siv')
            datosSalud.append('logsiv','img-siv')
            const $actDatosSalud = new UiInstitucion();
            $actDatosSalud.actulizarDatosSalud(datosSalud);
          })

        
          /**
           * funcionalidade de datos institucion
           */
          //habilitar botones y obtner datos datos 
          $btnInsE.addEventListener('click',()=>{
             const $obtDatosInst= new UiInstitucion();
              $obtDatosInst.obtnerDatosInstitucion();
          })


          $btnInsG.addEventListener('click',()=>{

            const datosInst=new FormData();
            datosInst.append('entidad',$inpInsNombre.value)
            datosInst.append('dependencia',$inpInsDepen.value)
            datosInst.append('aplicacion',$inpInsApp.value)
            datosInst.append('logotipo','img')
            datosInst.append('mision',$inpInsMision.value)
            datosInst.append('imgm','img-vision')
            datosInst.append('vision',$inpInsVision.value)
            datosInst.append('imgv','img-vision')

            const $actDatosIns = new UiInstitucion();
            $actDatosIns.actualizarDatosInstitucion(datosInst);
          })
          // validar datos
          /*
          const form = document.querySelector('.form-datos-institucion');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.type;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })*/
          
        }
        setTimeout(()=>iniInstitucion(),100);
        return $institucion;
}
