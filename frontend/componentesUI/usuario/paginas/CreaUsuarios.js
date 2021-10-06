"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function CreaUsuarios(){
    const $creausuarios = document.createElement('div');
        $creausuarios.classList.add("pagina");
        $creausuarios.setAttribute('id',"pg2");
        $creausuarios.setAttribute('style',"display:none;")
        $creausuarios.innerHTML=`
        <section class="contenedor-usuario">
    <div class="datos-Usuario">
     <center><h2>Crear Usuario</h2></center>
      <h4><span>Datos personales creados el: 23/05/2020 09:00</span></h4>
      <hr>
    </div>
    <div class="datos-informe-salud">
      <form action="">
        <p><label for="" class="input-label">Primer Apellido:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir primer apellido" required=""/></p>
        <p><label for="" class="input-label">Segundo Apellido:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir Segundo apellido" required=""/></p>
        <p><label for="" class="input-label">Primer Nombre:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir Primer Nombre" required=""/></p>
        <p><label for="" class="input-label">Segundo Nombre:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir Segundo Nombre" required=""/></p>
          <p><label for="" class="input-label">Fecha de Nacimiento:</label>
          <input type="date" class="input-dato" id="" placeholder="Full name" required=""/></p>
          <p><label for="" class="input-label">DPI:</label>
          <input type="text" class="input-dato" id="" placeholder="Digite 13 números" required=""/></p>
          <p><label for="" class="input-label"> Sexo:</label>
          <input type="text" class="input-dato" id="" placeholder="Fémenino o Másculino" required=""/></p>
          <p><label for="" class="input-label">Tel/Celular:</label>
          <input type="text" class="input-dato" id="" placeholder="Digite 8 números" required=""/></p>
          <p><label for="" class="input-label">Correo Electrónico:</label>
          <input type="text" class="input-dato" id="" placeholder="Ejemplo@gmail.com" required=""/></p>
          <p><label for="" class="input-label">Dirección/Residencia:</label>
          <input type="text" class="input-dato" id="" placeholder="Ejem: San José Chacayá" required=""/></p>
          <p><label for="" class="input-label">Zona/Avenida:</label>
          <input type="text" class="input-dato" id="" placeholder="Calle, 000" required=""/></p>
          <p><label for="" class="input-label">Fecha Creación:</label>
          <input type="text" class="input-dato" id="" placeholder="12/03/2021" required=""/></p>
          <div class="select">
          <select name="format" id="format">
            <option selected disabled>selecciona una opcion</option>
            <option value="opcion1">Opcion1</option>
            <option value="opcion2">Opcion2</option>
            <option value="opcion3">Opcion3</option>
            <option value="opcion4">Opcion4</option>
          </select>
        </div>
        </p>
      </form>
      <div class="botones-institucion">
        <p><button class="tercer-btn">Resetear</button></p>
        <p><button class="primer-btn">Guardar</button></p> 
      </div>
    </div> 
  </section>
        `;
        return $creausuarios;
}