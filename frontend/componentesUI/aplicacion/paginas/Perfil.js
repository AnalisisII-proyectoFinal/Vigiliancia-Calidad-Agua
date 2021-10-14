import {subirImagen}from '../../utilidades/SubirImagen.js';
import UiAplicacion from '../ui/Aplicacion.ui.js';
export function EditarPerfil(datosUs) {
    const $editarperfil = document.createElement('div');
        $editarperfil.classList.add('perfil')
    $editarperfil.innerHTML=` 
    <div class="pcard-public">
      <div class="pimgpublic">
          <img id="edit-avatar" src="${datosUs[0].avatar}" alt="">
          <h3>${datosUs[0].nombre}</h3>
      </div>
      <div class="perfil-datos">
        <div>
          <h3>Cambio de Contraseña</h3>
          <span id="resut-c" style="color:red;"></span>
            <p><label for="" class="input-label">Usuario:</label>
              <input type="text" class="input-dato" placeholder="usuario" value="${datosUs[0].usuario}" disabled/></p>
            <form>
            <p><label for="" class="input-label">Nueva Contraseña:</label>
              <input type="password" class="input-dato" id="pass-n" placeholder="contraseña" required=""/></p>
            <p><label for="" class="input-label">Confirmar Contraseña:</label>
              <input type="password" class="input-dato" id="pass-c" placeholder="confirmar contraseña" required=""/></p>
            <p><button id="btn-e-pass" class="tercer-btn">Cambiar Contraseña</button></p>
            </form>
        </div>
        <div>
          <h3>Cambio de pin y avatar</h3>
          <span id="resut-p" style="color:red;"></span>
          <p><label for="" class="input-label">Pin de acceso applicacion movil:</label>
            <input type="number" id="pin-n" class="input-dato" id="" value="${datosUs[0].pin}" required=""/></p>
            <p><button id="btn-e-p-p" class="tercer-btn">Cambiar Pin</button></p>
          <p><label for="" class="input-label">Avatar:</label>
            <input id="editar-avatar" type="file"/></p>
            <p><progress id="bar-edit-avatar" max="100" value="" class="progreso-muestra"/></p>
        </div>
       <div>
        <h3>Datos del usuario</h3>
          <span id="result-d" style="color:red;"></span>
          <form action="">
            <p><label for="" class="input-label">telefono:</label>
              <input type="text" class="input-dato" id="p-e-t" placeholder="telefono" value="${datosUs[0].telefono}"   required=""/></p>
            <p><label for="" class="input-label">Direccion:</label>
              <input type="text" class="input-dato" id="p-e-d" placeholder="direccion"  value="${datosUs[0].direccion}" required=""/></p>
            <p><label for="" class="input-label">Correo:</label>
              <input type="text" class="input-dato" id="p-e-e" placeholder="@emil.com" value="${datosUs[0].email}" required=""/></p>
            <p><button id="btn-e-p-g" class="tercer-btn">Actualizar Datos</button></p>
          </form>
       </div>
      </div>
            `;

    function iniEditarPerfil() {
      const editAv = document.getElementById('editar-avatar');
      const bar = document.getElementById('bar-edit-avatar').id;
      const prevImg = document.getElementById('edit-avatar');
      editAv.addEventListener('change',async (e)=>{
        const file = e.target.files[0];
        const imgUrl = await subirImagen(bar,file);
        prevImg.src=imgUrl;
      })

      const btnGuardarCambios = document.getElementById('btn-e-p-g');
      btnGuardarCambios.addEventListener('click',(e)=>{
        const av = document.getElementById('edit-avatar').src;
        const tel = document.getElementById('p-e-t').value;
        const dir = document.getElementById('p-e-d').value;
        const email = document.getElementById('p-e-e').value;
        let datosPerfil={
          av:av,
          tel:tel,
          dir:dir,
          em:email
        }

        if (tel===''||dir===''||email==='') {
          document.getElementById('result-d').innerHTML='complete los datos';
        }else{
         const actualizarP = new  UiAplicacion();
         actualizarP.actualizarDatosUsuario(datosPerfil) 
        }
      })
      const btnCambiarpass = document.getElementById('btn-e-pass');
      btnCambiarpass.addEventListener('click',(e)=>{
        e.preventDefault();
        const resultado =document.getElementById('resut-c');
        const inpupass = document.getElementById('pass-n').value;
        const inpuConfirm =document.getElementById('pass-c').value;
        if (inpupass != inpuConfirm) {
          resultado.innerHTML ='Error.! Las contresañas no conciden';
        }else{
          const cambiarPass= new UiAplicacion();
          cambiarPass.cambiarContrasena(inpuConfirm)
        }

      })
      const btnCambiarPin = document.getElementById('btn-e-p-p');
      btnCambiarPin.addEventListener('click',(e)=>{
        const p=document.getElementById('pin-n').value;
        if (p.length != 4) {
          document.getElementById('resut-p').innerHTML='el pin debe ser de 4 digitos'
          
        }else{
          const cambiarP = new UiAplicacion();
          cambiarP.cambiarPin(p)
        }
      })
      
      



    }
    setTimeout(()=>iniEditarPerfil(),100);
    return $editarperfil;
}