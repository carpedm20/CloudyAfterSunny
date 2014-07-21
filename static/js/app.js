angular.module('CloudyAfterSunnyApp', [
  'CloudyAfterSunnyApp.controllers',
  'CloudyAfterSunnyApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/weathers", {templateUrl: "templates/weathers.html", controller: "weathersController"}).
	when("/weathers/:id", {templateUrl: "templates/weather.html", controller: "weatherController"}).
	otherwise({redirectTo: '/weathers'});
}]);