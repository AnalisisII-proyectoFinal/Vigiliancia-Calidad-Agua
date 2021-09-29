
const notificaciones=[];


class Notificacion{
    mostrarNotificacion(){

    }
    agregarNotificacion(tipo,msj){
        let dataN={
            fecha:'05-01-2021',
            tipo:tipo,
            msj:msj
        }
        notificaciones.push(dataN)
        this.desplegarNotificacon(dataN)
    }

    desplegarNotificacon(dataN){
        alert(dataN.msj)
    }


}

export default Notificacion;