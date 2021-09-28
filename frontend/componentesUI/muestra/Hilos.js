"use strict";
//@ts-check
import{validarInput}from '../utilidades/ValidarFormulario.js'
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Hilos(){
    const $hilos = document.createElement('div');
        $hilos.classList.add("pagina");
        $hilos.setAttribute('id',"pg1");
        $hilos.setAttribute('style',"display:block;")
        $hilos.innerHTML=`
        <section class="contenedor-muestras">
        <h3>Hilo de muestras</h3>
        <hr>
        <form action="" class="tanque-buscador">
            <input type="text" class="input-buscador" name="nombre" id="n-tanque" placeholder="nombre del tanque" required=""/>
            <button class="primer-btn">Buscar</button>
        </form>
        <div>
        <h3>Hilo de muestras</h3>
        <hr>
        <table>
            <thead>
                <tr>
                  <th>No.</th>
                  <th>Tanque 1</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Fecha de inicio</th>
                  <th>Fecha de finalización</th>
                  <th>Responsables</th>
                  <th>Tipo de muestra</th>
                  <th>Punto de muestra</th>
                  <th>PH</th>
                  <th>Cloro recidual</th>
                  <th>Presion de Agua</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>tanque 1</td>
                  <td>Sebastian JUlajuj</td>
                  <td>Reparacion de tanque</td>
                  <td>22/08/2021</td>
                  <td>26/08/2021</td>
                  <td>Director</td>
                  <td>tanque 2</td>
                  <td>Sanjose Chacaya</td>
                  <td>7</td>
                  <td>compuesto reductores</td>
                  <td>regular</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>tanque 1</td>
                    <td>Roberto Carlos</td>
                    <td>mantenimiento de tanque</td>
                    <td>21/08/2021</td>
                    <td>22/08/2021</td>
                    <td>Director</td>
                    <td>tanque 1</td>
                    <td>Sanjose Chacaya</td>
                    <td>7</td>
                    <td>compuesto reductores</td>
                    <td>regular</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>tanque 1</td>
                    <td>Leonardo Cuxulic</td>
                    <td>mantenimiento de tanque</td>
                    <td>22/08/2021</td>
                    <td>26/08/2021</td>
                    <td>Director</td>
                    <td>tanque 3</td>
                    <td>Sanjose Chacaya</td>
                    <td>7</td>
                    <td>compuesto reductores</td>
                    <td>regular</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>tanque 1</td>
                    <td>Elias JUlajuj</td>
                    <td>mantenimiento de tanque</td>
                    <td>28/08/2021</td>
                    <td>29/08/2021</td>
                    <td>Director</td>
                    <td>tanque 1</td>
                    <td>Sanjose Chacaya</td>
                    <td>7</td>
                    <td>compuesto reductores</td>
                    <td>regular</td>
                </tr>
        </tbody>
    </table>
    </div>
  </section>
        `;
        function iniHilo(){
          const form = document.querySelector ('.tanque-buscador');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })



        }
        setTimeout(()=>iniHilo(),100);
        return $hilos;
}