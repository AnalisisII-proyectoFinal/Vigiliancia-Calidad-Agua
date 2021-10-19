export function InformeCS(muestras) {
    const $contenedorInforme = document.createElement('div');
    $contenedorInforme.classList.add('contenedor-informe');
    const $informecs=document.createElement('div');
    $informecs.classList.add('informe-centro-salud');
    const $cabecera=document.createElement('div');
    $cabecera.classList.add('inf-cabecera');
    $cabecera.innerHTML=`
    <div>
      <img src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633997164/bdvxoupuo0twmsmla6hu.png" alt="">
    </div>
    <div class="cabecera-datos">
      <h2>VIGILANCIA DE LA CALIDAD DEL AGUA</h2>
      <h2>pH y CLORO RESIDUAL</h2>
    </div>
    <div>
      <img src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633997164/bdvxoupuo0twmsmla6hu.png" alt="">
    </div>
    <div class="cabecera-datos">
      <h2>SIGSA</h2>
      <h2>SIVIAGUA 3</h2>
      <p>valido a partir del 2012</p>
      <p>Formulario-SIGSA/SIVIAGUA/PROVIAGUA-SS3-1.0/06-2012</p>
    </div>`;

    const $datosInf=document.createElement('div');
    $datosInf.classList.add('inf-datos-cabecera');
    $datosInf.innerHTML=`
        <div>
            <li>Area de Salud: <span>soloao</span></li>
            <li>Muncipio: <span>soloao</span></li>
            <li>1/cargo: <span>soloao</span></li>
        </div>
        <div>
            <li>Departamento: <span>soloao</span></li>
            <li>Servicio de Salud: <span>soloao</span></li>
            <li>Firma: <span>soloao</span></li>
        </div>
        <div>
            <li>Distrito de salud: <span>soloao</span></li>
            <li>Responsable de la informacion: <span>soloao</span></li>
            <li>fecha: <span>soloao</span></li>
        </div>`;

    const $contenedorT = document.createElement('div');
    $contenedorT.classList.add('tabla-muestras');
    const $tablam=document.createElement('table');
    const $encT=document.createElement('thead');
    $encT.innerHTML=`
        <tr>
            <td rowspan="2">No.</td>
            <td rowspan="2">Nombre del sistema</td>
            <th colspan="4">Datos de muestreo</th>
            <td rowspan="2">pH</td>
            <td rowspan="2">Resultado o lectura de cloro residual(mg/L)</td>
          </tr>
          <tr>
            <td>Comunidad donde se toma la muestra</td>
            <td>punto de muestreo</td>
            <td>Fecha de muestreo</td>
            <td>Hora de muestreo</td>
          </tr>
    `;
    const $bodyT = document.createElement('tbody');
    const $frag = document.createDocumentFragment();
    muestras.forEach(el => {
        const $fila1 = document.createElement('tr');
        const $fila2 = document.createElement('tr');
        const $fila3 = document.createElement('tr');
        $fila1.innerHTML=`
          <td rowspan="3">1</td>
          <td rowspan="3">${el.tanque}</td>
          <td rowspan="3">${el.ubicacion}</td>
          <td>${el.m1.punto}</td>
          <td>${el.m1.fecha}</td>
          <td>${el.m1.hora}</td>
          <td>${el.m1.ph}</td>
          <td>${el.m1.cl}</td>
        `;
        $fila2.innerHTML=`
          <td>${el.m2.punto}</td>
          <td>${el.m2.fecha}</td>
          <td>${el.m2.hora}</td>
          <td>${el.m2.ph}</td>
          <td>${el.m2.cl}</td>
        `;
        $fila3.innerHTML=`
          <td>${el.m3.punto}</td>
          <td>${el.m3.fecha}</td>
          <td>${el.m3.hora}</td>
          <td>${el.m3.ph}</td>
          <td>${el.m3.cl}</td>
        `;
        $frag.appendChild($fila1);
        $frag.appendChild($fila2);
        $frag.appendChild($fila3); 
    });
    $bodyT.appendChild($frag);
    $tablam.appendChild($encT);
    $tablam.appendChild($bodyT);
    $informecs.appendChild($cabecera);
    $informecs.appendChild($datosInf);
    $informecs.appendChild($tablam);
    const $pieInforme=document.createElement('div');
    $pieInforme.classList.add('botones-institucion');
    $pieInforme.innerHTML=`
              <p><button class="tercer-btn">Imprimir</button></p>
    `;

    $contenedorInforme.appendChild($informecs);
    $contenedorInforme.appendChild($pieInforme);
    return $contenedorInforme;  
}