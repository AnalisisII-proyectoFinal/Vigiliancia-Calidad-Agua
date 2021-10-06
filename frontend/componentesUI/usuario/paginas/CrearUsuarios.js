//import pticiones 
import{validarInput}from '../../utilidades/ValidarFormulario.js'
export function CrearUsuarios(){
    const $crearusuarios = document.createElement('div');
        $crearusuarios.classList.add("pagina");
        $crearusuarios.setAttribute('id',"pg2");
        $crearusuarios.setAttribute('style',"display:none;")
        $crearusuarios.innerHTML=`
        <section class="contenedor-usuario">
    <div class="datos-Usuario">
     <center><h2>Crear Usuario</h2></center>
      <h4><span>Datos personales creados el: 23/05/2020 09:00</span></h4>
      <hr>
    </div>
    <div class="datos-informe-salud">
    <form action="" class"datos-usuario">
    <p><label for="" class="input-label">Primer Apellido:</label>
      <input type="text" class="input  -dato" name "nombre"id="p-apellido" placeholder="Escribir primer apellido" required=""/></p>
    <p><label for="" class="input-label">Segundo Apellido:</label>
      <input type="text" class="input-dato" name "nombre" id="s-apellido" placeholder="Escribir Segundo apellido" required=""/></p>
    <p><label for="" class="input-label">Primer Nombre:</label>
      <input type="text" class="input-dato" name "nombre" id="p-nombre" placeholder="Escribir Primer Nombre" required=""/></p>
    <p><label for="" class="input-label">Segundo Nombre:</label>
      <input type="text" class="input-dato" name "nombre" id="s-nombre" placeholder="Escribir Segundo Nombre" required=""/></p>
      <p><label for="" class="input-label">Fecha de Nacimiento:</label>
      <input type="date" class="input-dato" name "fecha" id="f-nacimiento" placeholder="Full name" required=""/></p>
      <p><label for="" class="input-label">DPI:</label>
      <input type="text" class="input-dato" name "dpi" id="dpi" placeholder="Digite 13 números" required=""/></p>
      <p><label for="" class="input-label"> Género:</label>
      <input type="text" class="input-dato" name "nombre" id="genero" placeholder="Fémenino o Másculino" required=""/></p>
      <p><label for="" class="input-label">Tel/Celular:</label>
      <input type="text" class="input-dato" name "telefono" id="n-telefono" placeholder="Digite 8 números" required=""/></p>
      <p><label for="" class="input-label">Correo Electrónico:</label>
      <input type="text" class="input-dato" name "correo" id="correo" placeholder="Ejemplo@gmail.com" required=""/></p>
      <p><label for="" class="input-label">Dirección/Residencia:</label>
      <input type="text" class="input-dato" name "descripcion" id="direccion" placeholder="Ejem: San José Chacayá" required=""/></p>
      <p><label for="" class="input-label">Zona/Avenida:</label>
      <input type="text" class="input-dato" name "numero" id="zona" placeholder="Calle, 000" required=""/></p>
      <p><label class="input-label" for="">Cargo: </label>
                    <select class="input-opciones" id="">
                            <option value="Opcion 1">Usuario 1</option>
                            <option value="Opcion 2">Usuario 2</option>
                            <option value="Opcion 3">Usuario 3</option>
                            <option value="Opcion 4">Usuario 4</option>
                            <option value="Opcion 5">Usuario 5</option>
                            </p>
<select class="input-opciones" id="">
  </form>
  <br>
  <div class="botones-usuario">
    <center><p><button class="tercer-btn">Resetear</button></p></center>
    <center><p><button class="primer-btn">Guardar</button></p></center>
  </div>
</div> 
</section>
        `;
        function iniCrearUsuarios(){
          const form = document.querySelector ('.datos-usuario');
          form.addEventListener('keydown',(e)=>{
            let tipo = e.target.name;
            let id = e.target.id;
            let valor = e.target.value;
            validarInput(tipo,id,valor);
          })
        }
        setTimeout(()=>iniCrearUsuarios(),100);
        return $crearusuarios;
}