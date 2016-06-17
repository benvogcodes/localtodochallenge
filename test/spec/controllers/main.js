'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('localtodochallengeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list if unique', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should not add items to the list if an empty string', function () {
    scope.todo = '';
    scope.addTodo();
    expect(scope.todos.length).toBe(0);
  });


  // it('should not add items to the list if not unique', function () {
  //   scope.todo = 'Test 1';
  //   scope.addTodo();
  //   scope.todo = 'Test 1';
  //   scope.addTodo();
  //   expect(scope.todos.length).toBe(1);
  // });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
