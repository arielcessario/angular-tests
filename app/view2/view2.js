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


View2Ctrl.$inject = ['ProductService'];
function View2Ctrl(ProductService) {


    var vm = this;
    vm.producto = {nombre: '', descripcion: '', pto_repo: 0, en_slider: '0', producto_tipo: '0'};

    ProductService.get(function (data) {
        console.log(data);
    });

    vm.createProducto = function () {

        ProductService.create(vm.producto, function(data){
            console.log(data);
        });
    }

}