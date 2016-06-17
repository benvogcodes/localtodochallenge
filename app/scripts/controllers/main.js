'use strict';

/**
 * @ngdoc function
 * @name localtodochallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localtodochallengeApp
 */
angular.module('localtodochallengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
