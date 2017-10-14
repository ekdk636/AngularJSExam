'use strict';

describe('Controller: WithdrawCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var WithdrawCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WithdrawCtrl = $controller('WithdrawCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WithdrawCtrl.awesomeThings.length).toBe(3);
  });
});
