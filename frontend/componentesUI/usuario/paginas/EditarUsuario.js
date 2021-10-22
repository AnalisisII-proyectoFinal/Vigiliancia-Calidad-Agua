import UiListarUsuario from "../ui/ListarUsuarios.ui.js";
export function EditarUsuario(em) {
  console.log(em)
    const $editarUsuario = document.createElement('div');
    $editarUsuario.classList.add('ver-detalles');
    $editarUsuario.innerHTML=` 
            <div class="img-nuevo-usuario">
              <img id="u-ava" src="${em.av}" alt="">
              <h3>${em.pn} ${em.pa}</h3>
              <h3>Editar Usuario</h3>
              </div>
            <form action="" class="f-datos-usuario">
              <span id="e-e-id" hidden>${em.id}</span>
              <div><label for="" class="input-label">Primer Nombre:</label>
                <input type="text" class="input-dato" id="e-e-pn"   value="${em.pn}" /></div>
              <div><label for="" class="input-label">Segundo Nombre:</label>
                <input type="text" class="input-dato" id="e-e-sn" value="${em.sn}" /></div>
              <div><label for="" class="input-label">Primer Apellido:</label>
                <input type="text" class="input-dato" id="e-e-pa" value="${em.pa}" /></div>
              <div><label for="" class="input-label">Segundo Apellido:</label>
                <input type="text" class="input-dato" id="e-e-sa" value="${em.sa}" ></div>
              <div><label for="" class="input-label">Fecha de Nacimiento:</label>
                <input type="date" class="input-dato" id="e-e-fn" value="${em.fn}" /></div>
              <div><label for="" class="input-label">DPI:</label>
                <input type="text" class="input-dato" id="e-e-dpi" value="${em.dpi}" /></div>
                <div><label for="" class="input-label">GENERO:</label>
                <input type="text" class="input-dato" id="e-e-ge" value="${em.ge}" /></div>
              <div><label for="" class="input-label">Tel/Celular:</label>
                <input type="text" class="input-dato" id="e-e-te" value="${em.te}"/></div>
              <div><label for="" class="input-label">Correo Electrónico:</label>
                <input type="text" class="input-dato" id="e-e-ce" value="${em.ce}" /></div>
              <div><label for="" class="input-label">Dirección/Residencia:</label>
                <input type="text" class="input-dato" id="e-e-di" value="${em.di}"/></div>
              <div><label for="" class="input-label">Puesto:</label>
                <input type="text" class="input-dato" id="e-e-ca" value="${em.ca}"/></div>
            </form>
            <br>
            <div class="botones-institucion">
                <p><button id="btn-e-a" class="tercer-btn">Actualizar</button></p>
            </div>
            
            `;
    
    function initEditarEmpleado() {
      const btnAct = document.getElementById('btn-e-a');
      btnAct.addEventListener('click',()=>{
        console.log('presinoand')
        const ide = document.getElementById('e-e-id').innerHTML;
        const pn = document.getElementById('e-e-pn').value;
        const sn = document.getElementById('e-e-sn').value;
        const pa = document.getElementById('e-e-pa').value;
        const sa = document.getElementById('e-e-sa').value;
        const fn = document.getElementById('e-e-fn').value;
        const dpi = document.getElementById('e-e-dpi').value;
        const ge = document.getElementById('e-e-ge').value;
        const te = document.getElementById('e-e-te').value;
        const ce = document.getElementById('e-e-ce').value;
        const di = document.getElementById('e-e-di').value;
        const ca = document.getElementById('e-e-ca').value;

        
          let datosEmp={
            ide:ide,
            pn:pn,
            sn:sn,
            pa:pa,
            sa:sa,
            dpi:dpi,
            sex:ge,
            dir:di,
            carg:ca,
            tel:te,
            corr:ce,
            fnaci:fn}
         
          const actEmp =new UiListarUsuario();
          actEmp.actualizarEmpleado(datosEmp);
          
      })
      
    }
    setTimeout(()=>initEditarEmpleado(),100)
    return $editarUsuario;
}