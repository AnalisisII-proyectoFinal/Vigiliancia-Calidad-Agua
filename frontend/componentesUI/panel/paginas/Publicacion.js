import UiPublicacion from '../ui/Publicacion.ui.js';
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
              <div><label for="" class="input-label">Titulo:</label>
                <input type="text" class="input-dato" id="p-titulo" placeholder="Titulo ..." required=""/></div>
              <div><label for="" class="input-label">Fecha de la actividad:</label>
                <input type="date" class="input-dato" id="p-fecha" placeholder="" required=""/></div>
              <div><label for="" class="input-label">Descripción:</label>
                <textarea id="p-descrip" rows="4" cols="37" maxlength="100" minlength="3" placeholder="descripcion..."></textarea></div>
              <div><label for=""class="input-label">Imagen:</label><input id="p-img" type="file"></div>
              <div class="botones-institucion">
                <p><button id="p-btn-c" class="primer-btn">Crear</button></p> 
              </div>
          </div>
          <br>
          </div>
        <div class="datos-publicaciones">
          <h3>Lista de publicaciones</h3>
          <hr>
          <table id="tabla-publicaciones">
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
      </section>
        `;
        function initPublicacion() {
          const $titulo=document.getElementById('p-titulo');
          const $fecha=document.getElementById('p-fecha');
          const $descripcion=document.getElementById('p-descrip');
          const $img=document.getElementById('p-img');
          const $btnCrear= document.getElementById('p-btn-c');
          const $listaPublic=document.getElementById('lista-publicacion');

          $btnCrear.addEventListener('click',async ()=>{
            let datosPublic={
              titulo:$titulo.value,
              fecha:$fecha.value,
              descripcion:$descripcion.value,
              img:'lsllsls'
            }
            const $nPublicacion = new UiPublicacion();
            $nPublicacion.nuevaPublicacion(datosPublic);
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
              const idp= e.target.getAttribute('_id');
              const editPublic = new UiPublicacion();
              editPublic.editarPublicacion(t,d,idp);
            }
          })     
        }
        setTimeout(()=>initPublicacion(),100)
        return $publicacion;
}