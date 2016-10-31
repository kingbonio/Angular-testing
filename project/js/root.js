angular.module("root", ["services"])
  // inject Users object as userProvider
  .config(["usersProvider", function(usersProvider) {
    this.users = usersProvider;
  }])
  // Set controller for user input form
  .controller("form", ["$scope", "users", function($scope, users){
    // Add watch to name and age input boxes
    $scope.$watch("name", function (name) {
 			$scope.nameEntry = "Name: " + name;
 		});
    $scope.name = "";
    $scope.$watch("age", function (age) {
 			$scope.ageEntry = "Age: " + age;
 		});
    $scope.age =  "";
    // Link button to adding inputs to a new item, in Users array
    $scope.addUser = function() {
      users.addUser({
        name: $scope.name,
        age: $scope.age
      });
      $scope.name = "";
      $scope.age = "";
    };
 }])
// Build user list on page using user object's userList
 .controller("index", ["$scope", "users", function($scope, users){
   $scope.users = users.userList;
 }]);
