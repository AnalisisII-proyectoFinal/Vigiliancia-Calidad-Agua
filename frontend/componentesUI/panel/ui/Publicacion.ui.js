import {ventanModal} from '../../utilidades/VentanaModal.js';
import{EditarPublicacion} from '../paginas/EditarPublicacion.js';
import ServicioPanel from '../servicio/Panel.ser.js';
const servPublicacion = new ServicioPanel();


class UiPublicacion {
    //metodos
    obtnerPublicaciones(){
        servPublicacion.hacerPeticion('/publicacion',{},'GET').then(datos=>{
            this.mostrarPublicaciones(datos.body)
          }).catch(err=>{
            console.log(err)
          })
    }

    mostrarPublicaciones(publicaciones){
        const $listaPublic=document.getElementById('lista-publicacion');
            $listaPublic.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            publicaciones.forEach(el=>{
              let check=(el.estadop > 0)?'':'checked=""';
              let $fila = document.createElement('tr');
              $fila.innerHTML=`
              <td>${$n}</td>
              <td>${el.titulo}</td>
              <td>${el.fecha}</td>
              <td>
              <input type="checkbox" class="estado" _id="${el.idp}" ${check}>
              </td>
              <td>
              <button class="editar" _id="${el.idp}" t="${el.titulo}" d="${el.descripcion}">✏️</button>
              <button class="eliminar" _id="${el.idp}">🗑️</button>
              </td>`;
              $fragment.appendChild($fila)
              $n++;
          })  
          $listaPublic.appendChild($fragment);
    }


    nuevaPublicacion(datosPublic){
        servPublicacion.hacerPeticion('/publicacion',datosPublic,'POST').then(r=>{
            this.obtnerPublicaciones();
            this.notificarAccion(r.body.msg);
        }).catch(err=>{
            console.log(err)
        })
    }

    editarPublicacion(t,d,idp){
        ventanModal(EditarPublicacion(t,d,idp))
    }

    actualizarPublicacion(id,t,d){
        servPublicacion.hacerPeticion('/actpublicacion',{idp:id,tit:t,des:d},'PUT').then(r=>{
            this.obtnerPublicaciones();
            this.notificarAccion(r.body.msg);
        })

    }

    eliminarPublicacion(idpub){
        servPublicacion.hacerPeticion('/eliminarpublic',{id:idpub},'PUT').then(r=>{
            this.obtnerPublicaciones();
            this.notificarAccion(r.body.msg);
            }).catch(err=>{
            console.log(err)
        })
    }

    notificarAccion(msg){
        alert(msg)
    }
}

export default UiPublicacion;