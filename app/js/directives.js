'use strict';

var directives = angular.module('myApp.directives', []);

directives.directive('controlGroup', function () {
    var controlGroup = {
        restrict:'E',
        replace:true,
        transclude:true,
        templateUrl:'templates/control-group.html',
        scope:{
            forAttr:'@',
            label:'='
        },
        link:function (scope, element, attr) {
        }

    };
    return controlGroup;
});

directives.directive('bsControlGroup', function ($compile) {
    var tplControlGroup = $compile('<div class="control-group"></div>'),
        tplControls = $compile('<div class="controls"></div>'),
        tplLabel = $compile('<label class="control-label" for="{{name}}" ng-bind="label">{{label}}</label>'),
        tplHelp = $compile('<span class="help-inline" ng-show="showHelp">{{helpLabel}}</span>');

    var controlGroup = {
        restrict:'A',
        scope:{
            name:'@',
            label:'=',
            helpLabel:'=',
            ngModel:'=',
            showHelp:'='
        },
        link:function (scope, element, attr) {
            var controlGroupEl = tplControlGroup(scope),
                controlsEl = tplControls(scope),
                labelEl = tplLabel(scope),
                helpEL = tplHelp(scope);


            var elm = element.wrap(controlGroupEl);
            element.wrap(controlsEl);
            element.after(helpEL);
            element.parents('.control-group').prepend(labelEl);
        }

    };
    return controlGroup;
});

