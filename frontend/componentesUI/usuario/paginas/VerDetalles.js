export function VerDetalles(em) {
    const $verdetalles = document.createElement('div');
    $verdetalles.classList.add('ver-detalles');
    $verdetalles.innerHTML=` 
            <div class="img-nuevo-usuario">
              <img id="u-ava" src="${em.av}" alt="">
              <h3>${em.pa} ${em.pn}</h3>
              </div>
              <form class="f-datos-usuario">
              <div><label for="" class="input-label">Primer Nombre:</label>
                <input type="text" class="input-dato"    value="${em.pn}" disabled/></div>
              <div><label for="" class="input-label">Segundo Nombre:</label>
                <input type="text" class="input-dato" value="${em.sn}" disabled/></div>
              <div><label for="" class="input-label">Primer Apellido:</label>
                <input type="text" class="input-dato"  value="${em.pa}" disabled/></div>
              <div><label for="" class="input-label">Segundo Apellido:</label>
                <input type="text" class="input-dato" value="${em.sa}" disabled/></div>
              <div><label for="" class="input-label">Fecha de Nacimiento:</label>
                <input type="date" class="input-dato" value="${em.fn}" disabled/></div>
              <div><label for="" class="input-label">DPI:</label>
                <input type="text" class="input-dato"  value="${em.dpi}" disabled/></div>
                <div><label for="" class="input-label">GENERO:</label>
                <input type="text" class="input-dato"  value="${em.ge}" disabled/></div>
              <div><label for="" class="input-label">Tel/Celular:</label>
                <input type="text" class="input-dato"  value="${em.te}" disabled/></div>
              <div><label for="" class="input-label">Correo Electrónico:</label>
                <input type="text" class="input-dato" value="${em.ce}" disabled/></div>
              <div><label for="" class="input-label">Dirección/Residencia:</label>
                <input type="text" class="input-dato"  value="${em.di}" disabled/></div>
              <div><label for="" class="input-label">Puesto:</label>
                <input type="text" class="input-dato" value="${em.ca}" disabled/></div>
                </form>`;
    return $verdetalles;
}