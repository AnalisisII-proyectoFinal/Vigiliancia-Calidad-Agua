export function Login() {
    const $login = document.createElement('section');
    $login.classList.add('contenedor-login')
    $login.innerHTML=`
    <div class="login-app">
    <form action="">
      <p><h2>ACCESO AL SISTEMA</h2></p>
      <p><label for="" class="input-label">Usuario:</label>
        <input type="text" class="input-dato" id="" placeholder="mi usuario" required=""/></p>
      <p><label for="" class="input-label">Contraseñan:</label>
          <input type="password" class="input-dato" id="" placeholder="" required=""/></p>
      <p><button id="btn-login" class="tercer-btn">Ingresar</button></p>
    </form>
    </div>

    <div>
      <img src="./assets/img/logo.png" alt="">
    </div> 
    `;

    function iniLogin() {
        const btn = document.getElementById('btn-login');

        btn.addEventListener('click',()=>{
            console.log('presionando');
            location.href= '#/app/dashboard'
        })

        
    }
    setTimeout(()=>iniLogin(),100);

    return $login;
}