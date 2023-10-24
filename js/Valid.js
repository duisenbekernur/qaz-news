document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
  
    loginForm.addEventListener('submit', function(event) {
      let isValid = true;
  
      // Check if the login (E-mail немесе Логин) field is empty
      if (loginInput.value.trim() === '') {
        document.getElementById('auth-email').style.visibility = 'visible'
        isValid = false;
      }
  
      // Check if the password (Құпиясөз) field is empty
      if (passwordInput.value.trim() === '') {
        document.getElementById('auth-password').style.visibility = 'visible'
        isValid = false;
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  