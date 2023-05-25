// Módulo de la aplicación AngularJS
var app = angular.module('myApp', []);

// Controlador AngularJS
app.controller('LoginController', ['$scope', function($scope) {
  var vm = this;

  // Datos de inicio de sesión
  vm.credentials = {
    username: '',
    password: ''
  };

  // Flag para mostrar/ocultar la contraseña
  vm.showPassword = false;

  // Función para mostrar u ocultar la contraseña
  vm.togglePassword = function() {
    vm.showPassword = !vm.showPassword;
  };

  // Función para realizar la verificación de inicio de sesión
  vm.login = function() {
    // Comparación con el JSON de usuarios
    var users = [
      { username: 'usuario1', password: 'contrasena1' },
      { username: 'usuario2', password: 'contrasena2' },
      { username: 'usuario3', password: 'contrasena3' }
    ];

    var foundUser = users.find(function(user) {
      return user.username === vm.credentials.username && user.password === vm.credentials.password;
    });

    if (foundUser) {
      // Usuario y contraseña correctos
      alert('Inicio de sesión exitoso');
      // Realizar acciones adicionales, como redireccionar a otra página
    } else {
      // Usuario o contraseña incorrectos
      vm.loginError = 'Usuario o contraseña incorrectos';
    }
  };
}]);