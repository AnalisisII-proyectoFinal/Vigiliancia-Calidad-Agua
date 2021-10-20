const {getConexion,sql} = require('../../../sqlserver/sqlserverconexion.js')
const respuesta = require('../../../respuesta/respuesta.js');

class muestra{
    constructor(){
        this.tanque='',
        this.ubicacion='',
        this.m1={
            punto:'',
            fecha:'',
            hora:'',
            ph:'',
            cl:'',
        },
        this.m2={
            punto:'',
            fecha:'',
            hora:'',
            ph:'',
            cl:'',
        },
        this.m3={
            punto:'',
            fecha:'',
            hora:'',
            ph:'',
            cl:'',
        }
    }

    agregarTanque(tanq){
        this.tanque=tanq
    }
    agregarUbicacion(ubic){
        this.ubicacion=ubic
    }
    agregarMuestra1(muestra){
        this.m1.punto=muestra.punto;
        this.m1.fecha=muestra.fecha;
        this.m1.hora=muestra.hora;
        this.m1.ph=muestra.ph;
        this.m1.cl=muestra.cl;
    }
    agregarMuestra2(muestra){
        this.m2.punto=muestra.punto;
        this.m2.fecha=muestra.fecha;
        this.m2.hora=muestra.hora;
        this.m2.ph=muestra.ph;
        this.m2.cl=muestra.cl;
    }
    agregarMuestra3(muestra){
        this.m3.punto=muestra.punto;
        this.m3.fecha=muestra.fecha;
        this.m3.hora=muestra.hora;
        this.m3.ph=muestra.ph;
        this.m3.cl=muestra.cl;
    }
}

async function obtenerEmpleados(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('');
            respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
    
}

async function informeCentroSaludXHilo(req,res) {
    const idh=req.params.idh;
    const muestras=[];
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idh',sql.Int,idh).execute('dbo.uspinformexhilo');
        
        for (let i = 0; i < result.recordset.length; i=i+3) {
            const data1 = result.recordset[i]
            const data2 = result.recordset[i+1]
            const data3 = result.recordset[i+2]
            const muest= new muestra();
            muest.agregarTanque(data1.nom)
            muest.agregarUbicacion(data1.ubic)
            muest.agregarMuestra1(data1);
            muest.agregarMuestra2(data2);
            muest.agregarMuestra3(data3)
            muestras.push(muest)
        }
        
        const resultD = await pool.request().execute('dbo.uspobtenerdatosinforcs');


        respuesta.exito(req,res,{m:muestras,d:resultD.recordset},200)     
    } catch (error) {
        console.log(error)
    }
    
}

async function obtenerTanques(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtnetanquesopc');
            respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }
    
}

async function obtenerHilosXfecha(req,res) {
    const y=req.params.y;
    const m=req.params.m;
    try {
        const pool = await getConexion();
        const result = await pool.request()
                    .input('year',sql.Int,y)
                    .input('month',sql.Int,m)
                    .execute('dbo.uspobtenerhilos')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}

async function obtenerUltimosHilos(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerultimoshilos')
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500)
    }
    
}


module.exports={
    obtenerTanques,
    obtenerEmpleados,
    informeCentroSaludXHilo,
    obtenerHilosXfecha,
    obtenerUltimosHilos
}