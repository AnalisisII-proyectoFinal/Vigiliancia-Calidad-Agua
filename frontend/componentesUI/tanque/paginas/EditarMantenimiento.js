import UiMantenimiento from "../ui/Mantenimiento.ui.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
export function EditarMantenimiento(mt) {
  const $editarmantenimiento = document.createElement('div');
  $editarmantenimiento.classList.add('editar-mantenimiento');
  $editarmantenimiento.innerHTML=`
  <h2>Editar Mantenimiento</h2>
  <hr>
  <form action="" class="form-mantenimiento">
  <div></div>
  <span id="e-m-id" hidden>${mt.idm}</span>
  <div class="container-img">
    <div class="card">
      <img id="prev-img-e-m" height="200px" width="200px" src="${mt.img}">
        <div class="card-footer">
          <progress id="prog-img-m" max="100" value="0" class="progreso-muestra"></progress>
          <input type="file" id="subir-img-m">
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
      <p><label for="" class="input-label">Titulo:</label>
        <input type="text" class="input-dato" name="titulo" id="e-m-t" placeholder="titulo" required="" value="${mt.titulo}"/></p>
      <p><label for="" class="input-label">Descripcion:</label>
        <input type="text" class="input-dato" name="descripcion" id="e-m-d" placeholder="descripcion" required="" value="${mt.descripcion}"/></p>
      <p><label for="" class="input-label">Fecha:</label>
        <input type="date" class="input-dato" name="fecha" id="e-m-f" placeholder="" required="" value="${mt.fecha}"/></p>
      <p>
        <label class="input-label" for="">Tanque</label>
          <div class="select">
          <select name="format" id="opt-t-m">
          <option>${mt.tanque}</option>
          </select>
        </div>
      </p>
    </div>
  </form>
  <br>
    <div class="botones-institucion">
      <p><button id="btn-m-a" class="tercer-btn">Actualizar</button></p>
    </div>
  </div>
  `;

  function initEditarMantenimienot() {

    document.getElementById('prev-img-e-m')
    const btnAct=document.getElementById('btn-m-a');
    btnAct.addEventListener('click',(e)=>{
      const idm =document.getElementById('e-m-id').innerHTML;
      const img = document.getElementById('prev-img-e-m').src;
      const t=document.getElementById('e-m-t').value;
      const d=document.getElementById('e-m-d').value;
      const f=document.getElementById('e-m-f').value;
      if (idm !== ''||img !== ''||t !== ''||d !== ''||f !== '') {
        let datosMant={
          idm:idm,
          titulo:t,
          descripcion:d,
          img:img,
          fecha:f
        }
        const actMant=new UiMantenimiento();
        actMant.actualizarMantenimiento(datosMant);
      }else{
        const noti = new ServicioNotificacion();
        noti.notificarToast('error',"complete todos los campos")
      }
    })



  }
  setTimeout(()=>initEditarMantenimienot(),100)

  return $editarmantenimiento;
}