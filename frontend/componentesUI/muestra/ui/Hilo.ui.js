import ServicioMuestra from '../servicio/Muestra.ser.js'
const serHilo = new ServicioMuestra();

class UiHilo{
    obtnerHilos(){
        serHilo.hacerPeticion('/hilos',{},'GET').then(datos=>{
            this.listarHilos(datos.body);
        })

    }
    obtnerHilo(){

    }
    listarHilos(hilos){
        const $tablahilos = document.getElementById('lista-hilos');
        $tablahilos.innerHTML='';
            let $fragment= document.createDocumentFragment();
            let $n=1;
            hilos.forEach(el=>{
              let check=(el.estado > 0)?'':'checked=""';
              let $fila = document.createElement('tr');
                $fila.innerHTML=`
                <td>${$n}</td>
                <td>${el.fecha1}</td>
                <td>${el.fecha2}</td>
                <td>${el.descripcion}</td>
                <td>${el.por} %</td>
                <td><button class="detalle" _id="${el.id}">📇</button></td>
                <td><input _id="${el.id}" class="estado" type="checkbox" ${check}/></td>`;
                $fragment.appendChild($fila)
                $n++;
            })  
            $tablahilos.appendChild($fragment);
    }

    notifcar(msg){
        alert(msg)
    }

}

export default UiHilo;