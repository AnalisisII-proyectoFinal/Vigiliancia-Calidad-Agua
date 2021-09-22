"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function IngresoMuestra(){
    const $ingresomuestra = document.createElement('div');
        $ingresomuestra.classList.add("pagina");
        $ingresomuestra.setAttribute('id',"pg3");
        $ingresomuestra.setAttribute('style',"display:none;")
        $ingresomuestra.innerHTML=`
        <section class="contenedor-muestras">
        <div>
          <h3>Ingreso de muestra</h3>
          <hr>
          <form action="" class="form-ingreso-muestra">
          <p>
            <label class="input-label" for="">Tipo de muestra</label>
            <select class="input-opciones" id="">
              <option value="Opcion 1">Opcion 1</option>
              <option value="Opcion 2">Opcion 2</option>
              <option value="Opcion 3">Opcion 3</option>
              <option value="Opcion 4">Opcion 4</option>
              <option value="Opcion 5">Opcion 5</option>
            </select>
          </p>
          <p><label for="" class="input-label">Punto de muestra:</label>
          <input type="text" class="input-dato" name="nombre" id="n-muestra" placeholder="Hogar,tanque.." required=""/></p>
        <p><label for="" class="input-label">PH:</label>
          <input type="text" class="input-dato" name="numero" id="n-ph" placeholder="ph" required=""/></p>
        <p><label for="" class="input-label">Cloro recidual:</label>
          <input type="text" class="input-dato" name="numero" id="n-color" placeholder="" required=""/></p>
        <p><label for="" class="input-label">Presion de agua:</label>
          <input type="text" class="input-dato" name="numero" id="n-precsion" placeholder="" required=""/></p>  
          </form>
          <div class="btn-ingreso-muestra">
          <button class="primer-btn">Guardar</button>
          <button class="segundo-btn">Nueva Muestra</button>
          </div>
          </div>
          <div>
          <h2>Historial de muestras</h2>
          <hr>
          <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Tipo de muestra</th>
                  <th>Punto de muestra</th>
                  <th>PH</th>
                  <th>Cloro recidual</th>
                  <th>Presion de Agua</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>tanque 1</td>
                  <td>Carlos JUlajuj</td>
                  <td>8</td>
                  <td>compuesto reductores</td>
                  <td>regular</td>
                  <td><a class='button' href='#'>Editar</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tanque 2</td>
                  <td>Juan Carlos</td>
                  <td>8</td>
                  <td>cloraminas</td>
                  <td>Normal</td>
                  <td><a class='button' href='#'>Editar</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Tanque 3</td>
                  <td>Sebastian Par</td>
                  <td>7</td>
                  <td>Organicos de cloro</td>
                  <td>Regular</td>
                  <td><a class='button' href='#'>Editar</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Tanque 4</td>
                  <td>Mario JUlajuj</td>
                  <td>7</td>
                  <td>Cloro no destruidos</td>
                  <td>Normal</td>
                  <td><a class='button' href='#'>Editar</a></td>
                </tr>
        </tbody>
    </table>
    </table>
  </div>
</section> 
        `;
        function iniIngresoMuestra(){
          const form = document.querySelector ('.form-ingreso-muestra');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>iniIngresoMuestra(),100);
        return $ingresomuestra;
}