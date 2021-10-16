import UiPublicacion from '../ui/Publicacion.ui.js';
import {subirImagen}from '../../utilidades/SubirImagen.js';
export function EditarPublicacion(t,d,idp,im) {
    const $editarpublicacion = document.createElement('div');
    $editarpublicacion.innerHTML=` 
            <h3>Editar Publicacion</h3>
            <hr>
            <h2 id="id-p" hidden>${idp}</h2>
            <div class="editar-publicacion">
              <div class="card-public">
                <div class="imgpublic">
                <img id="prev-img-pe"src="${im}" alt="">
                </div>
                <div class="descripcion-public">
                  <h2>${t}</h2>
                  <p>${d}</p>
                </div>
              </div>
              <div class="nueva-publicacion">
                <div>
                  <progress id="prog-img-pe" max="100" value="0" class="progreso-muestra"></progress>
                  <input type="file" id="subir-img-pe">
                </div>
                  <div><label for="" class="input-label">Titulo:</label>
                  <input type="text" class="input-dato" id="ep-titulo" placeholder="Titulo ..." required="" value="${t}" disabled></div>
                  <div><label for="" class="input-label">Descripción:</label>
                  <textarea id="ep-descrip" rows="4" cols="37" maxlength="100" minlength="3" placeholder="descripcion...">${d}</textarea></div>
                  <p><button id="p-btn-a" class="tercer-btn">Actualizar</button></p> 
              </div>
            </div>`;

    function iniEditarPublicacion() {
      
      const $id = document.getElementById('id-p').innerHTML;
      const $img = document.getElementById('prev-img-pe');
      const $btnA=document.getElementById('p-btn-a');

      const $subirImg=document.getElementById('subir-img-pe');
      $subirImg.addEventListener('change',async(e)=>{
        const prevImg= document.getElementById('prev-img-pe');
        const progImg = document.getElementById('prog-img-pe').id;
        const file = e.target.files[0];
        const imgUrl = await subirImagen(progImg,file);
        prevImg.src=imgUrl;
      })



      $btnA.addEventListener('click',()=>{
        const $d=document.getElementById('ep-descrip').value;
        let datosEditarPublic = {
          id:$id,
          descripcion:$d,
          imgp:$img.src
        }
        const $actPublic = new UiPublicacion();
        $actPublic.actualizarPublicacion(datosEditarPublic);
      })
      
    }
    setTimeout(()=>iniEditarPublicacion(),100);
    return $editarpublicacion;
}
