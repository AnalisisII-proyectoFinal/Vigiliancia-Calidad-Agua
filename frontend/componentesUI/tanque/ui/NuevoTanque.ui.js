"use strict";
//@ts-check
/**
 * Clase de peticiones http
 * @module peticionPanel - clase handler
 * @author autor 
 * @copyright - ksksue
 * @version 1.0
 */
import ServicioNotificacion from "../../utilidades/Notificacion.js";
import ServicioTanque from "../servicio/Tanque.ser.js";
import {EditarTanque} from "../paginas/EditarTanque.js";
import { ventanModal } from "../../utilidades/VentanaModal.js";
const servTanque = new ServicioTanque();
const servNoti = new ServicioNotificacion();

class UiTanque {
    obtenerTanques(){
        servTanque.hacerPeticion('/tanques',{},'GET').then(datos=>{
            console.log(datos.body)
             this.listarTanques(datos.body);
        }).catch(err =>{
            console.log(err)
            servNoti.notificarToast("error","al cargar dato");
        })
    }

    obtenerTanque(idt){
        console.log(idt)
        servTanque.hacerPeticion(`/tanques/${idt}`,{},'GET').then(dato=>{
            console.log(dato.body[0])
            this.editarTanque(dato.body[0]);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar dato")
        })
    }

    listarTanques(tanques){
        const $tablaTanques = document.getElementById('lista-tanques');
        $tablaTanques.innerHTML='';
        if (tanques.length > 0) {
            let $fragment= document.createDocumentFragment();
            let $n=1;
            tanques.forEach(el=>{
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.tanq}</td>
                <td>${el.num}</td>
                <td>${el.ubic}</td>
                <td>${el.ffuncion}</td>
                <td>${el.largo}</td>
                <td>${el.ancho}</td>
                <td>${el.altura}</td>
                <td>${el.tpcloro}</td>
                <td class="opciones-tbl">
                  <button _id="${el.id}" class="editar">✏️</button>
                  <button class="eliminar" _id="${el.id}">🗑️</button>
                </td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablaTanques.appendChild($fragment);   
        }else{
            let $filaf = document.createElement('tr');
            $filaf.innerHTML=`No hay datos encontrados`;
            $tablaTanques.appendChild($filaf)
        }    
    }

    obtenerMetodoClorificacion(edit){
        servTanque.hacerPeticion('/metodocl',{},'GET').then(datos=>{
            console.log(datos.body);
            if (edit!== 1) {
                this.listarMetodoCloro(datos.body)
            }else{
                this.listarMetodoCloroEdit(datos.body)
            }
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos");
        })
    }
    listarMetodoCloro(metodos){
        const $selectT =document.getElementById('list-metodo')
        $selectT.innerHTML='';
            let $fragment= document.createDocumentFragment();
            metodos.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.tratamiento}`;
                $fragment.appendChild($fila)
            })
            $selectT.appendChild($fragment);  
    }

    listarMetodoCloroEdit(metodos){
        const $selectT =document.getElementById('list-metodo-e')
        $selectT.innerHTML='';
            let $fragment= document.createDocumentFragment();
            metodos.forEach(el=>{
              let $fila = document.createElement('option');
              $fila.setAttribute('value',el.id)
                $fila.innerHTML=`
                  ${el.tratamiento}`;
                $fragment.appendChild($fila)
            })
            $selectT.appendChild($fragment);  
    }

    nuevoTanque(tanque){
        servTanque.hacerPeticion('/tanque',tanque,'POST').then(r=>{
            this.obtenerTanques();
            servNoti.notificarToast("success",r.body.msg);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar los datos");
        })
    }

    editarTanque(tanque){
        ventanModal(EditarTanque(tanque))
    }


    actulizarTanque(tanque){
        servTanque.hacerPeticion('/tanque',tanque,'PUT').then(r=>{
            servNoti.notificarToast("success",r.body.msg);
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","al cargar datos");
        })
    }
    eliminarTanque(idt){
        servTanque.hacerPeticion(`/tanque/${idt}`,{},'DELETE').then(r=>{
            console.log(r.msg)
            this.obtenerTanques();
            servNoti.notificarToast("success",r.body.msg)
        }).catch(err=>{
            console.log(err)
            servNoti.notificarToast("error","no se pudo eliminar el registro..!")
        })
    }
    
}

export default UiTanque;
