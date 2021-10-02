export function VerDetalles() {
    const $verdetalles = document.createElement('div');
    $verdetalles.classList.add('ver-detalles');
    $verdetalles.innerHTML=` 
    <section class="contenedor-Usuarios">
    <div class="datos-Usuario">
     <center><h2>Detalle Usuario</h2></center>
      <h4><span>Datos personales</span></h4>
      <hr>
    </div>
    <div class="datos-informe-usuario">
    <form action="" class="form-detalles">
    <table id="tabla-usuarios">
              <thead>
              <th>Id</th>
              <th>Nombre Empleado</th>
              <th>DPI</th>
              <th>Fech. Nacimiento</th>
              <th>Genero</th>
              <th>Dirección</th>
              <th>Cargo</th>
              <th>Tel/celular</th>
              <th>Correo Electrónico</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tfoot>
          </tfoot>
          <tbody>
            <tr>
              <td>1</td>
              <td>Luis Gálvez</td>
              <td>29119750507</td>
              <td>15/03/1993</td>
              <td>Másculino</td>
              <td>Sololá</td>
              <td>Director de Agua</td>
              <td>44637872</td>
              <td>e-mail@test-email.com</td>
              <td>Activo</td>
          </tbody>
      </table>
      </div>          
</section>
<br>
<hr>
    `;
    
    return $verdetalles;
}