'use strict';

/**
 * @ngdoc overview
 * @name openWeatherDemoApp
 * @description
 * # openWeatherDemoApp
 *
 * Main module of the application.
 */
angular
  .module('openWeatherDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .filter('kelvinToCelsius', function() {
    return function(kelvin) {
      return parseFloat(kelvin) - 273.15;
    };
  })
  .controller('NavbarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });

