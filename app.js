function MainController ($scope) {
	//
	$scope.hello = 'Hello World';
}

var app = angular.module('app',[]);
app.controller('MainController',MainController);

