'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            data: {requiresLogin: false}
        });
    }])

    .controller('View2Ctrl', View2Ctrl);


View2Ctrl.$inject = ['ProductService', 'CartService'];
function View2Ctrl(ProductService, CartService) {


    var vm = this;
    vm.productos = [];
    vm.producto = {nombre: '', descripcion: '', pto_repo: 0, en_slider: '0', producto_tipo: '0'};

    vm.carrito = {};



    CartService.getByParams('status', 0, -1, function (data) {
        console.log(data);
    });


    vm.addToCart = function () {
        CartService.addToCart();
    };

    ProductService.get(function (data) {
        console.log(data);
    });

    vm.createProducto = function () {

        ProductService.create(vm.producto, function (data) {
            vm.productos = data;
        });
    }

}