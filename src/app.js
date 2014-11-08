angular.module('hello-protractor', [])
	.controller('AppCtrl', function ($scope) {
		$scope.updateMessageText = function (text) {
			$scope.messageText = text;
		};
	});
