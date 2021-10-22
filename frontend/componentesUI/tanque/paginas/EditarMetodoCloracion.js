import UiMetodoCloracion from "../ui/MetodoCloracion.ui.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
export function EditarMetodoCloracion(met) {
    const $editarmetodocloracion = document.createElement('div');
    $editarmetodocloracion.classList.add('editar-metodoclora');
    $editarmetodocloracion.innerHTML=`
        <h2>Editar Metodo Cloroacion </h2>
          <hr>
          <form action="" class="form-cloracion">
            <span id="id-mt" hidden>${met[0].id}</span>
            <p><label for="" class="input-label">Tratamiento:</label>
            <input type="text" class="input-dato" id="e-mc-m" placeholder="metodo" required="" value="${met[0].tratamiento}"/></p>
            <p><label for="" class="input-label">Descripcion:</label>
            <input type="text" class="input-dato" id="e-m-desc" placeholder="descripcion" required="" value="${met[0].descripcion}"/></p>
            <p><label for="" class="input-label"></label>
            <button class="tercer-btn" id="btn-mt-a">Guardar</button></P>
          </form>
    `;
    function initEditMetodoCloracion(){
      const btnAct = document.getElementById('btn-mt-a');
      btnAct.addEventListener('click',(e)=>{
        e.preventDefault();
        const id=document.getElementById('id-mt').innerHTML;
        const t=document.getElementById('e-mc-m').value;
        const d=document.getElementById('e-m-desc').value;
        if (t!=='' || d!=='') {
          let datosMetodoCloro={
            idmc:id,
            tratameinto:t,
            descripcion:d
          }
          console.log(datosMetodoCloro);
          const actMC= new UiMetodoCloracion();
         actMC.actualizarMetodoCloracion(datosMetodoCloro)
        }else{
          const noti= new ServicioNotificacion();
          noti.notificarToast('error','Complete los campos')
        }

      })

    }
    setTimeout(()=>initEditMetodoCloracion(),100);
    return $editarmetodocloracion;
}