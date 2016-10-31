angular.module("root", ["services"])
  .config(["messageProvider", function(messageProvider){
    messageProvider.setText("YOU banana!");
  }])
  .controller("index", ["$scope", "message",
    function($scope, message) {
      $scope.message = message.text;
    }])
