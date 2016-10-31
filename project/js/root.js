angular.module("root", ["services"])
  .config("usersProvider", function(usersProvider) {
  })
  .controller("index", ["$scope", function($scope){
    $scope.users = usersProvider.users;
  }])
  .controller("form", ["$scope", function($scope){
    $scope.$watch("name", function (name) {
 			$scope.nameEntry = "Name: " + name;
 		});
    $scope.name = "";
    $scope.$watch("age", function (age) {
 			$scope.ageEntry = "Age: " + age;
 		});
    $scope.age =  "";
 }]);
