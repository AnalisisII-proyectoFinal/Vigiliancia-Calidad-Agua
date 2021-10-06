import ServicioUsuario from '../servicio/Usuario.ser.js';
const serUsuario = new ServicioUsuario();

class UiListarUsuario{
    obtenerDatosUsuarios(){
        serUsuario.hacerPeticion('/usuarios',{},'GET').then(datos=>{
            this.mostrarUsuarios(datos.body)
        }).catch(error=>{
            console.log(error)
        })
    }
    mostrarUsuarios(usuarios){
        const $lista = document.getElementById('lista-usuarios');
        $lista.innerHTML='';
        const $fragment = document.createDocumentFragment();
        let $no = 1;
        usuarios.forEach(el => {
            let check = (el.estado > 0)?'':'checked=""';
            const $fila = document.createElement('tr');
            $fila.innerHTML=`
            <td>${$no}</td>
            <td>${el.nombre}</td>
            <td>${el.dpi}</td>
            <td>${el.direccion}</td>
            <td>${el.cargo}</td>
            <td>
            <input type="checkbox" class="estado" _id="${el.id}" ${check}>
            </td>
            <td>
            <button class="editar" _id="${el.id}">✏️</button>
            <button class="eliminar" _id="${el.id}">🗑️</button>
            <button class="ver" _id="${el.id}">🔍​</button>
            </td>
            `;
            $fragment.appendChild($fila)
            $no++;
        });

        $lista.appendChild($fragment)
    }
    editarUsuario(){

    }
    eliminarUsuario(){

    }
    verDetallesUsuario(){

    }

}
export default UiListarUsuario;