(function () {
    'use strict';

    angular.module('LangTables', ['ngRoute'])
        .service('initialXlatTables', initialXlatTables);
    function initialXlatTables(){
        return {
            es:{
                ERROR_REQUIRED: 'El campo es requerido.'
            }
        }
    }
})();