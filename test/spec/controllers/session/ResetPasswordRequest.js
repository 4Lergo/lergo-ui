'use strict';

describe('Controller: SessionResetPasswordRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('lergoApp'));

  var SessionResetPasswordRequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionResetPasswordRequestCtrl = $controller('SessionResetPasswordRequestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});