'use strict';

// Declare app level module which depends on views, and components
angular.module('Project', [
  'ngRoute',
  'Project.home',
   'Project.Register'
    
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

 // $routeProvider.otherwise({redirectTo: '/home'});
}]);
