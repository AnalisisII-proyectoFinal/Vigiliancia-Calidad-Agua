export function EditarNuevoHilo() {
    const $editarnuevohilo = document.createElement('div');
    $editarnuevohilo.classList.add('editar-nuevohilo');
    $editarnuevohilo.innerHTML=`
    <h2>Editar nuevo hilo</h2>
    <hr> 
    <form action="" class="form-hilo">
        <p><label for="" class="input-label">Fecha de inicio:</label>
            <input type="date" class="input-dato" name="fecha" id="n-inico" placeholder="" required=""/></p>
        <p><label for="" class="input-label">Fecha de finalizacón:</label>
            <input type="date" class="input-dato" name="fecha" id="n-final" placeholder="" required=""/></p>
        <p>
            <label class="input-label" for="">Responsables</label>
            <select class="input-opciones" id="">
                    <option value="Opcion 1">Opcion 1</option>
                    <option value="Opcion 2">Opcion 2</option>
                    <option value="Opcion 3">Opcion 3</option>
                    <option value="Opcion 4">Opcion 4</option>
                    <option value="Opcion 5">Opcion 5</option>
            </select>
        </p>
        <button class="primer-btn">Guardar</button>
    </form>
</div>
    `;
    return $editarnuevohilo;
}