import UiAplicacion from "../ui/Aplicacion.ui.js";
import {ventanModal} from "../../utilidades/VentanaModal.js";
import {EditarPerfil} from "../paginas/Perfil.js";
export function Encabezado() {
    const $Encabezado=document.createElement('head');
    $Encabezado.classList.add('encabezado')
    $Encabezado.innerHTML=`
        <div>
            <img id="logo-inst" src="" alt="logo">
        </div>
        <div id="encabezado-datos"></div>
        <div class="elementosperfil">
            <div class="avatarnombre" id="perfil-usuario" style="visibility:hidden;">
                <img id="avatar-us"  src="https://res.cloudinary.com/municipalidad-san-jose-chacaya/image/upload/v1634070657/avatar_mryjhz.svg" alt="avatar"/>
                <span id="nombre-u"></span>
                <span><button id="perfil-edit" class="btn-perfil">Perfil</button> | <button id="salir-app" class="btn-perfil">Salir</button></span>
            </div>
                <button id="btn-irlogin" class="primer-btn" style="visibility:visible;">Entrar</button>
        </div>
        `;
    function initEncabezado(){
        const editarPefil = document.getElementById('perfil-edit');
        const salirApp = document.getElementById('salir-app');
        const datosEncabezado = new UiAplicacion();
        datosEncabezado.obtenerDatosEncabezado();

        const btn = document.getElementById('btn-irlogin');

        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            location.href= '#/app/login';
            btn.style.visibility = 'hidden';
        })  
        editarPefil.addEventListener('click',(e)=>{
            e.preventDefault();
            let dataLocal=localStorage.getItem('dataUser');
            let dataParse=JSON.parse(dataLocal);
            const editPerfil = new UiAplicacion();
            editPerfil.editarPerfil(dataParse.id)
        })

        salirApp.addEventListener('click',(e)=>{
            localStorage.removeItem('nombre');
            localStorage.removeItem('avatar');
            localStorage.removeItem('dataUser');
            location.href='#/';
        })
    }
    setTimeout(()=>initEncabezado(),100);
    return $Encabezado; 
}

