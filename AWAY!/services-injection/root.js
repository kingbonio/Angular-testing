angular.module("root", ["services"])
    .controller("index", ["$scope", "multiplier",
        function($scope, multiplier) {
            $scope.product = multiplier.multiply(5);
        }])
