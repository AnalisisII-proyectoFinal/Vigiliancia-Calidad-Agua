export function InformeCS(muestras,datos) {
  console.log(datos)
    const $contenedorInforme = document.createElement('div');
    $contenedorInforme.classList.add('contenedor-informe');
    const $informecs=document.createElement('div');
    $informecs.classList.add('informe-centro-salud');
    $informecs.setAttribute('id','inf-doc');
    const $cabecera=document.createElement('div');
    $cabecera.classList.add('inf-cabecera');
    $cabecera.innerHTML=`
    <div>
    <img src="${datos[0].ls}" alt="">
    </div>
    <div class="cabecera-datos">
      <h2>VIGILANCIA DE LA CALIDAD DEL AGUA</h2>
      <h2>pH y CLORO RESIDUAL</h2>
    </div>
    <div>
    <img src="${datos[0].lsiv}" alt="">
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
            <li>Area de Salud: <span>${datos[0].asl}</span></li>
            <li>Muncipio: <span>${datos[0].m}</span></li>
            <li>1/cargo: <span>soloao</span></li>
        </div>
        <div>
            <li>Departamento: <span>${datos[0].d}</span></li>
            <li>Servicio de Salud: <span>${datos[0].ss}</span></li>
            <li>Firma: <span>___________________</span></li>
        </div>
        <div>
            <li>Distrito de salud: <span>${datos[0].ds}</span></li>
            <li>Responsable de la informacion: <span>skskks</span></li>
            <li>fecha: <span>01/02/2021</span></li>
        </div>`;

    const $contenedorT = document.createElement('div');
    $contenedorT.classList.add('tabla-muestras');
    const $tablam=document.createElement('table');
    $tablam.setAttribute('id','t-datos-infsa');
    const $encT=document.createElement('thead');
    $encT.innerHTML=`
        <tr>
            <td class="fila-dato-inf" rowspan="2">No.</td>
            <td class="fila-dato-inf" rowspan="2">Nombre del sistema</td>
            <th class="fila-dato-inf" colspan="4">Datos de muestreo</th>
            <td class="fila-dato-inf" rowspan="2">pH</td>
            <td class="fila-dato-inf" rowspan="2">Resultado o lectura de cloro residual(mg/L)</td>
          </tr>
          <tr>
            <td class="fila-dato-inf">Comunidad donde se toma la muestra</td>
            <td class="fila-dato-inf" >punto de muestreo</td>
            <td class="fila-dato-inf" >Fecha de muestreo</td>
            <td class="fila-dato-inf" >Hora de muestreo</td>
          </tr>
    `;
    const $bodyT = document.createElement('tbody');
    const $frag = document.createDocumentFragment();
    let $n=1;
    muestras.forEach(el => {
        const $fila1 = document.createElement('tr');
        const $fila2 = document.createElement('tr');
        const $fila3 = document.createElement('tr');
        $fila1.innerHTML=`
          <td class="fila-dato-inf" rowspan="3">${$n}</td>
          <td class="fila-dato-inf" rowspan="3">${el.tanque}</td>
          <td class="fila-dato-inf" rowspan="3">${el.ubicacion}</td>
          <td class="fila-dato-inf">${el.m1.punto}</td>
          <td class="fila-dato-inf">${el.m1.fecha}</td>
          <td class="fila-dato-inf">${el.m1.hora}</td>
          <td class="fila-dato-inf">${el.m1.ph}</td>
          <td class="fila-dato-inf">${el.m1.cl}</td>
        `;
        $fila2.innerHTML=`
          <td class="fila-dato-inf">${el.m2.punto}</td>
          <td class="fila-dato-inf">${el.m2.fecha}</td>
          <td class="fila-dato-inf">${el.m2.hora}</td>
          <td class="fila-dato-inf">${el.m2.ph}</td>
          <td class="fila-dato-inf">${el.m2.cl}</td>
        `;
        $fila3.innerHTML=`
          <td class="fila-dato-inf">${el.m3.punto}</td>
          <td class="fila-dato-inf">${el.m3.fecha}</td>
          <td class="fila-dato-inf">${el.m3.hora}</td>
          <td class="fila-dato-inf">${el.m3.ph}</td>
          <td class="fila-dato-inf">${el.m3.cl}</td>
        `;
        $n++;
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
              <p><button class="tercer-btn" id="inf-pdf">Exportar PDF</button></p>
              <p><button class="tercer-btn" id="inf-excel">Exportar EXCEl</button></p>
    `;

    $contenedorInforme.appendChild($informecs);
    $contenedorInforme.appendChild($pieInforme);

    function initInformeCS() {
      const btnPdf=document.getElementById('inf-pdf');
      btnPdf.addEventListener('click',(e)=>{
        const doc = document.getElementById('inf-doc');
        var opt = {
          margin:1,
          filename:"Informe" + new Date().toISOString() + ".xls",
          image: { type: 'png', quality: 0.98 },
          html2canvas: { dpi:192,letterRendering:true, scale: 2, useCORS:true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        };
        html2pdf().set(opt).from(doc).save().catch(err=>console.log(err));
      });
     
      const btnExcel=document.getElementById('inf-excel');
      btnExcel.addEventListener('click',()=>{
         $("#t-datos-infsa").table2excel({
          name: "informe",
          filename: "file" + new Date().toISOString().replace(/[\-\:\.]/g, "") + ".xls", 
          fileext: ".xls",
          preserveColors: false 
      });
      })
    }
    setTimeout(()=>initInformeCS(),100)
    return $contenedorInforme;  
}