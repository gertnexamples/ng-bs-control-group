'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/form', {templateUrl:'partials/form.html'});
    $routeProvider.otherwise({redirectTo:'/form'});
}]);
