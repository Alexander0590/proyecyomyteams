// Obtener todos los enlaces
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', function() {
    // Eliminar la clase 'active' de todos los enlaces
    links.forEach(link => link.classList.remove('active'));
    // Añadir la clase 'active' al enlace que fue clickeado
    this.classList.add('active');
  });
});

//modal interracion
  document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('login-tab-modal');
    const registerTab = document.getElementById('register-tab-modal');
    const loginForm = document.getElementById('login-form-modal');
    const registerForm = document.getElementById('register-form-modal');

    // Cuando el usuario hace clic en la pestaña de Login
    loginTab.addEventListener('click', function() {
      // Cambiar la clase activa de las pestañas
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      // Mostrar el formulario de login
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
    });
    // Cuando el usuario hace clic en la pestaña de Registro
    registerTab.addEventListener('click', function() {
      // Cambiar la clase activa de las pestañas
      registerTab.classList.add('active');
      loginTab.classList.remove('active');
      // Mostrar el formulario de registro
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  });

