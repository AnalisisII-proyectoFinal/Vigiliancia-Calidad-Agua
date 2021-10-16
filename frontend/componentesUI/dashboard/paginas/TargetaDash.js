export function TargetaDash(p1,p2,p3) {
    let $porcenje = 0;
    let $clase1='';
    let $clase2='';
    let $clase3='';
    if (p1.estado > 0) {
        $porcenje=$porcenje + 33.33;
        $clase1='listo'    
    }
    if (p2.estado > 0) {
        $porcenje=$porcenje + 33.33;
        $clase2='listo'    
    }
    if (p3.estado > 0) {
        $porcenje=$porcenje + 33.34;
        $clase3='listo'    
    }

        let $card=document.createElement('div')
    if ($porcenje > 70) {
        $card.classList.add('card-tanque-dash')
        
    }else{
        $card.classList.add('card-tanque-dash-e')
    }
        $card.innerHTML=`
      <div class="card-progreso-d">
        <h3>${p1.tanque}</h3>
        <div class="porcentaje">
          <p>${$porcenje} %</p>
        </div>
        <br>
          <progress max="100" value="${$porcenje}" class="progreso-muestra"></progress>
      </div>
      <div class="contentenido-tanque">
        <p>Tanque</p>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
          <li class="${$clase1}">PH:${p1.ph}</li>
          <li class="${$clase1}">CL:${p1.cl}</li>
          </ul>
        </div>
        <p>Hogar1</p>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
          <li class="${$clase2}">PH:${p2.ph}</li>
          <li class="${$clase2}">CL:${p2.cl}</li>
          </ul>
        </div>
        <p>Hogar2</p>
        <div class="contenedor-toma">
          <ul class="muestras-progreso">
          <li class="${$clase3}">PH:${p3.ph}</li>
          <li class="${$clase3}">CL:${p3.cl}</li>
          </ul>
        </div>
      </div>`;
      return $card;
}