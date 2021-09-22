import PeticionEncabezado from './Controlador.js';
export function Encabezado() {
    const $Encabezado=document.createElement('head');
    $Encabezado.classList.add('encabezado')
    $Encabezado.innerHTML=`
        <div>
            <img src="./assets/img/logo.png" alt="logo">
        </div>
        <div id="encabezado-datos">
        </div>
        <div>
            <button id="btn-irlogin" class="primer-btn">Entrar</button>
            <button id="btn-menu" class="primer-btn">Menu</button>
        </div>
        `;
    function initEncabezado(){
        const $manEncabezado = new PeticionEncabezado();
        const $tituloEl = document.createElement('h1');
        $manEncabezado.hacerPeticion(null,{},'GET').then(datos =>{
            $tituloEl.innerHTML=`${datos.body[0].entidad}<br>${datos.body[0].dependencia}<br>${datos.body[0].nombre_aplicacion}`;
        }).then(()=>{
            document.getElementById('encabezado-datos').appendChild($tituloEl);
        })


        const btn = document.getElementById('btn-irlogin');

        btn.addEventListener('click',()=>{
            console.log('presionando');
            location.href= '#/app/login'
        })

        const btnMenu = document.getElementById('btn-menu');
        btnMenu.addEventListener('click',()=>{
            let vleft = document.querySelector('.menu-app').style.left;
            if (vleft == "100%") {
                document.querySelector('.menu-app').style.left=0;
            }else{
                document.querySelector('.menu-app').style.left="100%";
            }
        })
    }
    setTimeout(()=>initEncabezado(),100);
    return $Encabezado; 
}

//<h1>${datos.entidad}<br>${datos.dependencia}<br>${datos.aplicacion}</h1>