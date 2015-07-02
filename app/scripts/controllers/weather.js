'use strict';

/**
 * @ngdoc function
 * @name openWeatherDemoApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the openWeatherDemoApp
 */
angular.module('openWeatherDemoApp')
  .controller('WeatherCtrl', function ($scope, $http) {
  	$scope.city_name = '';
    $scope.lon = '';
    $scope.lat = '';
  	$scope.conditions = '';
  	$scope.temp = '';
  	$scope.min_temp = '';
  	$scope.max_temp = '';
  	$scope.pressure = '';
  	$scope.humidity = '';
    $scope.icon = '';

  	$scope.changeCity = function () {
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.myOption).success(function(data) {
      $scope.city_name = data.name;
      $scope.lon = data.coord.lon;
      $scope.lat =  data.coord.lat;
      $scope.conditions = data.weather[0].description;
      $scope.temp = data.main.temp;
      $scope.min_temp = data.main.temp_min;
      $scope.max_temp = data.main.temp_max;
      $scope.pressure = data.main.pressure;
      $scope.humidity = data.main.humidity;
      $scope.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    });
  	};

  });
