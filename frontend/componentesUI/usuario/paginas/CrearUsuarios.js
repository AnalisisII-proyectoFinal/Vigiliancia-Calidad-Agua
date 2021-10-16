//import pticiones 
import{validarInput}from '../../utilidades/ValidarFormulario.js';
import UiUsuario from "../ui/NuevoUsuario.ui.js";
export function CrearUsuarios(){
    const $crearusuarios = document.createElement('div');
        $crearusuarios.classList.add("pagina");
        $crearusuarios.setAttribute('id',"pg2");
        $crearusuarios.setAttribute('style',"display:none;")
        $crearusuarios.innerHTML=`
        <section class="contenedor-usuario">
            <div class="img-nuevo-usuario">
              <img id="u-ava" src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1634070657/avatar_mryjhz.svg" alt="">
              <h3>Nuevo Usuario</h3>
              </div>
            <form action="" class="f-datos-usuario">
              <div><label for="" class="input-label">Primer Nombre:</label>
                <input type="text" class="input-dato"  id="u-pn" placeholder="Escribir Segundo apellido" required=""/></div>
              <div><label for="" class="input-label">Segundo Nombre:</label>
                <input type="text" class="input-dato" id="u-sn" placeholder="Escribir Segundo apellido" required=""/></div>
              <div><label for="" class="input-label">Primer Apellido:</label>
                <input type="text" class="input-dato"  id="u-pa" placeholder="Escribir Primer Nombre" required=""/></div>
              <div><label for="" class="input-label">Segundo Apellido:</label>
                <input type="text" class="input-dato" id="u-sa" placeholder="Escribir Segundo Nombre" required=""/></div>
              <div><label for="" class="input-label">Fecha de Nacimiento:</label>
                <input type="date" class="input-dato" name "fecha" id="u-fn" placeholder="Full name" required=""/></div>
              <div><label for="" class="input-label">DPI:</label>
                <input type="text" class="input-dato"  id="u-dpi" placeholder="Digite 13 números" required=""/></div>
              <div><label for="" class="input-label">Género:</label>
                <div class="select">
                  <select name="format" id="u-g">
                    <option selected disabled>Genero</option>
                    <option value="1">Femenino</option>
                    <option value="2">Masculino</option>
                  </select>
                </div></div>
              <div><label for="" class="input-label">Tel/Celular:</label>
                <input type="text" class="input-dato"  id="u-t" placeholder="Digite 8 números" required=""/></div>
              <div><label for="" class="input-label">Correo Electrónico:</label>
                <input type="text" class="input-dato" id="u-c" placeholder="Ejemplo@gmail.com" required=""/></div>
              <div><label for="" class="input-label">Dirección/Residencia:</label>
                <input type="text" class="input-dato"  id="u-d" placeholder="solola...." required=""/></div>
              <div><label for="" class="input-label">Puesto:</label>
                <input type="text" class="input-dato"  id="u-car" placeholder="cargo..." required=""/></div>
              <div><label for="" class="input-label">Tipo de Usuario:</label>
              <div class="select">
                <select name="format" id="u-per">
                  <option selected disabled>Permiso de usuario</option>
                  <option value="1">invitado</option>
                  <option value="2">moderador</option>
                  <option value="3">administrador</option>
                </select>
              </div></div>
              <div><label for="" class="input-label">Usuario:</label>
                <input type="text" class="input-dato"  id="u-user" placeholder="..."  disabled/></div>
              <div><label for="" class="input-label">Contraseña:</label>
                <input type="text" class="input-dato"  id="u-pass" placeholder="..." disabled/></div>  
            </form>
            <br>
            <br>
            <div class="botones-institucion">
                <p><button id="" class="tercer-btn">Nuevo Usuario</button></p>
                <p><button id="btn-u-g" class="primer-btn">Crear</button></p>
            </div>
          </div> 
        </section>`;
        function iniCrearUsuarios(){

          const btnCrear = document.getElementById('btn-u-g');
          btnCrear.addEventListener('click',(e)=>{
            e.preventDefault();
            const pn = document.getElementById('u-pn').value;
            const sn = document.getElementById('u-sn').value;
            const pa = document.getElementById('u-pa').value;
            const sa = document.getElementById('u-sa').value;
            const fn = document.getElementById('u-fn').value;
            const dpi = document.getElementById('u-dpi').value;
            const gen = document.getElementById('u-g').value;
            const tel = document.getElementById('u-t').value;
            const email = document.getElementById('u-c').value;
            const dir = document.getElementById('u-d').value;
            const carg = document.getElementById('u-car').value;
            const avatar = document.getElementById('u-ava').src;
            const user = document.getElementById('u-user').value;
            const pass = document.getElementById('u-pass').value;
            const perm = document.getElementById('u-per').value;
            let genero = (gen > 1)?"masculino":"femenino";
            let datosUsuario = {
              pn:pn,
              sn:sn,
              pa:pa,
              sa:sa,
              dpi:dpi,
              sex:genero,
              dir:dir,
              carg:carg,
              tel:tel,
              corr:email,
              fnaci:fn,
              uria:avatar,
              user:user,
              pass:pass,
              perm:perm
            }
            const nUsuario = new UiUsuario();
            nUsuario.nuevoUsuario(datosUsuario)
          })

          const rol = document.getElementById('u-per');

          rol.addEventListener('change',(e)=>{
            const pn = document.getElementById('u-pn').value;
            const pa = document.getElementById('u-pa').value;
            const user = document.getElementById('u-user');
            const pass = document.getElementById('u-pass');
            if (e.target.value > 1) {
              let pn1=pn.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              let pa1=pa.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              user.value = (pn1[0]+pa1).toLowerCase();
              pass.value = "password";
            }
          })


          /*

          const form = document.querySelector ('.datos-usuario');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })*/
        }
        setTimeout(()=>iniCrearUsuarios(),100);
        return $crearusuarios;
}