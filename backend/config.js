require('dotenv').config();
module.exports = {
    api:{
        port: process.env.API_PORT || 4000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    sqlserver:{
        dbUser:process.env.DB_USUARIO,
        dbPassword:process.env.DB_PASSWORD,
        dbServer:process.env.DB_SERVER,
        dbDatabase:process.env.DB_DATABASE,
    },
    cloudinary:{
        cloud:process.env.CLOUDINARY_URL,
        presets:process.env.PRESETS
    }
}