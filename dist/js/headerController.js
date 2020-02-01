let app = angular.module('siteApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'dist/html/home-page.html'
    })
    .when('/music', {
      templateUrl: 'dist/html/music-page.html'
    })
    .when('/sound_design', {
      templateUrl: 'dist/html/sound-design-page.html'
    })
});

app.controller('headerController', function($scope) {

  $scope.sections = {
    'Home': "#/!",
    'Music': "#!music",
    'Sound Design': "#!sound_design",
    'Data Viz': 'https://northeastern-ds-4200-f19.github.io/project-team-9-pedestrians',
    'Contact': "#!contact"
  };

});