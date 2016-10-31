angular.module("root", ["services"])
	.config(["messageProvider", function (messageProvider) {
		messageProvider.setText("Hello world!");
	}])
	.controller("index", ["$scope", "message",
		function ($scope, message) {
			$scope.message = message.text;
		}]);

angular.module("services", [])
	.provider("message", [function () {
		var text = null;

		this.setText = function (textString) {
			text = textString;
		};

		this.$get = [function () {
			return new Message(text);
		}];
	}]);

    // ----------------------------------

angular.module("root", ["services"])
	.config(["messageProvider", "messageText",
		function (messageProvider, messageText) {
			messageProvider.setText(messageText);
		}])
	.controller("index", ["$scope", "message",
		function ($scope, message) {
			$scope.message = message.text;
		}]);




    angular.module("services", [])
	.constant("messageText", "Hello constant!")
	.provider("message", [function () {
		var text = null;

		this.setText = function (textString) {
			text = textString;
		};

		this.$get = [function () {
			return new Message(text);
		}];
	}]);



	// --------------------------------

	angular.module("root", [])
		.controller("index", ["$scope", function($scope) {
			$scope.$watch("factor", function (newValue) {
				$scope.product = newValue * 2;
			});

			$scope.factor = 6;
		}]);





	  angular.module("root", [])
	  	.controller("index", ["$scope", function($scope) {
	  		number = 6;
	  		input = $scope.factor
	  		$scope.$watch(["factor"],[function (input, number){
	  		    $scope.product = $scope.factor * 2
	  		}]);
	  	}]);
