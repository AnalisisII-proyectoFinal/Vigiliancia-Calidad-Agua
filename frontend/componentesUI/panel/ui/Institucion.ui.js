import ServicioPanel from '../servicio/Panel.ser.js';
import ServicioNotificacion from '../../utilidades/Notificacion.js';
const servInstitucion = new ServicioPanel();

class UiInstitucion{
  editarDatosInst(){
    const $inpInsNombre = document.getElementById('i-nombre');
    const $inpInsDepen = document.getElementById('i-depend');
    const $inpInsApp = document.getElementById('i-app');
    const $labInsFecha = document.getElementById('i-fe-d');
      $inpInsNombre.disabled = false;
      $inpInsDepen.disabled = false;
      $inpInsApp.disabled = false;
      servInstitucion.hacerPeticion('/institucion',{},'GET').then(datos=>{
          const datosIns = datos.body[0];
            $inpInsNombre.value=datosIns.entidad;
            $inpInsDepen.value=datosIns.dependencia;
            $inpInsApp.value=datosIns.app;
            $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })
    }

    
    actualizarDatosInstitucion(datosInst){
      servInstitucion.hacerPeticionConImagen('/institucion',datosInst,'PUT').then(r=>{
        console.log(r.body.msg);
        this.notificar('exito..!',r.body.msg)
      }).catch(err=>{
        console.log(err)
        this.notificar('error..!',err)
      })  
    }

    editarMision(){
      const $inpInsMision = document.getElementById('i-mision');
      const $labInsFecha = document.getElementById('i-fe-d');
      $inpInsMision.disabled=false;
      servInstitucion.hacerPeticion('/mision',{},'GET').then(datos=>{
        const datosIns = datos.body[0];
          $inpInsMision.value=datosIns.mision;
          $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })

    }

    actulizarMision(mision){
      servInstitucion.hacerPeticionConImagen('/mision',mision,'PUT').then(r=>{
        console.log(r.body.msg);
        this.notificar('exito..!',r.body.msg)
      }).catch(err=>{
        console.log(err)
        this.notificar('error..!',err)
      }) 
    }

    editarVision(){
      const $inpInsVision = document.getElementById('i-vision');
      const $labInsFecha = document.getElementById('i-fe-d');
      $inpInsVision.disabled= false;
      servInstitucion.hacerPeticion('/vision',{},'GET').then(datos=>{
        const datosIns = datos.body[0];
          $inpInsVision.value=datosIns.vision;
          $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })

    }

    actulizarVision(vision){
      servInstitucion.hacerPeticionConImagen('/vision',vision,'PUT').then(r=>{
        console.log(r.body.msg);
        this.notificar('exito..!',r.body.msg)
      }).catch(err=>{
        console.log(err)
        this.notificar('error..!',err)
      }) 
    }
    
    editarDatosSalud(){
      const $inpSalDep = document.getElementById('i-dep');
      const $inpSalMun = document.getElementById('i-mun');
      const $inpSalArea = document.getElementById('i-a-sal');
      const $inpSalSer = document.getElementById('i-s-sal');
      const $inpSalDis = document.getElementById('i-di-sal');
      const $inpSalDir = document.getElementById('i-d-sal');
      const $labSalFecha = document.getElementById('i-fe-sal');
      const $verlogoSal = document.getElementById('btn-v-sal');
      const $verlogoSiv = document.getElementById('btn-v-siv')

      const $inputSal = document.querySelectorAll('.input-dato');
        $inputSal.forEach(el=>{el.disabled=false})
      servInstitucion.hacerPeticion('/datoscentrosalud',{},'GET').then(datos=>{
          const datosSalud=datos.body[0];
          $inpSalDep.value=datosSalud.departamento;
          $inpSalMun.value=datosSalud.municipio;
          $inpSalArea.value=datosSalud.arsal;
          $inpSalSer.value=datosSalud.sersal;
          $inpSalDis.value=datosSalud.dissal;
          $inpSalDir.value=datosSalud.dirsal;
          $labSalFecha.innerHTML=`Utlima actualizacion: ${datosSalud.fecha}`;
          $verlogoSal.setAttribute('src',`http://localhost:3000${datosSalud.lsal}`);
          $verlogoSiv.setAttribute('src',`http://localhost:3000${datosSalud.lsiv}`)
          }).catch(err=>{
              console.log(err)
          })
    }

    actulizarDatosSalud(datosSalud){
      servInstitucion.hacerPeticion('/datoscentrosalud',datosSalud,'PUT').then(r=>{
          console.log(r.body.msg);
          this.notificar('exito..!',r.body.msg)
        }).catch(err=>{
          console.log(err)
          this.notificar('error..!',err)
        })
  }

  actualizarLogoSalud(logo){
    servInstitucion.hacerPeticionConImagen('/logosal',logo,'PUT').then(r=>{
      console.log(r.body.msg);
      this.notificar('exito..!',r.body.msg)
    }).catch(err=>{
      console.log(err)
      this.notificar('error..!',err)
    })

  }
  actualizarLogoSiv(logo){
    servInstitucion.hacerPeticionConImagen('/logosiv',logo,'PUT').then(r=>{
      console.log(r.body.msg);
      this.notificar('exito..!',r.body.msg)
    }).catch(err=>{
      console.log(err)
      this.notificar('error..!',err)
    })
  }


  notificar(titulo,mensaje){
    const notificar = new ServicioNotificacion();
    notificar.mostrarNotificacion(titulo,mensaje)      
  }
}

export default UiInstitucion;