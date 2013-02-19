'use strict';

/* jasmine specs for directives go here */

describe('directives', function () {
    beforeEach(module('myApp.directives'));

    describe('controlGroup directive', function () {
        var elm, labels = {};
        labels.username = 'Username';
        beforeEach(module('templates/control-group.html'));
        beforeEach(inject(function ($rootScope, $compile) {
            $rootScope.labels = labels;
            elm = angular.element(
                '<control-group for-attr="username" label="labels.username">' +
                    '<span>span1</span>' +
                    '<span>span2</span>' +
                '</control-group>');
            $compile(elm)($rootScope);
            $rootScope.$digest();

        }));

        it('should create correct label', function () {
            var label = elm.find('label');
            expect(label.text()).toEqual(labels.username);

        });
    });
});
