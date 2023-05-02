function validateForm() {
  // Obtenemos los valores ingresados por el usuario
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Validamos que el campo de nombre no esté vacío
  if (firstName == "") {
    alert("Por favor ingrese su nombre");
    return false;
  }

  // Validamos que el campo de apellido no esté vacío
  if (lastName == "") {
    alert("Por favor ingrese su apellido");
    return false;
  }

  // Validamos que el campo de correo electrónico tenga un formato válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida");
    return false;
  }

  //validamos que en el campo telefono se ingresen solo valores numericos
  var phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    alert("Por favor ingrese solo números en el campo de teléfono.");
    return false;
  }

  // Validamos que el campo de teléfono tenga al menos 7 dígitos
  if (phone.length < 7) {
    alert("Por favor ingrese un número de teléfono válido");
    return false;
  }

  // Validamos que el campo de mensaje no esté vacío
  if (message == "") {
    alert("Por favor ingrese un mensaje");
    return false;
  }

  // Si todos los campos son válidos, retornamos true para enviar el formulario
  return true;
}

