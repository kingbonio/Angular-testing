angular.module("services", [])
  .provider("users", [function(){
    this.$get = [function () {
      return new Users()
    }];
  }]);
