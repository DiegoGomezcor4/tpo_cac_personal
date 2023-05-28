function validateForm() {
    // Obtenemos los valores ingresados por el usuario
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Validamos que el campo de nombre no esté vacío
    if (firstName == "") {
      alert("Por favor ingrese su Nombre");
      return false;
    }
  
    // Validamos que el campo de nombre no contenga números
    var nameRegex = /^[^\d]+$/;
    if (!nameRegex.test(firstName)) {
      alert("El campo Nombre no debe contener números");
      return false;
    }
  
    // Validamos que el campo de apellido no esté vacío
    if (lastName == "") {
      alert("Por favor ingrese su Apellido");
      return false;
    }
  
    // Validamos que el campo de apellido no contenga números
    if (!nameRegex.test(lastName)) {
      alert("El campo Apellido no debe contener números");
      return false;
    }
  
    // Validamos que el campo de correo electrónico tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese una dirección de correo electrónico válida");
      return false;
    }
  
    // Validamos que en el campo teléfono se ingresen solo valores numéricos
    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Por favor ingrese solo números en el campo Teléfono");
      return false;
    }
  
    // Validamos que el campo de teléfono tenga al menos 7 dígitos
    if (phone.length < 7) {
      alert("Por favor ingrese un número de Teléfono válido");
      return false;
    }
  
    // Validamos que el campo de mensaje no esté vacío
    if (message == "") {
      alert("Por favor ingrese un Mensaje");
      return false;
    }
  
    // Validamos que el campo de mensaje no tenga más de 200 caracteres
    if (message.length > 200) {
      alert("El campo Mensaje no debe tener más de 200 caracteres");
      return false;
    }
  
    // Esperar 2 segundos (2000 milisegundos)
    setTimeout(borrarCampos, 2000);
    
    // Si todos los campos son válidos, retornamos true para enviar el formulario
    return true;
  }
  
  function borrarCampos() {
     // Borrar los valores de los campos
     document.getElementById("fname").value = "";
     document.getElementById("lname").value = "";
     document.getElementById("email").value = "";
     document.getElementById("phone").value = "";
     document.getElementById("message").value = "";
  }