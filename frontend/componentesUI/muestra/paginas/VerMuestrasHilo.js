export function VerMuestrasHilos(muestras) {
  console.log(muestras)
    const $vermuestras = document.createElement('div');
    $vermuestras.classList.add('muestras-hilo');
    $vermuestras.innerHTML=`
        <h2>Detalles del hilo <h2>                 
    `;
    let $tableMuestras = document.createElement('table');
     $tableMuestras.innerHTML=`<thead>
    <tr>
      <th>No.</th>
      <th>Tanque</th>
      <th>Tipo</th>
      <th>Punto</th>
      <th>PH</th>
      <th>Cloro</th>
      <th>Fecha</th>
      <th>Hora</th>
      <th>Responsable</th>
      <th>cliente<th>
      <th>Opciones<th>
    </tr>
  </thead>`;
  let $bodyT = document.createElement('tbody');
            let $fragment= document.createDocumentFragment();
            let $n=1;
            muestras.forEach(el=>{
                let client = (el.cliente === 1)?'🖥️':'📱';
               // let ff= this.formatearFecha(el.fecha);
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                  <td>${$n}</td>
                  <td>${el.tanq}</td>
                  <td>${el.tmuestra}</td>
                  <td>${el.pmuestra}</td>
                  <td>${el.ph}</td>
                  <td>${el.cl}</td>
                  <td>${el.fecha}</td>
                  <td>${el.hora}</td>
                  <td>${el.usuario}</td>
                  <td>${client}</td>
                  <td>
                  <button _id="${el.id}" class="editar">✏️</button>
                  </td>`;
                $fragment.appendChild($fila)
                $n++;
            });
            let $pieDetalle = document.createElement('div')
            $pieDetalle.innerHTML=`<span>fin de muestras</span>`;
           $bodyT.appendChild($fragment) 
           $tableMuestras.appendChild($bodyT);
           $vermuestras.appendChild($tableMuestras)
           $vermuestras.appendChild($pieDetalle);

        return $vermuestras;
}