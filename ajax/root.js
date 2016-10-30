angular.module("root", ["ngResource"])
	.controller("index", ["$scope", "$resource", function($scope, $resource) {
		var users = $resource("http://www.learn-angular.org/ResourceLesson/Users/:id");

		$scope.getUser = function () {
			$scope.user = users.get({id: 1});
		};

		$scope.postUser = function () {
			var response = $scope.user.$save(function () {
				alert("User saved!");
			});
		};
	}]);
