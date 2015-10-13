'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'angular-storage',
    'angular-jwt',
    'acUsuarios',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .controller('AppController', AppController);


AppController.$inject = ['UserService', 'UserVars'];
function AppController(UserService, UserVars) {

    var vm = this;
    vm.usuarios = [];
    vm.start = 0;
    vm.pagina = UserVars.pagina;
    vm.filtro = '';
    UserVars.paginacion = 3;
    UserVars.loginPath = '/login';
    vm.end = UserVars.paginacion;

    UserService.get(function (data) {
        vm.usuarios = data;
    });

    vm.usuario = {
        mail: ''
    };
    vm.usuarioFull = {
        'nombre': '',
        'apellido': '',
        'mail': '',
        'nacionalidad_id': 0,
        'tipo_doc': 0,
        'nro_doc': '',
        'comentarios': '',
        'marcado': '',
        'telefono': '',
        'fecha_nacimiento': '',
        'profesion_id': 0,
        'saldo': '',
        'rol_id': 0,
        'news_letter': 0,
        'password': ''
    };
    vm.usuarioLogin = {
        'mail': '',
        'password': ''
    };


    vm.login = function () {
        UserService.login(vm.usuarioLogin.mail, vm.usuarioLogin.password, 0, function (data) {
            console.log(data);
            UserService.get(function (data) {
                vm.usuarios = data;
            });
        });
    };

    vm.logout = function () {
        UserService.logout(function (data) {
            console.log(data);
        });
    };

    vm.create = function () {
        UserService.create(vm.usuarioFull, function (data) {
            console.log(data);
        });
    };

    vm.resetPwd = function() {
        UserService.forgotPassword(vm.usuario.mail, function (data) {
            console.log(data);
        });
    }

    vm.next = function () {
        vm.start = UserService.next().start;
        vm.pagina = UserVars.pagina;
    };

    vm.prev = function () {
        vm.start= UserService.prev().start;
        vm.pagina = UserVars.pagina;
    };

    vm.goToPagina = function () {
        vm.start= UserService.goToPagina(vm.pagina).start;
    };

    vm.filtrar = function(){
        UserService.getByParams('nombre', vm.filtro, true, function(data){
            console.log(data);
        })
    }
}