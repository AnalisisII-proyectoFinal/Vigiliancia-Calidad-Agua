

class ServicioNotificacion{
    notificarPush(titulo,mensaje){
        let opcion = {
            body: mensaje,
            vibrate: true
        }
        if (!("Notification" in window)) {
            alert("No soporta Notificaciones")
            
        }else if (Notification.permission === "granted") {
            new Notification(titulo,opcion)

        }else if(Notification.permission !== "denied"){
            Notification.requestPermission((permission)=>{
                if (Notification.permission ==="granted") {
                    let notificacion = new Notification('notificiones Habilitado')
                }
            })
        }

    }
    notificarToast(tipo,mensaje){
        toastr[tipo](mensaje)
    }

}

export default ServicioNotificacion;