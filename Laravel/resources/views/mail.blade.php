<!DOCTYPE html>
<html lang="en">
<body>
<div class="container mt-3">
  <h2>Nuevo Contrato Recibido</h2>
  <p>La siguiente informacion pertenece a un cliente, favor de no compartirla.</p>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="comment">Nombre del Usuario</label>
      <label for="comment">   {{ $nombre_cliente }}</label>
      <br>
      <label for="comment">Correo del Usuario</label>
      <label for="comment">   {{ $correo_cliente }}</label>
      <br>
      <label for="comment">Paquete Requerido</label>
      <label for="comment">    {{ $nombre_paquete }}</label>
      <br>
      <label for="comment">Tipo de evento</label>
      <label for="comment">    {{ $Tipo_evento }}</label>
      <br>
      <label for="comment">Ubicacion del evento</label>
      <label for="comment">    {{ $Lugar }}</label>
      <br>
      <label for="comment">Fecha</label>
      <label for="comment">    {{ $Fecha }}</label>
      <br>
      <label for="comment">Hora</label>
      <label for="comment">    {{ $Hora }}</label>
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Ir al contrato</button>
  </form>
</div>

</body>
</html>
