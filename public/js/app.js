'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/landing'
      }).
      when('/register', {
        templateUrl: 'partials/register'
      }).
      when('/login', {
        templateUrl: 'partials/login'
      }).
      when('/discover', {
        templateUrl: 'partials/blogs',
        controller: IndexCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/storyline',
        controller: AddPostCtrl
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard'
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/blog',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editstoryline',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/delblog',
        controller: DeletePostCtrl
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);