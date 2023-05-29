// Módulo de la aplicación AngularJS
var app = angular.module('myApp', [/*'ngRoute'*/]);
/*.config(function($routeProvider) {
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
});*/



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
          //console.log(response.data.jwt);
          localStorage.setItem('weatherAPP', response.data.jwt);
          
          //alert("Logeado");
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