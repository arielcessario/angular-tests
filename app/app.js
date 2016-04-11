(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('app', [
        "oc.lazyLoad",
        'ngRoute',
        'ngAnimate',
        'angular-storage',
        'angular-jwt',
        'auth0',
        'acUtils',
        'acUsuarios',
        'acAutocomplete',
        'LangTables'
    ]).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }])
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$http', 'UserService'];
    function AppCtrl($http, UserService) {
        var vm = this;
        vm.usuario1 = {};
        vm.usuario2 = {};

        vm.searchUsuario = searchUsuario;

        function searchUsuario(callback) {
            UserService.get().then(callback);
        }
    }

})();
