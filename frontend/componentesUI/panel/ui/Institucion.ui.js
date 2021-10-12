import ServicioPanel from '../servicio/Panel.ser.js';
import ServicioNotificacion from '../../utilidades/Notificacion.js';
import UiAplicacion from '../../aplicacion/ui/Encabezado.ui.js';
const servInstitucion = new ServicioPanel();
const servNotificar = new ServicioNotificacion();

class UiInstitucion{
  editarDatosInst(){
    const $inpInsNombre = document.getElementById('i-nombre');
    const $inpInsDepen = document.getElementById('i-depend');
    const $inpInsApp = document.getElementById('i-app');
    const $labInsFecha = document.getElementById('i-fe-d');
    const $logoIns = document.getElementById('prev-logo-i');
      $inpInsNombre.disabled = false;
      $inpInsDepen.disabled = false;
      $inpInsApp.disabled = false;
      servInstitucion.hacerPeticion('/institucion',{},'GET').then(datos=>{
          const datosIns = datos.body[0];
            $inpInsNombre.value=datosIns.entidad;
            $inpInsDepen.value=datosIns.dependencia;
            $inpInsApp.value=datosIns.app;
            $logoIns.src=datosIns.logo;
            $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })
    }

    
    actualizarDatosInstitucion(datosInst){
      servInstitucion.hacerPeticion('/institucion',datosInst,'PUT').then(r=>{
        console.log(r.body.msg);
        const actualizarDatosInst=new UiAplicacion();
        actualizarDatosInst.obtenerDatosEncabezado();
        servNotificar.notificarToast("success",r.body.msg);
      }).catch(err=>{
        console.log(err)
        servNotificar.notificarToast("error","No se pudo actualizar");
      })  
    }

    editarMision(){
      const $inpInsMision = document.getElementById('i-mision');
      const $labInsFecha = document.getElementById('i-fe-d');
      const $insMImgP = document.getElementById('prev-img-m');
      $inpInsMision.disabled=false;
      servInstitucion.hacerPeticion('/mision',{},'GET').then(datos=>{
        const datosIns = datos.body[0];
          $inpInsMision.value=datosIns.mision;
          $insMImgP.src=datosIns.logom;
          $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })
    }

    actulizarMision(mision){
      servInstitucion.hacerPeticion('/mision',mision,'PUT').then(r=>{
        console.log(r.body.msg);
        servNotificar.notificarToast("success",r.body.msg);
      }).catch(err=>{
        console.log(err)
        servNotificar.notificarToast("error","No se pudo actualizar");
      }) 
    }

    editarVision(){
      const $inpInsVision = document.getElementById('i-vision');
      const $labInsFecha = document.getElementById('i-fe-d');
      const $insVImg = document.getElementById('prev-img-v')
      $inpInsVision.disabled= false;
      servInstitucion.hacerPeticion('/vision',{},'GET').then(datos=>{
        const datosIns = datos.body[0];
          $inpInsVision.value=datosIns.vision;
          $insVImg.src=datosIns.logov;
          $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })

    }

    actulizarVision(vision){
      servInstitucion.hacerPeticion('/vision',vision,'PUT').then(r=>{
        console.log(r.body.msg);
        servNotificar.notificarToast("success",r.body.msg);
      }).catch(err=>{
        console.log(err)
        servNotificar.notificarToast("error","No se pudo actualizar");
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
      const $verlogoSal = document.getElementById('prev-img-s');
      const $verlogoSiv = document.getElementById('prev-img-siv')

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
          $verlogoSal.setAttribute('src',`${datosSalud.lsal}`);
          $verlogoSiv.setAttribute('src',`${datosSalud.lsiv}`)
          }).catch(err=>{
              console.log(err)
          })
    }

    actulizarDatosSalud(datosSalud){
      servInstitucion.hacerPeticion('/datoscentrosalud',datosSalud,'PUT').then(r=>{
          console.log(r.body.msg);
          servNotificar.notificarToast("success",r.body.msg);
        }).catch(err=>{
          console.log(err)
          servNotificar.notificarToast("error","No se pudo actualizar");
        })
  }

}

export default UiInstitucion;