'use strict';

/* jasmine specs for directives go here */

describe('directives', function () {
    beforeEach(module('myApp.directives'));

    describe('controlGroup directive', function () {
        var elm, labels = {};
        labels.username = 'Username';
        //load templates
        beforeEach(module('templates/control-group.html'));
        beforeEach(inject(function ($rootScope, $compile) {
            $rootScope.labels = labels;
            elm = angular.element(
                '<div>' +
                    '<control-group for-attr="username" label="labels.username">' +
                    '<span>span1</span>' +
                    '<span>span2</span>' +
                    '</control-group>' +
                '</div>');
            $compile(elm)($rootScope);
            $rootScope.$digest();

        }));

        it('should create correct label inside control-group', function () {
            var label = elm.find('div.control-group > label');
            expect(label.text()).toEqual(labels.username);
            expect(label.attr('for')).toEqual('username');

        });

        it('should transclude elements inside controls div', function () {
            var spans = elm.find('div.controls > span');

            expect(spans).not.toBe(null);

            expect(angular.element(spans.get(0)).text()).toEqual('span1');
            expect(angular.element(spans.get(1)).text()).toEqual('span2');

        });
    });
    describe('bsControlGroup directive', function () {
        var elm, scope, labels = {}, user = {};
        labels.username = 'Username';
        labels.error_username = 'Error text username' ;
        user.username = 'myUsername'

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            scope.labels = labels;
            scope.help = true;
            scope.user = user;
            elm = angular.element(
                '<div>' +
                    '<input type="text" name="username" id="username" ' +
                    'ng-model="$parent.user.username" required ng-minlength="8" ng-maxlength="12" ' +
                    'help-label="labels.error_username" bs-control-group ' +
                    'label="labels.username" ' +
                    'show-help="help">' +
                '</div>');
            $compile(elm)(scope);
            $rootScope.$digest();

        }));

        it('should create correct label inside control-group', inject(function ($rootScope) {
            var label = elm.find('div.control-group > label');
            expect(label.text()).toEqual(labels.username);
            expect(label.attr('for')).toEqual('username');

        }));

        it('should create correct input inside controls', inject(function ($rootScope) {
            var input = elm.find('div.controls > *').first();
            expect(input.attr('id')).toEqual('username');
            expect(input.attr('name')).toEqual('username');
            expect(input.attr('ng-model')).toEqual('$parent.user.username');

            expect(input.val()).toEqual(user.username);

        }));

        describe('help span', function () {
            var help;
            beforeEach(inject(function ($rootScope, $compile) {
                help = elm.find('div.controls > span');
            }));
            it('should hide when false', inject(function ($rootScope) {
                $rootScope.$apply(function(){
                    scope.help = false;
                });

                expect(help.css('display')).toEqual('none');
            }));

            it('should show when true', inject(function ($rootScope) {
                $rootScope.$apply(function(){
                    scope.help = true;
                });

                expect(help.css('display')).toEqual('');
                expect(help.attr('class')).toContain('help-inline');
                expect(help.text()).toEqual(labels.error_username);

            }));
        });

    });
});
