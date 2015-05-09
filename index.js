(function() {
	var app = angular.module('testCases', ['ngAnimate', 'App.filters', 'ngResource']);
	app.directive('focusMe', ['$timeout', focusMe]);
	app.factory('App.currency', currencyFactory);
	app.controller('currencyForm', ['$scope', 'App.currency', '$resource', currencyForm]);
	app.directive('dropdown', ['$timeout', 'App.currency', dropdown]);
}());