define(['./controllers.module'], function (controllers) {
    'use strict';
    controllers.controller('ExampleController', ['$scope', function ($scope) {
		// Controller magic
		$scope.text = 'Hello, Angular fanatic.';
	}]);
});