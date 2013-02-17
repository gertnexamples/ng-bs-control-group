'use strict';

var directives = angular.module('myApp.directives', []);

directives.directive('controlGroup', function () {
    var controlGroup = {
        restrict:'E',
        replace:true,
        transclude:true,
        templateUrl:'controlGroup.html',
        scope:{
            forAttr:'@',
            label:'=',
            valid:'='
        },
        link:function (scope, element, attr) {
        }

    };
    return controlGroup;
});

