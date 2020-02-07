
/** Define the angular app */
let app = angular.module('siteApp', ["ngRoute"]);

/** Associate intra-site hyperlinks with the correct HTML code */
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
    .when('/contact', {
      templateUrl: 'dist/html/contact-page.html'
    })
});

/** Define the controller for the header */
app.controller('headerController', function($scope, $window) {

  $scope.sections = {
    'Home': "#/!",
    'Music': "#!music",
    'Sound Design': "#!sound_design",
    'Data Viz': 'https://northeastern-ds-4200-f19.github.io/project-team-9-pedestrians',
    'Contact': "#!contact"
  };

});