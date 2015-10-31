angular.module('app', []);
angular.module('app').controller('AppCtrl', function($scope) {
	$scope.title = 'Overview';
	$scope.jquery = $.fn.jquery;
});