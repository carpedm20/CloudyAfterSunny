angular.module('CloudyAfterSunnyApp.controllers', []).

  /* Weathers controller */
  controller('weathersController', function($scope, weatherAPIservice) {
    $scope.geolocation = {};

    function setGeolocation(position) {
        $scope.geolocation.latitude = position.coords.latitude;
        $scope.geolocation.longitude = position.coords.longitude;
        alert($scope.geolocation.latitude);
    }

    navigator.geolocation.getCurrentPosition(setGeolocation);
}).

  /* Weather controller */
  controller('weatherController', function($scope, weatherAPIservice) {
    $scope.geolocation = {};

    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        $scope.geolocation['latitude'] = position.coords.latitude;
        $scope.geolocation['longitude'] = position.coords.longitude;
    }
});