"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo usuario
 * @returns {void} historial del modulo y funcionalidades
 */
export function EditaUsuarios(){
    const $editausuarios = document.createElement('div');
        $editausuarios.classList.add("pagina");
        $editausuarios.setAttribute('id',"pg3");
        $editausuarios.setAttribute('style',"display:none;")
        $editausuarios.innerHTML=`
    <section class="contenedor-Usuarios">
    <div class="datos-Usuario">
     <center><h2>Editar Usuarios</h2></center> 
     <form action="" class="Buscar usuario">
     <input type="text" class="input-buscador" id="" placeholder="Id, Apellido, DPI, Cargo" required=""/>
     <button class="primer-btn">Buscar</button>
     </form>
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
        <p><button class="tercer-btn">Actualizar</button></p>
        <p><button class="primer-btn">Resetear</button></p> 
      </div>
    </div> 
  </section>
        `;
        return $editausuarios;
}