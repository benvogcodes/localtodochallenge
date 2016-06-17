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
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
