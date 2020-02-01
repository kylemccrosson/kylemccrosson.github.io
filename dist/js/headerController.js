let app = angular.module('siteApp', []);

app.controller('headerController', function($scope) {

  $scope.sections = {
    'Home': '#0',
    'Music': '#1',
    'Sound Design': '#2',
    'Data Viz': 'https://northeastern-ds-4200-f19.github.io/project-team-9-pedestrians',
    'Contact': '#3'
  }


});