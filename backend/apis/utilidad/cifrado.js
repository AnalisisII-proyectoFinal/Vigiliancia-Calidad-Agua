const bcrypt = require('bcryptjs');

async function encriptar(contrasena) {
    const salt= await bcrypt.genSalt(10)
    return await bcrypt.hash(contrasena,salt)
    
}
async function comparar(contrasena,contrasenaRecibida) {
    return await bcrypt.compare(contrasena,contrasenaRecibida);
}

module.exports={
    encriptar,
    comparar
}