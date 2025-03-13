function actualizarColoresOK() {
  const nuevoColor = document.getElementById("color").value;
  const mensajesOK = document.querySelectorAll('[id^="err"]');

  mensajesOK.forEach((mensaje) => {
    if (mensaje.innerHTML === "OK") {
      mensaje.style.color = nuevoColor;
    }
  });
}
// Validación de nombre
function comprueba_nombre() {
  const nombre = document.getElementById("nombre").value;
  const salida = document.getElementById("errnombre");
  const colorValido = document.getElementById("color").value;

  if (!/^[A-Z][a-z]{3,20}(\s[A-Za-z]{3,20})*$/.test(nombre)) {
    salida.style.color = "red";
    salida.innerHTML = "Nombre incorrecto (ej: Juan Pérez)";
  } else {
    salida.style.color = document.getElementById("color").value;
    salida.innerHTML = "OK";
  }
  botonDisabled();
}

// Validación de apellido
function comprueba_apellido() {
  const apellido = document.getElementById("apellido").value;
  const salida = document.getElementById("errapellido");
  const colorValido = document.getElementById("color").value;

  if (!/^[A-Z][a-z]{3,20}(\s[A-Za-z]{3,20})*$/.test(apellido)) {
    salida.style.color = "red";
    salida.innerHTML = "Apellido incorrecto (ej: García)";
  } else {
    salida.style.color = document.getElementById("color").value;
    salida.innerHTML = "OK";
  }
  botonDisabled();
}

// Validación de correo
function comprueba_correo() {
  const correo = document.getElementById("correo").value;
  const salida = document.getElementById("errcorreo");
  const colorValido = document.getElementById("color").value;

  if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/.test(correo)) {
    salida.style.color = "red";
    salida.innerHTML = "Correo inválido (ej: usuario@dominio.com)";
  } else {
    salida.style.color = document.getElementById("color").value;
    salida.innerHTML = "OK";
  }
  botonDisabled();
}

// Validación de contraseña
function comprueba_password() {
  var password = document.getElementById("password").value;
  var salida = document.getElementById("errpassword");
  var colorValido = document.getElementById("color").value;
  if (password.length == 0 || password == null || /^\s+$/.test(password)) {
    salida.innerHTML = "Has de rellenar la contraseña ";
    salida.style.display = "inline";
    salida.style.color = "red";
  } else if (/^[a-zA-Z0-9]{3,20}$/.test(password)) {
    salida.innerHTML = "OK";
    salida.style.color = colorValido;
  } else {
    salida.innerHTML =
      "Contraseña incorrecta, solo numeros y letras minimo 3 y maximo 20, ejemplo inves";
    salida.style.display = "inline";
    salida.style.color = "red";
  }
}
function validarFoto() {
  const adjunto = document.getElementById("adjunto");
  const salida = document.getElementById("errfoto");
  const colorValido = document.getElementById("color").value;

  if (adjunto.files.length === 0) {
    salida.style.color = "red";
    salida.innerHTML = "Debe subir una foto de carnet";
    return false;
  } else {
    salida.style.color = colorValido;
    salida.innerHTML = "OK";
    return true;
  }
}
// Validación de puestos
function comprobar_puestos() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name^="puesto"]'
  );
  let cont = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) cont++;
  });
  const salida = document.getElementById("errpuestos");
  const colorValido = document.getElementById("color").value;

  if (cont < 2) {
    salida.style.color = "red";
    salida.innerHTML = "Seleccione al menos 2 puestos";
    return false;
  } else {
    salida.style.color = document.getElementById("color").value;
    salida.innerHTML = "OK";
    return true;
  }
}

// Control del botón de envío
function botonDisabled() {
  const validaciones = [
    document.getElementById("errnombre").innerHTML === "OK",
    document.getElementById("errapellido").innerHTML === "OK",
    document.getElementById("errcorreo").innerHTML === "OK",
    document.getElementById("errpassword").innerHTML === "OK",
    document.getElementById("errpuestos").innerHTML === "OK",
  ];
  document.getElementById("btnEnviar").disabled = !validaciones.every((v) => v);
}

// Limitar caracteres en textarea
function limita2(maximo) {
  const elemento = document.getElementById("descripcion");
  const restantes = maximo - elemento.value.length;
  document.getElementById(
    "spancaracteres"
  ).innerHTML = `Quedan ${restantes} caracteres`;
  return elemento.value.length < maximo;
}
// Nueva función para validar el sexo
function comprueba_sexo() {
  const opciones = document.querySelectorAll('input[name="sexo"]');
  let seleccionado = false;
  opciones.forEach((opcion) => {
    if (opcion.checked) seleccionado = true;
  });
  const salida = document.getElementById("errsexo");
  const colorValido = document.getElementById("color").value;

  if (!seleccionado) {
    salida.style.color = "red";
    salida.innerHTML = "Debe seleccionar una opción";
  } else {
    salida.style.color = colorValido;
    salida.innerHTML = "OK";
  }
  botonDisabled(); // Actualiza el estado del botón
}
// Restringir caracteres permitidos
function permitir(evento, tipo) {
  const teclasPermitidas = {
    car: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ",
    num: "0123456789",
  };
  const key = evento.key;
  return teclasPermitidas[tipo].includes(key);
}
