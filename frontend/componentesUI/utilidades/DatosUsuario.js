export function DatosUsuario() {
    if (localStorage.getItem('dataUser')) {
        let dataU=localStorage.getItem('dataUser');
        let dU=JSON.parse(dataU);
        return dU;
    }else{
        return 0;
    }
}