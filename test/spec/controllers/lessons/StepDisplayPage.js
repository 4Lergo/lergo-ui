'use strict';

describe('Controller: LessonsStepDisplayPageCtrl', function () {

  // load the controller's module
  beforeEach(module('lergoApp'));

  var LessonsStepDisplayPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LessonsStepDisplayPageCtrl = $controller('LessonsStepDisplayPageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
