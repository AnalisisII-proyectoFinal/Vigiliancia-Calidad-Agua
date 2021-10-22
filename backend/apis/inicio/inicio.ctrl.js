const {getConexion,sql}=require('../../sqlserver/sqlserverconexion.js');
const respuesta = require('../../respuesta/respuesta.js');
const {encriptar}=require('../utilidad/cifrado.js');


class Tanque{
    constructor(){
        this.tanq='',
        this.img='',
        this.ubicacion='',
        this.m1={
            tipo:'',
            por:0
        },
        this.m2={
            tipo:'',
            por:0
        },
        this.m3={
            tipo:'',
            por:0
        }
    }

    agregarDatosTanque(d){
        this.tanq=d.tanque;
        this.img=d.imgt;
        this.ubicacion=d.ubicacion;
    }
    agregarMuestra1(m){
        this.m1.tipo=m.muestra;
        if (m.estado===1) {
            this.m1.por=100
        }

    }
    agregarMuestra2(m){
        this.m2.tipo=m.muestra;
        if (m.estado===1) {
            this.m2.por=100
        }

    }
    agregarMuestra3(m){
        this.m3.tipo=m.muestra;
        if (m.estado===1) {
            this.m3.por=100
        }

    }
}

async function obtnerDatosInstitucion(req,res) {
    try{
        const pool = await getConexion();  
        const result = await pool.request().execute('dbo.uspObtnerDatosInstitucion');
        respuesta.exito(req,res,result.recordset,200)

    }catch (err){
        respuesta.error(req,res,error,500);
    } 
}

async function obtnerHiloActual(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerhiloactual');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}

async function obtnerPublicaciones(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerpublicaciones');
        respuesta.exito(req,res,result.recordset,200) 
    } catch (error) {
        respuesta.error(req,res,error,500);
    }
}
//dbo.uspobtenerdatoshiloactual

//dbo.uspobtenerdatoshiloactualinicio
async function obtnerProgresoActual(req,res) {
    let dataT=[];
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenerdatoshiloactualinicio');

        if (result.recordset.length !== 0) {
            
            for (let i = 0; i < result.recordset.length; i=i+3) {
                const data1=result.recordset[i];
                const data2=result.recordset[i+1];
                const data3=result.recordset[i+2];
                const t= new Tanque();
                t.agregarDatosTanque(data1);
                t.agregarMuestra1(data1);
                t.agregarMuestra2(data2);
                t.agregarMuestra3(data3);
                dataT.push(t)
            }
            
        }
        respuesta.exito(req,res,dataT,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error.message,500);
    }
}

async function obtnerMisionVision(req,res) {
    try {
        const pool = await getConexion();
        const result = await pool.request().execute('dbo.uspobtenermisionvision')
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        respuesta.error(req,res,error.message,500);
    } 
}

async function obtenerInformacionUsuario(req,res) {
    const idu=req.params.id
    try {
        const pool = await getConexion();
        const result = await pool.request().input('idu',sql.Int,idu).execute('dbo.obtenerdatosusuario');
        respuesta.exito(req,res,result.recordset,200);
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error'},500)
    }
    
}

async function obtenerDatosUsuario(req,res) {
    const id = req.params.id;
    try {
        const pool = await getConexion();
        const result = await pool.request().input('id',sql.Int,id).execute('dbo.tbl_obtenerdatosusuarioedit')
        respuesta.exito(req,res,result.recordset,200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'error servidor'},500)
    }    
}

async function actualizarDatosUsuario(req,res) {
    const id= req.params.id;
    const {av,tel,dir,em}=req.body;
    console.log(id);
    console.log(req.body);
    try {
        const pool = await getConexion();
        await pool.request()
                    .input('id',sql.Int,id)
                    .input('avatar',sql.VarChar(200),av)
                    .input('tel',sql.VarChar(100),tel)
                    .input('dir',sql.VarChar(200),dir)
                    .input('em',sql.VarChar(100),em)
                    .execute('dbo.uspactualizardatosusuarioperfil')
        respuesta.exito(req,res,{msg:'Datos actualizado'},200)
        
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,error,500)
        
    }
}

async function actualizarContrasena(req,res) {
    const {id,pass} = req.body;
    const passEncript= await encriptar(pass);
    try {
        const pool = await getConexion();
        await pool.request().input('id',sql.Int,id).input('pass',sql.VarChar(200),passEncript)
        .execute('dbo.uspactualizarcontrasena');
        respuesta.exito(req,res,{msg:'dato actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Erro de servidor'},500)
    }  
}

async function actualizarPin(req,res) {
    const id=req.params.id;
    const {pin} = req.body;
    try {
        const pool = await getConexion();
        await pool.request().input('id',sql.Int,id).input('pin',sql.Int,pin)
        .execute('dbo.uspactualizarpin');
        respuesta.exito(req,res,{msg:'dato actualizado'},200)
    } catch (error) {
        console.log(error)
        respuesta.error(req,res,{msg:'Erro de servidor'},500)
    }  
}


module.exports = {
    obtnerDatosInstitucion,
    obtnerHiloActual,
    obtnerPublicaciones,
    obtnerProgresoActual,
    obtnerMisionVision,
    obtenerInformacionUsuario,
    obtenerDatosUsuario,
    actualizarDatosUsuario,
    actualizarContrasena,
    actualizarPin
}