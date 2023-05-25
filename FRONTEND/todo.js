angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
});


// Controlador AngularJS
app.controller('LoginController', ['$http', function($http) {
    var vm = this;
  
    // Datos de inicio de sesión
    vm.credentials = {
      username: '',
      password: ''
    };
  
    // Función para enviar la solicitud de inicio de sesión
    vm.login = function() {
      $http.post('/api/login', vm.credentials)
        .then(function(response) {
          // Obtener el token de la respuesta
          var token = response.data.token;
          
          // Almacenar el token en el almacenamiento local (por ejemplo, en una cookie)
          localStorage.setItem('jwtToken', token);
  
          // Realizar otras acciones después de obtener el token
          // ...
        })
        .catch(function(error) {
          // Manejar errores de inicio de sesión
          console.log('Error de inicio de sesión:', error);
        });
    };
  }]);