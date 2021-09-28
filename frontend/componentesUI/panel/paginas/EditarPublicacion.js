import UiPublicacion from '../ui/Publicacion.ui.js';
export function EditarPublicacion(t,d,idp) {
    const $editarpublicacion = document.createElement('div');
    $editarpublicacion.innerHTML=` 
            <h3>Editar Publicacion</h3>
            <hr>
            <h2 id="id-p" hidden>${idp}</h2>
            <div class="editar-publicacion">
              <div class="card-public">
                <div class="imgpublic">
                <img src="./assets/img/muestra.svg" alt="">
                </div>
                <div class="descripcion-public">
                  <h2>${t}</h2>
                  <p>${d}</p>
                </div>
              </div>
              <div class="nueva-publicacion">
                  <div><label for="" class="input-label">Titulo:</label>
                  <input type="text" class="input-dato" id="ep-titulo" placeholder="Titulo ..." required="" value="${t}"></div>
                  <div><label for="" class="input-label">Descripción:</label>
                  <textarea id="ep-descrip" rows="4" cols="37" maxlength="100" minlength="3" placeholder="descripcion...">${d}</textarea></div>
                  <div><label for=""class="input-label">Imagen:</label><input id="p-img" type="file"></div>
                  <br>
                  <br>
                  <p><button id="p-btn-a" class="tercer-btn">Actualizar</button></p> 
              </div>
            </div>`;

    function iniEditarPublicacion() {
      const $t=document.getElementById('ep-titulo').value;
      const $d=document.getElementById('ep-descrip').value;
      const $id = document.getElementById('id-p').value;
      const $btnA=document.getElementById('p-btn-a');
      $btnA.addEventListener('click',()=>{
          const $actPublic = new UiPublicacion();
          $actPublic.actualizarPublicacion($id,$t,$d);
      })
      
    }
    setTimeout(()=>iniEditarPublicacion(),100);
    return $editarpublicacion;
}

/**
 * 
 */