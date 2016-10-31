angular.module("root", ["services"])

  .config(["usersProvider", function(usersProvider) {
    this.users = usersProvider;
  }])

  .controller("form", ["$scope", "users", function($scope, users){
    $scope.$watch("name", function (name) {
 			$scope.nameEntry = "Name: " + name;
 		});
    $scope.name = "";
    $scope.$watch("age", function (age) {
 			$scope.ageEntry = "Age: " + age;
 		});
    $scope.age =  "";
    $scope.addUser = function() {
      users.addUser({
        name: $scope.name,
        age: $scope.age
      });
      $scope.name = "";
      $scope.age = "";
    };
 }])

 .controller("index", ["$scope", "users", function($scope, users){
   $scope.users = users.userList;
 }]);
