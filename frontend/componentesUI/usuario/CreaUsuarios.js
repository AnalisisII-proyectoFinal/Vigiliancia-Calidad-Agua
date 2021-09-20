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
        <section class="contenedor-Usuarios">
    <div class="datos-Usuario">
     <center><h2>Crear Usuario</h2></center>
      <h4><span>Datos personales creados el: 23/05/2020 09:00</span></h4>
      <hr>
    </div>
    <div class="datos-informe-salud">
      <form action="">
        <p><label for="" class="input-label">Primer Apellido:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir apellido" required=""/></p>
        <p><label for="" class="input-label">Segundo Apellido:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir apellido" required=""/></p>
        <p><label for="" class="input-label">Primer Nombre:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir Nombre" required=""/></p>
        <p><label for="" class="input-label">Segundo Nombre:</label>
          <input type="text" class="input-dato" id="" placeholder="Escribir Nombre" required=""/></p>
          <div>
          <h3>General</h3>
          <hr>
          </div>
          <p><label for="" class="input-label">Fecha de Naciemiento:</label>
          <input type="date" class="input-dato" id="" placeholder="Full name" required=""/></p>
          <p><label for="" class="input-label">DPI:</label>
          <input type="text" class="input-dato" id="" placeholder="Digite 13 números" required=""/></p>
          <p><label for="" class="input-label">Tel/Celular:</label>
          <input type="text" class="input-dato" id="" placeholder="Digite 8 números" required=""/></p>
          <p><label for="" class="input-label">Correo Electrónico:</label>
          <input type="text" class="input-dato" id="" placeholder="Ejemplo@gmail.com" required=""/></p>
          <p><label for="" class="input-label">Residencia/Domicilio:</label>
          <input type="text" class="input-dato" id="" placeholder="Ejem: San José Chacayá" required=""/></p>
          <p><label for="" class="input-label">Zona/Avenida:</label>
          <input type="text" class="input-dato" id="" placeholder="Calle, 000" required=""/></p>
          <p><label for="" class="input-label">Cargo/Rol:</label>
              <select class="input-opciones" id="">
                <option value="Opcion 1">Elige cargo        ☟</option>
                <option value="Opcion 2">Secetaria</option>
                <option value="Opcion 3">Director de A.S</option>
                <option value="Opcion 3">Auxiliar de Director de A.S</option>
                <option value="Opcion 3">Otro</option>
        </p>
<select class="input-opciones" id="">
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