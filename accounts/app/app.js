angular.module('app', []);
angular.module('app').controller('AppCtrl', function($scope) {
	$scope.title = 'Accounts';
	$scope.jquery = $.fn.jquery;
});