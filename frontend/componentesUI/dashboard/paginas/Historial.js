"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Historial(){
    const $historial = document.createElement('div');
        $historial.classList.add("pagina");
        $historial.setAttribute('id',"pg2");
        $historial.setAttribute('style',"display:none;")
        $historial.innerHTML=`
        <section class="contenedor-dashboard">
          <div class="historial-muestra-filtro">
            <h3>Historial de hilos de muestras</h3>
            <hr>
          <form action="">
            <p><label for="" class="input-label">Año:</label>
              <input type="number" class="input-dato" id="" placeholder="" required=""/></p>
            <p><label for="" class="input-label">Mes:</label>
              <input type="number" class="input-dato" id="" placeholder="" required=""/></p>
            <p><label for="" class="input-label"></label>
              <button class="segundo-btn">Filtrar</button></p>
          </form>
          </div>
          <div>
          <h3>Historial de hilos</h3> 
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Hilo</th>
                  <th>Fecha inicio</th>
                  <th>Fecha finalizacion</th>
                  <th>Fecha Año</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan='7'>Hilos de muestras</th>
                </tr>
              </tfoot>
              <tbody id="lista-hilos">
                <tr>
                  
                </tr>
        </tbody>
    </table>
</div>     
</section>
        `;
        return $historial;
}