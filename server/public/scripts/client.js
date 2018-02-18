var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp--config');
    $routeProvider
    .when('/main', {
        templateUrl: './views/templates/main.html',
        controller: 'MainController as mc'
    })
    .otherwise({
        redirectTo: 'main'
    });
});