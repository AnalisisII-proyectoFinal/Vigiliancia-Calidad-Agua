import ServicioAplicacion from '../servicio/Aplicacion.ser.js';
const servAplicacion = new ServicioAplicacion();

class UiAplicacion{
    obtenerDatosEncabezado(){
        const $log = document.getElementById('logo-inst');
        const $tituloEl = document.createElement('h1');
        servAplicacion.hacerPeticion('/datosinstitucion',{},'GET').then(datos =>{
            console.log(datos.body)
            $tituloEl.innerHTML=`${datos.body[0].entidad}<br>${datos.body[0].dependencia}<br>${datos.body[0].app}`;
            $log.src=datos.body[0].logo;
        }).then(()=>{
            const content = document.getElementById('encabezado-datos');
            content.innerHTML='';
            content.appendChild($tituloEl);
        })
    }

}
export default UiAplicacion;