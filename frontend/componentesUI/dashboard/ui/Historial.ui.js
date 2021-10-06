import ServicioDashboard from '../servicio/Dashboard.Ser.js';
const servDashboard = new ServicioDashboard();

class UiHistorial{
    obtenerHilosdelAño(){
        servDashboard.hacerPeticion('',{},'GET').then(datos=>{
            this.mostrarListaHilos(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }
    obtenerHilos(cantidad,year){
        servDashboard.hacerPeticion('',{c:cantidad,a:year},'GET').then(datos=>{
            this.mostrarListaHilos(datos.body)
        }).catch(err=>{
            console.log(err)
        })
    }


    mostrarListaHilos(hilos){
        const $tabla = document.getElementById('lista-hilos');
        $tabla.innerHTML='';
        const $fragment = document.createDocumentFragment();
        let $no=1;
        hilos.forEach(el => {
            const $fila = document.createElement('tr');
            $fila.innerHTML=`
                    <td>${$no}</td>
                    <td>1</td>
                    <td>21/02/2021</td>
                    <td>28/02/2021</td>
                    <td>2021</td>
                    <td>Finalizado</td>
                    <td>
                        <button class="editar">✏️</button>
                        <button class="detalles">✏️</button>
                        <button class="eliminar">🗑️</button>
                    </td>
                    `;
                $fragment.appendChild($fila);
            
        });
        $tabla.appendChild($fragment)
    }
}
export default UiHistorial;