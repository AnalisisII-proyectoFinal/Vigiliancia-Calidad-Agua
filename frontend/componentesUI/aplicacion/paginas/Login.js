export function Login() {
    const $login = document.createElement('section');
    $login.classList.add('contenedor-login')
    $login.innerHTML=`
    <div class="login">
	    <h1>Acceso al sistema</h1>
      <form method="post">
    	  <input type="text"  placeholder="usuario" required="required" />
        <input type="password" placeholder="contraseña" required="required" />
        <button id="btn-login" class="tercer-btn">Ingresar</button>
      </form>
    </div>

    <div>
      <img src="./assets/img/logo.png" alt="">
    </div> 
    `;

    function iniLogin() {
        const btn = document.getElementById('btn-login');
        const $btnOp = document.getElementById('btn-opciones');
        const $avatar = document.getElementById('avatar-us');

        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log('presionando');
            location.href= '#/app/dashboard';
            $btnOp.style.visibility = 'visible';
            $avatar.style.visibility = 'visible';
             
        })

        
    }
    setTimeout(()=>iniLogin(),100);

    return $login;
}