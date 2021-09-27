const regex={
    texto: /^\w+\s+/,
    nombre:/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9.]+$/,
    phone: /^[5,0,2]{3}[4|5|7]{1}([\d]{7})$/,
    fecha: /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
    descripcion: /^\w+\s+/,
    numero:/^\d/
}


function actEstado(result,idInput){
    if (result) {
        document.getElementById(idInput).style.border='2px solid var(--septimo-color)'; 
    }else{
        document.getElementById(idInput).style.border='2px solid var(--sexto-color)';
    }
}


export function validarInput(tyInput,idInput,valInput){
    switch (tyInput) {
        case 'text':
                let resultTit = regex.texto.test(valInput);
                actEstado(resultTit,idInput);
            
            break;
        case 'nombre':
                let resultNom = regex.nombre.test(valInput);
                actEstado(resultNom,idInput); 
            break;
        case 'telefono':
                let resultTel = regex.phone.test(valInput);
                actEstado(resultTel,idInput);
                
            break;
        case 'correo':
                let resultCorreo = regex.email.test(valInput);
                actEstado(resultCorreo,idInput);
            break;
        case 'fecha':
                let resultFecha = regex.subject.test(valInput);
                actEstado(resultFecha,idInput);
            break;
        case 'descripcion':
                let resultdescripcion = regex.descripcion.test(valInput);
                actEstado(resultdescripcion,idInput);
            break;
        case 'numero':
                let resultnumero = regex.numero.test(valInput);
                actEstado(resultnumero,idInput);
            break;
        default:
            console.log('dato no admitido')
            break;
    }
}

