(function() {

  var app = angular.module('main', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  app.controller('CardController', function(){
    this.projects = projects;

  });
/*
  app.directive('cardTemplate', function(){
    return {
      restrict: 'E',
      templateUrl: 'card-template.html'
      };
  });
*/
})();

