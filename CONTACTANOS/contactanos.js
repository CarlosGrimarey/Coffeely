
// Buscamos el formulario por su ID ("pedidoForm") y añadimos un "listener"
// que detecta cuando el usuario lo envía (submit)
document.getElementById("pedidoForm").addEventListener("submit", function(e){

  // Guardamos en variables lo que escribe el usuario en cada campo del formulario.
  // "value" es el texto ingresado por el usuario.
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const pedido = document.getElementById("pedido").value;


  // Armamos el mensaje en formato texto que se enviará por WhatsApp.
  // %0A significa "salto de línea" en URLs (para que se vea ordenado).
  const mensaje = `Nombre: ${nombre}%0ACorreo: ${correo}%0ADirección: ${direccion}%0APedido: ${pedido}`;


  // Número de WhatsApp al que se enviará el mensaje.
  const numero = "51973996742";


  // Usamos window.open para abrir WhatsApp Web (o la app en el celular)
  // con el número y el mensaje ya escritos.
  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
});
