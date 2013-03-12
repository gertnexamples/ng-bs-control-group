'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /form when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/form");
  });


  describe('form', function() {

    beforeEach(function() {
      browser().navigateTo('#/form');
    });


    it('should bind models of directives', function() {
        expect(element('#signedIn ul li:first').text()).toEqual('');
        expect(element('#signedIn ul li:eq(1)').text()).toEqual('');

        input('user.username').enter("123456");
        input('$parent.user.password').enter("12345678");

        element("#save").click();

        expect(element('#signedIn ul li:first').text()).toEqual('123456');
        expect(element('#signedIn ul li:eq(1)').text()).toEqual('12345678');
    });

  });


});
