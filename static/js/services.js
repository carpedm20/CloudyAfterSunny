angular.module('CloudyAfterSunnyApp.services', []).
  factory('weatherAPIservice', function($http) {

    var weatherAPI = {};

    weatherAPI.getWeathers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return weatherAPI;
  });