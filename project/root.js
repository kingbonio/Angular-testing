angular.module("root", [])
  .controller("index", ["$scope", function($scope){
    $scope.users = [
      {name: "david", age: 47},
      {name: "craig", age: 13},
      {name: "barrie", age: 22},
      {name: "sheila", age: 64},
      {name: "agnes", age: 75}
    ];
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
