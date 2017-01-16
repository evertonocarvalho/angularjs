/**
 * @author Everton Carvalho [evertonocarvalho@gmail.com]
 */

var app = angular.module("helloWorld", []);
app.controller("helloWorldController", function ($scope) {
	$scope.message = "Hello World!";
});