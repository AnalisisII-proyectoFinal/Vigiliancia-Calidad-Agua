//import UiTanque from "../ui/NuevoTanque.ui.js";
//const uiTanq = new UiTanque();
import {subirImagen}from "../../utilidades/SubirImagen.js";
import UiTanque from "../ui/NuevoTanque.ui.js";
export function EditarTanque(d) {
  console.log(d)
    const $editartanque = document.createElement('div');
    $editartanque.classList.add('editar-tanque');
    $editartanque.innerHTML=`
          <h2>Editar Tanque</h2>
          <form>
            <div class="container-img">
                <div class="card">
                <img id="prev-img-t-e" height="200px" width="200px" src="${d.img}">
                  <div class="card-footer">
                    <progress id="prog-img-t-e" max="100" value="0" class="progreso-muestra"></progress>
                    <input type="file" id="subir-img-t-e">
                  </div>
                </div>
              </div>
              <div>
              <p><label for="" class="input-label">Nombre:</label>
                <input type="text" class="input-dato" id="e-t-nom" placeholder="nombre" required="" value="${d.nombre}"/></p>
              <p><label for="" class="input-label">Numero:</label>
                <input type="number" class="input-dato" id="e-t-num" placeholder="numero" required="" value="${d.numero}"/></p>
              <p><label for="" class="input-label">Ubicacion:</label>
                <input type="text" class="input-dato" id="e-t-ubic" placeholder="ubicacion" required="" value="${d.ubicacion}"/></p>
              <p><label for="" class="input-label">Fecha en funcionamiento:</label>
                <input type="date" class="input-dato" id="e-t-ffun" placeholder="" required="" value="${d.fechaf}"/></p>
              </div>
              <div>
              <p><label for="" class="input-label">Largo(mts):</label>
                <input type="text" class="input-dato" id="e-t-largo" placeholder="largo mts" required="" value="${d.largo}"/></p>
              <p><label for="" class="input-label">Ancho(mts):</label>
                <input type="text" class="input-dato" id="e-t-ancho" placeholder="ancho mts" required="" value="${d.ancho}"/></p>
              <p><label for="" class="input-label">Altura(mts):</label>
                <input type="text" class="input-dato" id="e-t-altura" placeholder="altura mts" required="" value="${d.altura}"/></p>
              <div>
              <label for="" class="input-label">Método Cloracion:</label>
              <div class="select">
                <select name="format" id="list-metodo-e"></select>
              </div>
              </div>
              </div>
            </form>
            <div class="botones-institucion">
              <p><button id="btn-t-a" class="tercer-btn">Actualizar</button></p>
            </div>
    `;
      function initEditTanque(){
        const metodosCl = new UiTanque();
        metodosCl.obtenerMetodoClorificacion(1)

        const prevImg = document.getElementById('prev-img-t-e');
        const actImg = document.getElementById('subir-img-t-e');
        actImg.addEventListener('change',async (e)=>{
          const progImg=document.getElementById('prog-img-t-e').id;
          const file = e.target.files[0];
          const uriImg= await subirImagen(progImg,file);
          prevImg.src=uriImg;
        })

        const btnAct=document.getElementById('btn-t-a');
        btnAct.addEventListener('click',(e)=>{
          e.preventDefault();
            const imgT=document.getElementById('prev-img-t-e').src;
            const nom = document.getElementById('t-nom-e').value;
            const num = document.getElementById('t-num-e').value;
            const ubic = document.getElementById('t-ubic-e').value;
            const fecha = document.getElementById('t-ffun-e').value;
            const lar = document.getElementById('t-largo-e').value;
            const ancho = document.getElementById('t-ancho-e').value;
            const altura = document.getElementById('t-altura-e').value;
            const metodo = document.getElementById('list-metodo-e').value;

            if (nom ===''||num ===''||ubic ===''||fecha ===''||lar ===''||ancho ===''||altura ===''||metodo ==='') {
                servNoti.notificarToast("error","complete todo los campos")
            }else{
              let tanqueD={
                nombre:nom,
                numero:num,
                ubicacion:ubic,
                fechaf:fecha,
                largo:lar,
                ancho:ancho,
                altura:altura,
                img:imgT,
                mcl:metodo
              }
              const uiTanq=new UiTanque();
              uiTanq.actulizarTanque(tanqueD);
            } 
        })


      }
      setTimeout(()=>initEditTanque(),100)
    return $editartanque;
}