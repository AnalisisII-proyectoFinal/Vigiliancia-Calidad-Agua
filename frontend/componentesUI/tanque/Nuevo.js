"use strict";
//@ts-check

import{validarInput}from '../utilidades/ValidarFormulario.js'

/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Nuevo(){
    const $nuevo = document.createElement('div');
        $nuevo.classList.add("pagina");
        $nuevo.setAttribute('id',"pg2");
        $nuevo.setAttribute('style',"display:none;")
        $nuevo.innerHTML=`
        <section class="contenedor-tanques">
              <h2>Crear nuevo tanque</h2>
          <hr>
          <form action="" class="nuevo-tanque">
          <p><label for="" class="input-label">Nombre:</label>
          <input type="text" class="input-dato" name="nombre" id="n-nom" placeholder="nombre" required=""/></p>
        <p><label for="" class="input-label">Numero:</label>
          <input type="text" class="input-dato" id="" placeholder="numero" required=""/></p>
        <p><label for="" class="input-label">Ubicacion:</label>
          <input type="text" class="input-dato" name="descripcion" id="n-ubicacion" placeholder="ubicacion" required=""/></p>
        <p><label for="" class="input-label">Fecha en funcionamiento:</label>
          <input type="date" class="input-dato" name="fecha" id="n-funcion" placeholder="" required=""/></p>
        <p><label for="" class="input-label">Largo:</label>
          <input type="text" class="input-dato" name="nombre" id="n-largo" placeholder="largo mts" required=""/></p>
        <p><label for="" class="input-label">Ancho:</label>
          <input type="text" class="input-dato" name="nombre" id="n-ancho" placeholder="ancho mts" required=""/></p>
        <p><label for="" class="input-label">Altura:</label>
          <input type="text" class="input-dato" name"nombe" id="n-altura" placeholder="altura mts" required=""/></p>
        <p>
              <label for="" class="input-label">Imagen</label>
              <label class="input-archivo">
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span>
                </label>
            </p>
            <button class="primer-btn">Guardar</button>
          </form>
    </section>
        `;
        function iniNuevo(){
          const form = document.querySelector ('.nuevo-tanque');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
          
          //


          //cortas el codigo y lo pegas aqui



        }
        setTimeout(()=>iniNuevo(),100);
        return $nuevo;
}