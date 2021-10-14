import UiAplicacion from "../ui/Aplicacion.ui.js";
import ServicioNotificacion from "../../utilidades/Notificacion.js";
export function Login() {
    const $login = document.createElement('section');
    $login.classList.add('contenedor-login')
    $login.innerHTML=`
    <div class="login">
	    <h1>Acceso al sistema</h1>
      <form>
    	  <input type="text" id="l-user" placeholder="usuario" required="required" />
        <input type="password" id="l-pass" placeholder="contraseña" required="required" />
        <button id="btn-login" class="tercer-btn">Ingresar</button>
      </form>
    </div>
    <div>
      <img src="./assets/img/logo.png" alt="">
    </div> 
    `;

    function iniLogin() {
        const btn = document.getElementById('btn-login');
        
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            const lUser = document.getElementById('l-user').value;
            const lPass = document.getElementById('l-pass').value;
            if (lUser==='' || lPass === '') {
              const notificar = new ServicioNotificacion();
              notificar.notificarToast('error','Lleno todos los campos')
            }else{
              let dataAuth={
                user:lUser,
                pass:lPass
              }

              const authUsuario = new UiAplicacion();
              authUsuario.autenticarUsuario(dataAuth)
            }            
        })   
    }
    setTimeout(()=>iniLogin(),100);

    return $login;
}