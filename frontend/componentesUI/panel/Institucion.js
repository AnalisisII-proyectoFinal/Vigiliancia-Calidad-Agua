//import PeticionPanel from './ControladorPanel.js
import {validarInput} from '../utilidades/ValidarFormulario.js';
export function Institucion(){
    const $institucion = document.createElement('div');
        $institucion.classList.add("pagina");
        $institucion.setAttribute('id',"pg1");
        $institucion.setAttribute('style',"display:block;")
        $institucion.innerHTML=`
        <section class="contenedor-panel">
    <div class="datos-institucion">
      <h3>Institución</h3>
      <span>Datos actualizados el: 21/01/2021 08:55</span>
      <hr>
      <form action="" class="form-datos-institucion">
        <p><label for="" class="input-label">Entidad:</label>
          <input type="text" class="input-dato" name="titulo" id="n-institucion" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Departamento:</label>
           <input type="text" class="input-dato" name="titulo" id="dependencia" placeholder="Dependencia" required=""/></p>
        <p class="contenedor-archivo">
            <label for="">logotipo:</label>
              <label class="input-archivo"> 
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span>
              </label>
          </p>
        <p><label for="" class="input-label">Nombre del Sistema:</label>
           <input type="text" class="input-dato" name="titulo" id="n-sis" placeholder="Nombre del sistema" required=""/></p>
        <p><label for="" class="input-label">Mision:</label>
           <input type="text" class="input-dato" id="" placeholder="Mision" required=""/></p>
        <p class="contenedor-archivo">
            <label for="">Imagen mision:</label>
              <label class="input-archivo"> 
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span>
              </label>
          </p>
          <p><label for="" class="input-label">Vision:</label>
          <input type="text" class="input-dato" id="" placeholder="Vision" required=""/></p>
       <p class="contenedor-archivo">
           <label for="">Imagen vision:</label>
             <label class="input-archivo"> 
                 <input type="file" id="file" aria-label="archivo">
                 <span class="input-archivo-personalizado"></span>
             </label>
         </p>
      </form>
      <div class="botones-institucion">
        <p><button class="tercer-btn">Editar</button></p>
        <p><button class="primer-btn">Guardar</button></p> 
      </div>
    </div>
    <div class="datos-informe-salud">
      <h3>Datos para informe centro de salud</h3>
      <span>Datos actualizados el: 21/01/2021 08:55</span>
      <hr>
      <form action="">
        <p><label for="" class="input-label">Departamento:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Municipio:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Area Saludo:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Servicio de salud:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Distrito Salud:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Director de Salud:</label>
          <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p class="contenedor-archivo">
            <label for="">logotipo Ministerio de Salud:</label>
              <label class="input-archivo"> 
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span></label></p>
        <p class="contenedor-archivo">
            <label for="">logotipo SIVIAGUA:</label>
              <label class="input-archivo"> 
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span></label></p>
      </form>
      <div class="botones-institucion">
        <p><button class="tercer-btn">Editar</button></p>
        <p><button class="primer-btn">Guardar</button></p> 
      </div>
    </div> 
  </section>
        `;
        function iniInstitucion() {
          const form = document.querySelector('.form-datos-institucion');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
                
                  
               
        }
        setTimeout(()=>iniInstitucion(),100);
        return $institucion;
}