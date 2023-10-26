document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginInput = document.getElementById('login');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById("submitButton");
    loginForm.addEventListener('submit', function(event) {
      let isValid = true;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
      // Check if the login (E-mail немесе Логин) field is empty
      if (loginInput.value.trim() === "") {
        document.getElementById("auth-email").innerHTML = "Email енгізілуі керек";
        isValid = false;
      } else if (!emailRegex.test(loginInput.value)) {
        // Check if the login is not a valid email
        document.getElementById("auth-email").innerHTML =
          "Email болуы керек";
        isValid = false;
      }
  
      // Check if the password (Құпиясөз) field is empty
      if (passwordInput.value.trim() === '') {
        document.getElementById('auth-password').innerHTML = 'Құпиясөз керек'
        isValid = false;
      } else if (passwordInput.value.trim().length < 8) {
        document.getElementById("auth-password-len").innerHTML = "Құпиясөз әлсіз! (кем дегенде 8 символдан тұруы қажет)";
        isValid = false;
      }
        if (!isValid) {
          // Prevent form submission if validation fails
          submitButton.style.backgroundColor = "red"; 
          event.preventDefault();
        }
    });
  });
  