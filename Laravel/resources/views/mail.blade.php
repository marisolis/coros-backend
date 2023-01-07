<!DOCTYPE html>
<html lang="en">
<body>
<div class="container mt-3">
  <h2 style="color: black;">Nuevo Contrato Recibido</h2>
  <p style="color: black;">La siguiente informacion pertenece a un cliente, favor de no compartirla.</p>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="comment" style="font-weight: 700;color: black;">Nombre del usuario:</label>
      <label for="comment" style="color: black;">   {{ $nombre_cliente }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Correo del usuario:</label>
      <label for="comment" style="color: black;">   {{ $correo_cliente }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Numero de teléfono:</label>
      <label for="comment" style="color: black;">   {{ $numero_telefono }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Paquete requerido:</label>
      <label for="comment" style="color: black;">    {{ $nombre_paquete }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Tipo de evento:</label>
      <label for="comment" style="color: black;">    {{ $Tipo_evento }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Ubicacion del evento:</label>
      <label for="comment" style="color: black;">    {{ $Lugar }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Fecha:</label>
      <label for="comment" style="color: black;">    {{ $Fecha }}</label>
      <br>
      <label for="comment" style="font-weight: 700;color: black;">Hora:</label>
      <label for="comment" style="color: black;">    {{ $Hora }}</label>
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Ir al contrato</button>
  </form>
</div>

</body>
</html>
