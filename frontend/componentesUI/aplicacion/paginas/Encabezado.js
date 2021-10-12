import UiAplicacion from '../ui/Encabezado.ui.js';
import {EditarPerfil} from './Perfil.js'
import {ventanModal} from '../../utilidades/VentanaModal.js';
export function Encabezado() {
    const $Encabezado=document.createElement('head');
    $Encabezado.classList.add('encabezado')
    $Encabezado.innerHTML=`
        <div>
            <img id="logo-inst" src="" alt="logo">
        </div>
        <div id="encabezado-datos"></div>
        <div>
            <img id="avatar-us" src="../../../assets/img/avatar.svg" alt="logo" style="visibility:hidden;"/>
            <button id="btn-opciones" class="primer-btn" style="visibility:hidden;">perfil</button>
            <button id="btn-salir" class="primer-btn" style="visibility:hidden;">Salir</button>
            <button id="btn-irlogin" class="primer-btn" style="visibility:visible;">Entrar</button>
        </div>
        `;
    function initEncabezado(){
        const $btnOp = document.getElementById('btn-opciones');
        const $avatar = document.getElementById('avatar-us');
        const $btnSalir = document.getElementById('btn-salir');

        const datosEncabezado = new UiAplicacion();
        datosEncabezado.obtenerDatosEncabezado();

        const btn = document.getElementById('btn-irlogin');

        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            location.href= '#/app/login';
            btn.style.visibility = 'hidden';
            $btnSalir.style.visibility = 'visible'; 
        })

        $btnSalir.addEventListener('click',(e)=>{
            e.preventDefault();
            location.href='#/';
            btn.style.visibility = 'visible';
            $btnSalir.style.visibility = 'hidden';
            $btnOp.style.visibility = 'hidden';
            $avatar.style.visibility = 'hidden';
        })
        const btnMenu = document.getElementById('btn-opciones');
        btnMenu.addEventListener('click',(e)=>{
                e.preventDefault();
                ventanModal(EditarPerfil())
            /*
            let vleft = document.querySelector('.menu-app').style.left;
            if (vleft == "100%") {
                document.querySelector('.menu-app').style.left=0;
            }else{
                document.querySelector('.menu-app').style.left="100%";
            }*/
        })
    }
    setTimeout(()=>initEncabezado(),100);
    return $Encabezado; 
}

//<h1>${datos.entidad}<br>${datos.dependencia}<br>${datos.aplicacion}</h1>