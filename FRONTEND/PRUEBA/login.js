// Módulo de la aplicación AngularJS
var app = angular.module('myApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './login.html',
      controller: 'LoginController'
    })
    .when('/inicio', {
      templateUrl: './inicio.html',
      controller: 'InicioController'
    })
    .otherwise({
      redirectTo: '/login'
    });
});

// Controlador AngularJS
app.controller('LoginController', ['$scope', '$http', function($scope, $http) {
  var vm = this;

  // Datos de inicio de sesión
  vm.credentials = {
    username: $scope.username,
    password: $scope.password
  };

  // Flag para mostrar/ocultar la contraseña
  vm.showPassword = false;

  // Función para mostrar u ocultar la contraseña
  vm.togglePassword = function() {
    vm.showPassword = !vm.showPassword;
  };

  // Función para realizar la solicitud POST de inicio de sesión
  vm.login = function() {
    $http.post('http://localhost:3000/login/user', vm.credentials)
      .then(function(response) {
        // Realizar acciones después de iniciar sesión exitosamente
        //alert("Logeado");
        console.log(response);
        if(response.data.success){
          /*const jwt = require('jsonwebtoken');

          // Datos del usuario
          const usuario = response.data;

          // Clave secreta para firmar el token (debe mantenerse segura)
          const claveSecreta = 'clave-secreta-del-servidor';

          // Opciones y configuraciones del JWT
          const opciones = {
            expiresIn: '1h', // Fecha de expiración de 1 hora
            algorithm: 'HS256', // Algoritmo de firma
          };

          // Generar el JWT
          const token = jwt.sign(usuario, claveSecreta, opciones);

          // Almacenar el token en el almacenamiento local (por ejemplo, en una cookie)
          localStorage.setItem('weatherAPP', token);*/

          alert("Logeado");
        }else{
          
        }
    
      })
      .catch(function(error) {
        // Manejar errores de inicio de sesión
        console.log('Error de inicio de sesión:', error.status, error.statusText);
        vm.loginError = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
      });
  };
}]);


app.controller('MainPage', [])