import ServicioPanel from '../servicio/Panel.ser.js';
const servInstitucion = new ServicioPanel();

class UiInstitucion{
    obtnerDatosInstitucion(){
      const $inpInsNombre = document.getElementById('i-nombre');
      const $inpInsDepen = document.getElementById('i-depend');
      const $inpInsApp = document.getElementById('i-app');
      const $inpInsLog = document.getElementById('i-log');
      const $inpInsMision = document.getElementById('i-mision');
      const $inpInsMImg = document.getElementById('i-log-m');
      const $inpInsVision = document.getElementById('i-vision');
      const $inpInsVImg = document.getElementById('i-log-v');
      const $labInsFecha = document.getElementById('i-fe-d');

      const inputIns = document.querySelectorAll('.input-datoi');
              inputIns.forEach(el=>{el.disabled=false}) 

      servInstitucion.hacerPeticion('/institucion',{},'GET').then(datos=>{
          const datosIns = datos.body[0];
            $inpInsNombre.value=datosIns.entidad;
            $inpInsDepen.value=datosIns.dependencia;
            $inpInsApp.value=datosIns.app;
            $inpInsMision.value=datosIns.mision;
            $inpInsVision.value=datosIns.vision;
            $labInsFecha.innerHTML=`Utlima actualizacion: ${datosIns.fecha}`;
      }).catch(err=>{
          console.log(err)
      })
    }
    
    actualizarDatosInstitucion(datosInst){
        servInstitucion.hacerPeticion('/institucion',datosInst,'PUT').then(r=>{
              console.log(r.body.msg);
              this.notificar(r.body.msg)
            }).catch(err=>{
              console.log(err)
            })
    }

    obtnerDatosSalud(){
      const $inpSalDep = document.getElementById('i-dep');
      const $inpSalMun = document.getElementById('i-mun');
      const $inpSalArea = document.getElementById('i-a-sal');
      const $inpSalSer = document.getElementById('i-s-sal');
      const $inpSalDis = document.getElementById('i-di-sal');
      const $inpSalDir = document.getElementById('i-d-sal');
      const $inpSalLog = document.getElementById('i-log-sal');
      const $inpSalSiv = document.getElementById('i-log-siv');
      const $labSalFecha = document.getElementById('i-fe-sal');

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
            }).catch(err=>{
              console.log(err)
            })
    }

    asignarDatosSalud(datosSalud){
      $inpSalDep.value=datosSalud.departamento;
      $inpSalMun.value=datosSalud.municipio;
      $inpSalArea.value=datosSalud.arsal;
      $inpSalSer.value=datosSalud.sersal;
      $inpSalDis.value=datosSalud.dissal;
      $inpSalDir.value=datosSalud.dirsal;
      $labSalFecha.innerHTML=`Utlima actualizacion: ${datosSalud.fecha}`;
    }

    actulizarDatosSalud(datosSalud){
        servInstitucion.hacerPeticion('/datoscentrosalud',datosSalud,'PUT').then(r=>{
            console.log(r.body.msg);
            this.notificar(r.body.msg)
          }).catch(err=>{
            console.log(err)
          })
    }
    notificar(msg){
        alert(msg)
    }
}

export default UiInstitucion;