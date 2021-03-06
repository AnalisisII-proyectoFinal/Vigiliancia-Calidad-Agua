import UiPublicacion from '../ui/Publicacion.ui.js';
import {subirImagen} from '../../utilidades/SubirImagen.js';
export function Publicacion(){
    const $publicacion = document.createElement('div');
        $publicacion.classList.add("pagina");
        $publicacion.setAttribute('id',"pg3");
        $publicacion.setAttribute('style',"display:none;")
        $publicacion.innerHTML=`
        <section class="contenedor-panel">
          <div class="nueva-publicacion">
            <h3>Nueva publicacion</h3>
            <hr>
            <div class="publicacion-nuevo">
              <div>
              <div><label for="" class="input-label">Titulo:</label>
                <input type="text" class="input-dato" id="p-titulo" placeholder="Titulo ..." required=""/></div>
              <div><label for="" class="input-label">Fecha de la actividad:</label>
                <input type="date" class="input-dato" id="p-fecha" placeholder="" required=""/></div>
              <div><label for="" class="input-label">Descripción:</label>
                <textarea id="p-descrip" rows="4" cols="37" maxlength="100" minlength="3" placeholder="descripcion..."></textarea></div>
              </div>
              <div class="container-img">
              <div class="card">
                <img id="prev-img-p" height="200px" width="200px" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1633988872/qk3z5et9kglbvlh28cib.svg">
                <div class="card-footer">
                  <progress id="prog-img-p" max="100" value="0" class="progreso-muestra"></progress>
                  <input type="file" id="subir-img-p">
                </div>
              </div>
            </div> 
          </div>
          <div class="botones-institucion">
                <p><button id="p-btn-c" class="primer-btn">Crear</button></p> 
          </div>
          <br>
          </div>
        <div class="datos-publicaciones">
          <h3>Lista de publicaciones</h3>
          <hr>
          <div class="tabla-lista">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Titulo</th>
                <th>Fecha Publicacion</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th colspan='3'>Publicaciones</th>
              </tr>
            </tfoot>
            <tbody id="lista-publicacion">
            </tbody>
        </table>
        </div>
        </div>
      </section>
        `;
        function initPublicacion() {
          const $listaPublic=document.getElementById('lista-publicacion');

          const $inpImgP = document.getElementById('subir-img-p');
          $inpImgP.addEventListener('change',async (e)=>{
            e.preventDefault();
            const prevImg = document.getElementById('prev-img-p');
            const progImg = document.getElementById('prog-img-p').id;
            const imgP = e.target.files[0];
            const imgUrl = await subirImagen(progImg,imgP)
            prevImg.src=imgUrl;
          })

          const btnCrearPublicacion = document.getElementById('p-btn-c');
          btnCrearPublicacion.addEventListener('click',(e)=>{
            e.preventDefault();
            const $titulo=document.getElementById('p-titulo').value;
            const $fecha=document.getElementById('p-fecha').value;
            const $descripcion=document.getElementById('p-descrip').value;
            const $img = document.getElementById('prev-img-p').src;
            let datosPublicacion={
              titulo:$titulo,
              fecha:$fecha,
              descripcion:$descripcion,
              imgp:$img
            }
            const crearPublic = new UiPublicacion();
            crearPublic.nuevaPublicacion(datosPublicacion);

          })

          $listaPublic.addEventListener('click',(e)=>{
            if (e.target.classList.contains('eliminar')) {
              let idp = e.target.getAttribute('_id');
                console.log(idp);
                const $ePublicacion = new UiPublicacion();
                $ePublicacion.eliminarPublicacion(idp);
            }else if(e.target.classList.contains('editar')){
              const t=e.target.getAttribute('t');
              const d=e.target.getAttribute('d');
              const im=e.target.getAttribute('im')
              const idp= e.target.getAttribute('_id');
              const editPublic = new UiPublicacion();
              editPublic.editarPublicacion(t,d,idp,im);
            }
          })     
        }
        setTimeout(()=>initPublicacion(),100)
        return $publicacion;
}