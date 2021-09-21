export function EditarPublicacion() {
    const $editarpublicacion = document.createElement('div');
    $editarpublicacion.classList.add('editar-publicacion');
    $editarpublicacion.innerHTML=` 
    <h3>Editar Publicacion</h3>
    <hr>
    <form action="">
      <p><label for="" class="input-label">Titulo:</label>
        <input type="text" class="input-dato" id="" placeholder="Nombre institución" required=""/></p>
        <p><label for="" class="input-label">Fecha:</label>
          <input type="date" class="input-dato" id="" placeholder="Full name" required=""/></p>
      <p class="contenedor-archivo">
          <label for="">Imagen:</label>
          <label class="input-archivo"> 
          <input type="file" id="file" aria-label="archivo">
          <span class="input-archivo-personalizado"></span></label></p>
    </form>
    <div>
      <p><label for="" class="input-label">Descripción:</label>
      <textarea name="" id="" cols="50" rows="5" placeholder="Descripcion del la publicacion"></textarea></p>
    </div>
    <div class="botones-institucion">
      <p><button class="primer-btn">Actualizar</button></p> 
    </div>
    `;
    return $editarpublicacion;
}