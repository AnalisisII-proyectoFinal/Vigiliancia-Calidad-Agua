import PeticionInicio from './Controlador.js'

export function Inicio() {
    const $Inicio = document.createElement('div');
    $Inicio.classList.add('inicio')
    $Inicio.innerHTML=`
    <section class="contenedor-progreso">
    <h2>PROGRESO DE TOMA DE MUESTRA</h2>
    <h3>Del: 21/05/2021 Al: 28/05/2021</h3>
    <div class="contenedor-grafica">
      <div class="contenedor-tanque-card">
        <div class="tanque-card">
          <div class="frente-card">
            <p>Tanque 2</p>
            <hr>
            <div>
              <p style="width:35%" data-value="35">Tanque</p>
              <progress max="100" value="35" class="progreso-muestra">
              <span style="width: 35%"> 35%</span>
            </div>
            <div>
              <p style="width:35%" data-value="35">Hogar</p>
              <progress max="100" value="35" class="progreso-muestra">
              <span style="width: 35%"> 35%</span>
            </div>
            <div>
              <p style="width:35%" data-value="35">Hogar 2</p>
              <progress max="100" value="35" class="progreso-muestra">
              <span style="width: 35%"> 35%</span>
            </div>
          </div>
          <div class="detras-card">
            <p>Tanque</p>
              <div class="contenedor-toma">
                <ul class="muestras-progreso">
                  <li class="listo">ph(1.2)</li>
                  <li class="listo">cloro(2.1)</li>
                  <li class="listo">pa(3.2)</li>
                </ul>
              </div>
              <p>Hogar</p>
              <div class="contenedor-toma">
                <ul class="muestras-progreso">
                  <li class="listo">ph(1.2)</li>
                  <li class="listo">cloro(2.1)</li>
                  <li class="">pa(3.2)</li>
                </ul>
              </div>
              <p>Hogar2</p>
              <div class="contenedor-toma">
                <ul class="muestras-progreso">
                  <li class="listo">ph(1.2)</li>
                  <li class="">cloro(2.1)</li>
                  <li class="">pa(3.2)</li>
                </ul>
              </div>
          </div>
        </div>
      </div><div class="contenedor-tanque-card">
      <div class="tanque-card">
        <div class="frente-card">
          <p>Tanque 2</p>
          <hr>
          <div>
            <p style="width:35%" data-value="35">Tanque</p>
            <progress max="100" value="35" class="progreso-muestra">
            <span style="width: 35%"> 35%</span>
          </div>
          <div>
            <p style="width:35%" data-value="35">Hogar</p>
            <progress max="100" value="35" class="progreso-muestra">
            <span style="width: 35%"> 35%</span>
          </div>
          <div>
            <p style="width:35%" data-value="35">Hogar 2</p>
            <progress max="100" value="35" class="progreso-muestra">
            <span style="width: 35%"> 35%</span>
          </div>
        </div>
        <div class="detras-card">
          <p>Tanque</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="listo">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="listo">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
            <p>Hogar2</p>
            <div class="contenedor-toma">
              <ul class="muestras-progreso">
                <li class="listo">ph(1.2)</li>
                <li class="">cloro(2.1)</li>
                <li class="">pa(3.2)</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section id="#/vision-mision" class="contenedor-vision-mision">
    <div class="vision">
      <div>
        <h2>Vision</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus odit aliquam veniam, magni ratione facere odio itaque recusandae blanditiis iure iusto? Minima itaque natus qui praesentium accusantium veniam iure!
        </p>
      </div>
      <div>
        <img src="./assets/img/grid_view_black_24dp.svg" alt="">
      </div>  
    </div>
    <div class="mision">
      <div>
        <h2>Mision</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus odit aliquam veniam, magni ratione facere odio itaque recusandae blanditiis iure iusto? Minima itaque natus qui praesentium accusantium veniam iure!
        </p>
      </div>
      <div>
        <img src="./assets/img/grid_view_black_24dp.svg" alt="">
      </div>  
    </div>
  </section>
  <section id="#/publicacion" class="contenedor-publicacion">
    <h2>Mejoras y mantenimientos</h2>
    <div class="publicaciones">
      <div class="contenendor-publicacion">
        <div class="card-public">
          <div class="imgpublic">
            <img src="./assets/img/muestra.svg" alt="">
          </div>
          <div class="descripcion-public">
            <h2>helllo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius, velit suscipit. Nesciunt quaerat corporis 
            odit! Labore neque ex Aut doloremque quae eos alias unde!</p>
          </div>
        </div>
      </div>
      <div class="contenendor-publicacion">
        <div class="card-public">
          <div class="imgpublic">
            <img src="./assets/img/muestra.svg" alt="">
          </div>
          <div class="descripcion-public">
            <h2>helllo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius, velit suscipit. Nesciunt quaerat corporis 
            odit! Labore neque ex Aut doloremque quae eos alias unde!</p>
          </div>
        </div>
      </div>
      <div class="contenendor-publicacion">
        <div class="card-public">
          <div class="imgpublic">
            <img src="./assets/img/muestra.svg" alt="">
          </div>
          <div class="descripcion-public">
            <h2>helllo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius, velit suscipit. Nesciunt quaerat corporis 
            odit! Labore neque ex Aut doloremque quae eos alias unde!</p>
          </div>
        </div>
      </div>
      <div class="contenendor-publicacion">
        <div class="card-public">
          <div class="imgpublic">
            <img src="./assets/img/muestra.svg" alt="">
          </div>
          <div class="descripcion-public">
            <h2>helllo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius, velit suscipit. Nesciunt quaerat corporis 
            odit! Labore neque ex Aut doloremque quae eos alias unde!</p>
          </div>
        </div>
      </div>
    </div>
  </section><br>
   <footer>
   <div class="footer-datos">
     <div >
       <h3 >Institucion</h3>
       <a href="">Municipalidad San Jose Chacayá</a>
       <h3>Direccion</h3>
       <a href="">Agua y Saneamiento</a>
     </div>
     <div>
       <h3>Somos</h3>
       <a href="" >Mision</a><br>
       <a href="">Vision</a><br>
       <a href="" >labores</a>
   </div>
   <div >
     <h3>Contacto</h3>
     <a href="">Telefono: 7777777</a><br>
     <a href="">Correo: lslsll@gmail.com</a><br>
     <a href="">Redes Sociales</a>
   </div>
   </div>
   <hr>
   <div class="footer-dato-fin">
     <h3>Sistema de Vigilancia Calidad Agua</h3>
     <p> Direccion de agua y Saneamiento | Municipalidad de San Jose Chacayá.</p>
     <p>&#169; 2021 umg. todos los derechos reservados.
     <br>Politica de privacidad
     </p>
 </div>
</footer>
</section>
        `;

    function iniInicio() {
     
    }
    setTimeout(()=>iniInicio(),100);
    return $Inicio; 
}

/**
 const peticonPanel = new PeticionPanel();
            peticonPanel.hacerPeticion(null,{},'GET').then(datos=>{
            const $list = document.getElementById('datos-institucion');
            console.table(datos.results)
            for (const iterator of datos.results) {
                console.log(iterator)
                $list.innerHTML +=`
                <tr>
                    <td>${iterator.name}</td>
                    <td>${iterator.url}</td>
                <td>
                <a class='button' href='#'>opcion</a>
                <a class='button' href='#'>opcion2</a>
                </td>
                </tr>
                `;
            }
            })

*/
        