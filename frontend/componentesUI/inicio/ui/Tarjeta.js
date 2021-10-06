export function Tarjeta(p1,p2,p3) {

    let $por1=0;
    let $clase1='';
    let $por2=0;
    let $clase2='';
    let $por3=0;
    let $clase3='';
    if (p1.estado > 0) {
        $por1=100;
        $clase1='listo'    
    }
    if (p2.estado > 0) {
        $por2=100;
        $clase2='listo'    
    }
    if (p3.estado > 0) {
        $por3=100;
        $clase3='listo'    
    }
    let $contenedorT = document.createElement('div');
    $contenedorT.classList.add('contenedor-tanque-card')
    let $targeta = document.createElement('div');
    $targeta.classList.add('tanque-card');
    $targeta.innerHTML=`
    <div class="frente-card">
      <p>${p1.tanque}</p>
      <hr>
      <div>
        <p style="width:35%" data-value="${$por1}">${p1.muestra}</p>
        <progress max="100" value="${$por1}" class="progreso-muestra">
        <span style="width: 35%"> ${$por1}%</span>
      </div>
      <div>
        <p style="width:35%" data-value="${$por2}">${p2.muestra}</p>
        <progress max="100" value="${$por2}" class="progreso-muestra">
        <span style="width: 35%"> ${$por2}%</span>
      </div>
      <div>
        <p style="width:35%" data-value="${$por3}">${p3.muestra}</p>
        <progress max="100" value="${$por3}" class="progreso-muestra">
        <span style="width: 35%"> ${$por3}%</span>
      </div>
    </div>
    <div class="detras-card">
        <div>
        <p>${p1.tanque}</p>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
            <li class="${$clase1}">${p1.ph}</li>
            <li class="${$clase1}">${p1.cl}</li>
            <li class="${$clase1}">${p1.cl}</li>
          </ul>
        </div>
        </div>
        <div>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
            <li class="${$clase2}">${p2.ph}</li>
            <li class="${$clase2}">${p2.cl}</li>
            <li class="${$clase2}">${p2.cl}</li>
          </ul>
        </div>
        </div>
        <div>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
            <li class="${$clase3}">${p3.ph}</li>
            <li class="${$clase3}">${p3.cl}</li>
            <li class="${$clase3}">${p3.cl}</li>
          </ul>
        </div>
        </div>
    </div>
    `;
    $contenedorT.appendChild($targeta);
    return $contenedorT;
}